package com.wedding.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name="blog")
public class Blog {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "blog_id")
	private int blogId;
	@Column(name = "blog_title")
	private String title;
	
	@Column(name = "wedding_city")
	private String weddingCity;
	
	@Column(name = "wedding_blog")
	private String description;
	
	@Column(name = "blog_image_url")
	private String blogImageUrl;
	
	@Column(name = "createdtimestamp", insertable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdTimestamp;
	
	@OneToOne
	@JoinColumn(name="user_id")
	private User author;
	
	
	
	
	public Blog() {
		
	}



	public Blog(int blogId, String title, String weddingCity, String description, String blogImageUrl,
			Date createdTimestamp, User author) {
		super();
		this.blogId = blogId;
		this.title = title;
		this.weddingCity = weddingCity;
		this.description = description;
		this.blogImageUrl = blogImageUrl;
		this.createdTimestamp = createdTimestamp;
		this.author = author;
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




	public String getBlogImageUrl() {
		return blogImageUrl;
	}




	public void setBlogImageUrl(String blogImageUrl) {
		this.blogImageUrl = blogImageUrl;
	}




	public Date getCreatedTimestamp() {
		return createdTimestamp;
	}




	public void setCreatedTimestamp(Date createdTimestamp) {
		this.createdTimestamp = createdTimestamp;
	}




	public User getAuthor() {
		return author;
	}




	public void setAuthor(User author) {
		this.author = author;
	}

	
	
	
	
	
}





























