package com.wedding.entities;

import java.util.Date;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


@Entity
@Table(name="rating_reviews")
public class RatingReviews {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "r_id")
	private int ratingId;
	@Column(name = "r_rating")
	private double rating;
	@Column(name = "r_reviews")
	private String review;
	@Column(name = "createdtimestamp", insertable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdTimestamp;

	@ManyToOne( fetch = FetchType.EAGER )
	@JoinColumn(name="vs_id")
	private VendorServiceDetails services;
	
	
	@ManyToOne(fetch = FetchType.EAGER )
	@JoinColumn(name="user_id")
	private User customer;
	
	
	public RatingReviews() {
		
	}


	public RatingReviews(int ratingId,  double rating, String review, Date createdTimestamp,
			VendorServiceDetails services, User customer) {
		super();
		this.ratingId = ratingId;
	
		this.rating = rating;
		this.review = review;
		this.createdTimestamp = createdTimestamp;
		this.services = services;
		this.customer = customer;
	}


	public int getRatingId() {
		return ratingId;
	}


	public void setRatingId(int ratingId) {
		this.ratingId = ratingId;
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


	public Date getCreatedTimestamp() {
		return createdTimestamp;
	}


	public void setCreatedTimestamp(Date createdTimestamp) {
		this.createdTimestamp = createdTimestamp;
	}


	public VendorServiceDetails getServices() {
		return services;
	}


	public void setServices(VendorServiceDetails services) {
		this.services = services;
	}


	public User getCustomer() {
		return customer;
	}


	public void setCustomer(User customer) {
		this.customer = customer;
	}


	@Override
	public String toString() {
		return "RatingReviews [ratingId=" + ratingId  + ", rating=" + rating + ", review="
				+ review + ", createdTimestamp=" + createdTimestamp + ", services=" + services + "]";
	}
	
	
	

	



	
	
	
	
}
