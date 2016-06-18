package com.thoughtbend.checklistapi.endpoint;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import com.thoughtbend.checklistapi.resource.ChecklistResource;

@Path("/checklist")
public class ChecklistApi {

	private final static Map<String, ChecklistResource> CHECKLIST_STORE = new HashMap<>();
	
	@GET
	@Produces("application/json")
	public List<ChecklistResource> query() {
		
		if (CHECKLIST_STORE.isEmpty()) {
			
			final ChecklistResource checklist = new ChecklistResource();
			checklist.setId("MN-1234");
			checklist.setName("Mike's Code Review");
			
			CHECKLIST_STORE.put(checklist.getId(), checklist);
		}
		
		return new ArrayList<>(CHECKLIST_STORE.values());
	}
}
