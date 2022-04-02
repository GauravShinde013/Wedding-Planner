package com.wedding.entities;


import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "user")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private int id;
	
	@Column(name = "user_firstname")
	private String firstName;
	
	@Column(name = "user_lastname")
	private String lastName;
	
	@Column(name = "user_email")
	private String email;
	
	@Column(name = "user_password")
	private String password;
	
	@Column(name = "user_mobile")
	private String mobile;	
	
	@Column(name = "user_addressline")
	private String addressLine;
	
	@Column(name = "user_city")
	private String city;
	
	@Column(name = "user_state")
	private String state;
	
	@Column(name = "user_pincode")
	private int pincode;
	
	@Column(name = "user_profilephoto")
	private String profileImage;
	
	@Column(name = "user_role")
	private String role;
	
	@Column(name = "createdtimestamp", insertable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdTimestamp;

	@OneToMany(mappedBy = "user")
	private List<VendorServiceDetails> serviceDetails;
	
	@OneToMany(mappedBy = "customer")
	private List<RatingReviews> feedback;
	
	@OneToMany(mappedBy = "client")
	private List<Booking> bookings;
	
	@OneToOne(mappedBy = "author")
	@PrimaryKeyJoinColumn
	private Blog blog;
	
	public User() {
		
	}

	

	public User(int id, String firstName, String lastName, String email, String password, String mobile,
			String addressLine, String city, String state, int pincode, String profileImage, String role,
			Date createdTimestamp) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.mobile = mobile;
		this.addressLine = addressLine;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
		this.profileImage = profileImage;
		this.role = role;
		this.createdTimestamp = createdTimestamp;

	}
	
	
	public User(int id) {
		this.id = id;
	}


	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
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



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public String getMobile() {
		return mobile;
	}



	public void setMobile(String mobile) {
		this.mobile = mobile;
	}



	public String getAddressLine() {
		return addressLine;
	}



	public void setAddressLine(String addressLine) {
		this.addressLine = addressLine;
	}



	public String getCity() {
		return city;
	}



	public void setCity(String city) {
		this.city = city;
	}



	public String getState() {
		return state;
	}



	public void setState(String state) {
		this.state = state;
	}



	public int getPincode() {
		return pincode;
	}



	public void setPincode(int pincode) {
		this.pincode = pincode;
	}



	public String getProfileImage() {
		return profileImage;
	}



	public void setProfileImage(String profileImage) {
		this.profileImage = profileImage;
	}



	public String getRole() {
		return role;
	}



	public void setRole(String role) {
		this.role = role;
	}



	public Date getCreatedTimestamp() {
		return createdTimestamp;
	}



	public void setCreatedTimestamp(Date createdTimestamp) {
		this.createdTimestamp = createdTimestamp;
	}



	@Override
	public String toString() {
		return "User [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", password=" + password + ", mobile=" + mobile + ", profileImage=" + profileImage + "]";
	}


//
//	public List<VendorServiceDetails> getServiceDetails() {
//		return serviceDetails;
//	}
//
//
//
//	public void setServiceDetails(List<VendorServiceDetails> serviceDetails) {
//		this.serviceDetails = serviceDetails;
//	}


//
//	public List<RatingReviews> getFeedback() {
//		return feedback;
//	}
//
//
//
//	public void setFeedback(List<RatingReviews> feedback) {
//		this.feedback = feedback;
//	}





	



	
	
}

















