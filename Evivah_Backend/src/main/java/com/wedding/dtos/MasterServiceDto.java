package com.wedding.dtos;

import java.util.List;

import com.wedding.entities.VendorServiceDetails;

public class MasterServiceDto {
	private int id;
	private String serviceName;
	private String thumbnailLink;
	
	

	public MasterServiceDto() {
		
	}
	
	public MasterServiceDto(int id, String serviceName, String thumbnailLink) {
		this.id = id;
		this.serviceName = serviceName;
		this.thumbnailLink = thumbnailLink;
	}
	
	
	
	public MasterServiceDto(int id, String serviceName, List<VendorServiceDetails> allServicesOfSpecificMaster) {
		super();
		this.id = id;
		this.serviceName = serviceName;
		
	}
	
	
	

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getServiceName() {
		return serviceName;
	}
	public void setServiceName(String serviceName) {
		this.serviceName = serviceName;
	}

	public String getThumbnailLink() {
		return thumbnailLink;
	}

	public void setThumbnailLink(String thumbnailLink) {
		this.thumbnailLink = thumbnailLink;
	}

	
	
	
	
}
