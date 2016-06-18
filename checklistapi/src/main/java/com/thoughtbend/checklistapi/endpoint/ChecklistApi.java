package com.thoughtbend.checklistapi.endpoint;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import org.json.JSONArray;

import com.thoughtbend.checklistapi.resource.ChecklistResource;

@Path("/checklist")
public class ChecklistApi {

	private final static Map<String, ChecklistResource> CHECKLIST_STORE = new HashMap<>();
	
	@GET
	@Produces("application/json")
	public Response query() {
		
		if (CHECKLIST_STORE.isEmpty()) {
			
			final ChecklistResource checklist = new ChecklistResource();
			checklist.setId("MN-1234");
			checklist.setName("Mike's Code Review");
			
			CHECKLIST_STORE.put(checklist.getId(), checklist);
		}
		
		JSONArray resultArray = new JSONArray(CHECKLIST_STORE.values());
		
		return Response.status(200).entity(resultArray.toString()).build();
	}
}
