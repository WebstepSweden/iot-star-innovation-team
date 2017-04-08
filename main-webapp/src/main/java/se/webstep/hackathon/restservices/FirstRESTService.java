package se.webstep.hackathon.restservices;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("/serviceTest")
public class FirstRESTService {

	@GET
	public String testRestCall(){
		return "funkar OK";
	}
}
