package se.webstep.hackathon.redis;

import redis.clients.jedis.Jedis;

public class RedisClient {
	
	private Jedis jedis;
	
	public RedisClient(){
		jedis=new Jedis("localhost");
	}
	
	public String hamtaValue(String key, Integer doorId){
		return jedis.hget(key, "frontdoor:"+doorId);
	}
	
	public String hamtaAllaNycklarForRoom(String roomId){
		return jedis.hgetAll(roomId).toString();
	}

}
