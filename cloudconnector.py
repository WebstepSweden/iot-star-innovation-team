#!/usr/bin/env python3

import asyncio
import aiohttp
import os
import json
import datetime
from asyncio import async

import redis


# Global vars
api_key = os.getenv('DT_APIKEY')
dt_sub_ep = 'https://api.disruptive-technologies.com/v1/subscribe'
headers = {
    'authorization': 'ApiKey {}'.format(api_key),
    'cache-control': 'no-cache',
    'accept': 'text/event-stream',
}


# Global Redis setup
rc = redis.Redis(decode_responses=True)
our_ids = rc.smembers('thing_ids')


# This should really be a separate coroutine instead (later on...)
def add_redis(event):
    # Determine type of sensor pressed
    thing_key = 'thing_id:{}'.format(event.get('thing_id'))
    _type = rc.hget(thing_key, 'type')
    print(_type)

    # Determine sensor location
    location_key = rc.hget(thing_key, 'location_key')

    # Update last updated
    rc.hset(thing_key, 'updated', event.get('timestamp'))

    # Specific characteristics for each sensor
    # (touch applies for all sensors and only updates timestamp)
    if _type == 'temp':
        current_temp = event.get('state_changed', {}).get('temperature')
        if current_temp is not None:
            rc.hset(thing_key, 'current_temp', current_temp)
            rc.publish(
                'events',
                '{}:current_temp:{}'.format(location_key, current_temp)
            )
    elif _type == 'proximity':
        object_present = event.get('state_changed', {}).get('object_present')
        current_open_state = rc.hget(thing_key, 'open')
        if object_present is not None and int(not object_present) != int(current_open_state):
            _open = int(not object_present)
            rc.hset(thing_key, 'open', _open)
            rc.publish('events', '{}:open:{}'.format(location_key, _open))
    elif _type == 'touch':
        pressed = event.get('state_changed', {}).get('touch')
        if pressed:  # Only publish when pressed, not heartbeats
            rc.publish('events', location_key)


async def fetch(session):
    print('Query {}'.format(dt_sub_ep))
    async with session.get(
        dt_sub_ep,
        headers=headers,
        timeout=0,
    ) as resp:
        while True:
            chunk = await resp.content.readline()
            chunk = chunk.decode('utf-8').strip()
            data = chunk.split(' ')
            if len(data) == 2:
                json_event = data[1]
                try:
                    event = json.loads(json_event).get('result')
                    if event.get('thing_id') in our_ids:
                        # This should be added to a asyncio.Queue and consumed
                        # by a separate coroutine instead
                        add_redis(event)
                except:
                    pass


async def go(loop):
    async with aiohttp.ClientSession(loop=loop) as session:
        await fetch(session)


loop = asyncio.get_event_loop()
loop.run_until_complete(go(loop))
loop.close()
