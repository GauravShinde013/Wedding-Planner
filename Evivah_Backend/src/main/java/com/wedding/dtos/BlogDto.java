package com.wedding.dtos;

import java.util.Date;

import org.springframework.web.multipart.MultipartFile;

public class BlogDto {
	
	private int blogId;
	private String title;
	
	private String weddingCity;
	private String description;
	
	private Date createdTimestamp;
	private int authorId;
	
	private MultipartFile blogImage;
	
	private String blogImageLink;
	
	private String authorFirstName;
	private String authorLastName;
	private String authorProfileUrl;
	
	public BlogDto() {
		
	}
	
	public BlogDto(int blogId, String title, String weddingCity, String description, Date createdTimestamp,
			int authorId, String authorFirstName, String authorLastName, MultipartFile blogImage,String authorProfileUrl) {
		this.blogId = blogId;
		this.title = title;
		this.weddingCity = weddingCity;
		this.description = description;
		this.createdTimestamp = createdTimestamp;
		this.authorId = authorId;
		this.authorFirstName = authorFirstName;
		this.authorLastName = authorLastName;
		this.blogImage = blogImage;
		this.authorProfileUrl = authorProfileUrl;
	}
	
	public BlogDto(int blogId, String title, String weddingCity, String description, Date createdTimestamp,
			 String authorFirstName, String authorLastName,MultipartFile blogImage,String authorProfileUrl) {
		this.blogId = blogId;
		this.title = title;
		this.weddingCity = weddingCity;
		this.description = description;
		this.createdTimestamp = createdTimestamp;
		this.authorFirstName = authorFirstName;
		this.authorLastName = authorLastName;
		this.blogImage = blogImage;
		this.authorProfileUrl = authorProfileUrl;
	}



	public BlogDto(int blogId, String title, String weddingCity, String description, Date createdTimestamp,
			int authorId, MultipartFile blogImage,String authorProfileUrl) {
		this.blogId = blogId;
		this.title = title;
		this.weddingCity = weddingCity;
		this.description = description;
		this.createdTimestamp = createdTimestamp;
		this.authorId = authorId;
		this.blogImage = blogImage;
		this.authorProfileUrl = authorProfileUrl;
		
	}

	

	public int getBlogId() {
		return blogId;
	}

	public void setBlogId(int blogId) {
		this.blogId = blogId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getWeddingCity() {
		return weddingCity;
	}

	public void setWeddingCity(String weddingCity) {
		this.weddingCity = weddingCity;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getCreatedTimestamp() {
		return createdTimestamp;
	}

	public void setCreatedTimestamp(Date createdTimestamp) {
		this.createdTimestamp = createdTimestamp;
	}

	public int getAuthorId() {
		return authorId;
	}

	public void setAuthorId(int authorId) {
		this.authorId = authorId;
	}

	public String getAuthorFirstName() {
		return authorFirstName;
	}

	public void setAuthorFirstName(String authorFirstName) {
		this.authorFirstName = authorFirstName;
	}

	public String getAuthorLastName() {
		return authorLastName;
	}

	public void setAuthorLastName(String authorLastName) {
		this.authorLastName = authorLastName;
	}

	public String getBlogImageLink() {
		return blogImageLink;
	}

	public void setBlogImageLink(String blogImageLink) {
		this.blogImageLink = blogImageLink;
	}

	public MultipartFile getBlogImage() {
		return blogImage;
	}

	public void setBlogImage(MultipartFile blogImage) {
		this.blogImage = blogImage;
	}
	
	
	public String getAuthorProfileUrl() {
		return authorProfileUrl;
	}

	public void setAuthorProfileUrl(String authorProfileUrl) {
		this.authorProfileUrl = authorProfileUrl;
	}

	@Override
	public String toString() {
		return "BlogDto [title=" + title + ", weddingCity=" + weddingCity + ", description=" + description
				+ ", authorId=" + authorId + "]";
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
