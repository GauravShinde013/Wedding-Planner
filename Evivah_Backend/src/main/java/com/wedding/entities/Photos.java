package com.wedding.entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.lang.Nullable;



@Entity
@Table(name="photos")
public class Photos {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "p_id")
	private int id;
	
	
	
	@Column(name="image")
	private String imageLink;
	
	@Column(name = "createdtimestamp", insertable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdTimestamp;
	
	@ManyToOne
	@JoinColumn(name = "vs_id")
	private VendorServiceDetails vendorPhotos;

	public Photos() {
		
	}

	public Photos(int id,  String imageLink, Date createdTimestamp) {
		super();
		this.id = id;
		this.imageLink = imageLink;
		this.createdTimestamp = createdTimestamp;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}


	public String getImageLink() {
		return imageLink;
	}

	public void setImageLink(String imageLink) {
		this.imageLink = imageLink;
	}

	public Date getCreatedTimestamp() {
		return createdTimestamp;
	}

	public void setCreatedTimestamp(Date createdTimestamp) {
		this.createdTimestamp = createdTimestamp;
	}

	public VendorServiceDetails getVendorPhotos() {
		return vendorPhotos;
	}

	public void setVendorPhotos(VendorServiceDetails vendorPhotos) {
		this.vendorPhotos = vendorPhotos;
	}
	
	

	

	
	
}
