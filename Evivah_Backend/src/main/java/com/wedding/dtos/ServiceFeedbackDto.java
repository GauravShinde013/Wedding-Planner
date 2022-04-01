package com.wedding.dtos;

import java.util.Date;

public class ServiceFeedbackDto {
	private int  ratingId;
	private int vendorServiceDetailsId;
	private int customerId;
	private double rating;
	private String review;
	private String firstName;
	private String lastName;
	private Date createdTimeStamp;
	private String profileImg;
	
	
	public ServiceFeedbackDto() {
		
	}
	
	public ServiceFeedbackDto(int ratingId, int vendorServiceDetailsId, int customerId, double rating, String review,
			Date createdTimeStamp, String firstName, String lastName) {

		this.ratingId = ratingId;
		this.vendorServiceDetailsId = vendorServiceDetailsId;
		this.customerId = customerId;
		this.rating = rating;
		this.review = review;
		this.createdTimeStamp = createdTimeStamp;
		this.firstName = firstName;
		this.lastName = lastName;
	}

	
	
	public String getProfileImg() {
		return profileImg;
	}

	public void setProfileImg(String profileImg) {
		this.profileImg = profileImg;
	}

	public int getRatingId() {
		return ratingId;
	}

	public void setRatingId(int ratingId) {
		this.ratingId = ratingId;
	}

	public int getVendorServiceDetailsId() {
		return vendorServiceDetailsId;
	}

	public void setVendorServiceDetailsId(int vendorServiceDetailsId) {
		this.vendorServiceDetailsId = vendorServiceDetailsId;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public double getRating() {
		return rating;
	}

	public void setRating(double rating) {
		this.rating = rating;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	public Date getCreatedTimeStamp() {
		return createdTimeStamp;
	}

	public void setCreatedTimeStamp(Date createdTimeStamp) {
		this.createdTimeStamp = createdTimeStamp;
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

	@Override
	public String toString() {
		return "ServiceFeedbackDto [ratingId=" + ratingId + ", vendorServiceDetailsId=" + vendorServiceDetailsId
				+ ", customerId=" + customerId + ", rating=" + rating + ", review=" + review + ", firstName="
				+ firstName + ", lastName=" + lastName + ", createdTimeStamp=" + createdTimeStamp + "]";
	}

	
	
	
	
	
	
}
