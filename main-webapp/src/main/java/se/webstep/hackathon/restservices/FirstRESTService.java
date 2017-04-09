package se.webstep.hackathon.restservices;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import se.webstep.hackathon.redis.RedisClient;

@Path("/serviceTest")
public class FirstRESTService {
	
	private RedisClient redisClient;

	public FirstRESTService(){
		redisClient=new RedisClient();
	}
	
	@GET
	@Produces({"application/text"})
	@Path("/restCall/{subKey}")
	public String testRestCall(@PathParam("subKey") String subkey){
		return redisClient.hamtaValue(subkey,1);
	}
	
	@GET
    @Produces({"application/text"})
	@Path("/room/{roomId}")
	public String testGetAllStateInRoom(@PathParam("roomId") String roomId){
		return redisClient.hamtaAllaNycklarForRoom(roomId);
	}
}
