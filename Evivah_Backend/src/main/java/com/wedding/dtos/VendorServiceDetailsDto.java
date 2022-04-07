package com.wedding.dtos;

import java.util.Date;
import java.util.List;

public class VendorServiceDetailsDto {
	private int serviceId;
	private String brandName;
	private String specification;
	private String description;
	private double servicePrice;
	private int masterServiceId;
	private String masterServiceName;
	private int userId;
	private int isApproved;
	private Date createdTimestamp;
	private String firstName;
	private String lastName;
	private String profilePicLink;
	private String vendorCity;
	private String email;
	private String mobile;
	
	private List<String> imgList;
	
	
	private List<ServiceFeedbackDto> feedbackList;
	
	
	
	public VendorServiceDetailsDto() {
		
	}


// TO BE USED WHILE DISPLAYING SERVICE DETAILS
	public VendorServiceDetailsDto(int serviceId, String brandName, String specification, String description,
			double servicePrice, int masterServiceId, String masterServiceName, int userId,
			String firstName, String lastName) {
		
		this.serviceId = serviceId;
		this.brandName = brandName;
		this.specification = specification;
		this.description = description;
		this.servicePrice = servicePrice;
		this.masterServiceId = masterServiceId;
		this.masterServiceName = masterServiceName;
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
	}

// TO BE USED WHILE ADDING SERVICE DETAILS
	public VendorServiceDetailsDto(int serviceId, String brandName, String specification, String description,
			double servicePrice,  int masterServiceId, int userId, int isApproved,
			Date createdTimestamp) {
		
		this.serviceId = serviceId;
		this.brandName = brandName;
		this.specification = specification;
		this.description = description;
		this.servicePrice = servicePrice;
		this.masterServiceId = masterServiceId;
		this.userId = userId;
		this.isApproved = isApproved;
		this.createdTimestamp = createdTimestamp;
	}

	

	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getMobile() {
		return mobile;
	}


	public void setMobile(String mobile) {
		this.mobile = mobile;
	}


	public String getVendorCity() {
		return vendorCity;
	}


	public void setVendorCity(String vendorCity) {
		this.vendorCity = vendorCity;
	}


	public String getProfilePicLink() {
		return profilePicLink;
	}


	public void setProfilePicLink(String profilePicLink) {
		this.profilePicLink = profilePicLink;
	}


	public int getServiceId() {
		return serviceId;
	}


	public void setServiceId(int serviceId) {
		this.serviceId = serviceId;
	}


	public String getBrandName() {
		return brandName;
	}


	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}


	public String getSpecification() {
		return specification;
	}


	public void setSpecification(String specification) {
		this.specification = specification;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public double getServicePrice() {
		return servicePrice;
	}


	public void setServicePrice(double servicePrice) {
		this.servicePrice = servicePrice;
	}



	public int getMasterServiceId() {
		return masterServiceId;
	}


	public void setMasterServiceId(int masterServiceId) {
		this.masterServiceId = masterServiceId;
	}


	public String getMasterServiceName() {
		return masterServiceName;
	}


	public void setMasterServiceName(String masterServiceName) {
		this.masterServiceName = masterServiceName;
	}


	public int getUserId() {
		return userId;
	}


	public void setUserId(int userId) {
		this.userId = userId;
	}


	public int getIsApproved() {
		return isApproved;
	}


	public void setIsApproved(int isApproved) {
		this.isApproved = isApproved;
	}


	public Date getCreatedTimestamp() {
		return createdTimestamp;
	}


	public void setCreatedTimestamp(Date createdTimestamp) {
		this.createdTimestamp = createdTimestamp;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	

	public List<String> getImgList() {
		return imgList;
	}


	public void setImgList(List<String> imgList) {
		this.imgList = imgList;
	}
	

	public List<ServiceFeedbackDto> getFeedbackList() {
		return feedbackList;
	}


	public void setFeedbackList(List<ServiceFeedbackDto> feedbackList) {
		this.feedbackList = feedbackList;
	}
	


	@Override
	public String toString() {
		return "VendorServiceDetailsDto [serviceId=" + serviceId + ", brandName=" + brandName + ", specification="
				+ specification + ", description=" + description + ", servicePrice=" + servicePrice
				+ ", masterServiceId=" + masterServiceId + ", masterServiceName=" + masterServiceName + ", userId="
				+ userId + ", isApproved=" + isApproved + ", createdTimestamp=" + createdTimestamp + ", firstName="
				+ firstName + ", lastName=" + lastName + ", profilePicLink=" + profilePicLink + ", vendorCity="
				+ vendorCity + ", imgList=" + imgList +  ", feedbackList="
				+ feedbackList + "]";
	}


	
	
	
	
	
	
}



























