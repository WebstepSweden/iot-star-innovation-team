package se.webstep.hackathon.restservices;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

import se.webstep.hackathon.redis.RedisClient;

@Path("/serviceTest/{subKey}")
public class FirstRESTService {
	
	private RedisClient redisClient;

	public FirstRESTService(){
		redisClient=new RedisClient();
	}
	
	@GET
	public String testRestCall(@PathParam("subKey") String subkey){
		return redisClient.hamtaValue("tenant:1", 1);
	}
}
