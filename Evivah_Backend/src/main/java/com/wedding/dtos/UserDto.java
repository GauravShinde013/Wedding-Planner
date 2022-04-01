package com.wedding.dtos;

import java.util.Date;

import org.springframework.web.multipart.MultipartFile;

public class UserDto {

	private int id;
	private String firstName;
	private String lastName;
	private String email;
	private String mobile;
	private String password;
	private String role;
	
	private MultipartFile profilePic;
	private String profilePicUrl;
	private String city;
	private Date createdTimestamp;
	
	public UserDto() {
		
	}

	

	public UserDto(int id, String firstName, String lastName, String email, String mobile, String password,String role,MultipartFile profilePic) {
		
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.mobile = mobile;
		this.password = password;
		this.role=role;
		this.profilePic=profilePic;
	}
	
	


	public UserDto(int id, String firstName, String lastName, String email, String mobile, String password, String role,
			MultipartFile profilePic, String profilePicUrl, String city, Date createdTimestamp) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.mobile = mobile;
		this.password = password;
		this.role = role;
		this.profilePic = profilePic;
		this.profilePicUrl = profilePicUrl;
		this.city = city;
		this.createdTimestamp = createdTimestamp;
	}



	public String getProfilePicUrl() {
		return profilePicUrl;
	}



	public void setProfilePicUrl(String profilePicUrl) {
		this.profilePicUrl = profilePicUrl;
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


	public String getMobile() {
		return mobile;
	}


	public void setMobile(String mobile) {
		this.mobile = mobile;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public MultipartFile getProfilePic() {
		return profilePic;
	}



	public void setProfilePic(MultipartFile profilePic) {
		this.profilePic = profilePic;
	}



	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public Date getCreatedTimestamp() {
		return createdTimestamp;
	}


	public void setCreatedTimestamp(Date createdTimestamp) {
		this.createdTimestamp = createdTimestamp;
	}



	public String getRole() {
		return role;
	}



	public void setRole(String role) {
		this.role = role;
	}



	@Override
	public String toString() {
		return "UserDto [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", mobile=" + mobile + ", password=" + password + ", role=" + role + ", city=" + city
				+ ", createdTimestamp=" + createdTimestamp + "]";
	}

	

	

	
	
	
	
	
}



















