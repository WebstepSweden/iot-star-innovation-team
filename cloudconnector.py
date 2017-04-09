#!/usr/bin/env python3

import asyncio
import aiohttp
import os
import json
import redis
from asyncio import async


# Global vars
api_key = os.getenv('DT_APIKEY')
dt_sub_ep = 'https://api.disruptive-technologies.com/v1/subscribe'
headers = {
    'authorization': 'ApiKey {}'.format(api_key),
    'cache-control': 'no-cache',
    'accept': 'text/event-stream',
}

# Redis setup
rc = redis.Redis(decode_responses=True)
our_ids = rc.smembers('thing_ids')

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
                        print(event)
                except:
                    pass


async def go(loop):
    async with aiohttp.ClientSession(loop=loop) as session:
        await fetch(session)


loop = asyncio.get_event_loop()
loop.run_until_complete(go(loop))
loop.close()
