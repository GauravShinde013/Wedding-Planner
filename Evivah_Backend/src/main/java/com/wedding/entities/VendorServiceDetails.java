package com.wedding.entities;

import java.util.ArrayList;
import java.util.Date;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "vendor_service_details")
public class VendorServiceDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "vs_id")
	private int vendorServiceDetailsId;

	@Column(name = "d_brandname")
	private String brandName;
	@Column(name = "d_specification")
	private String specification;
	@Column(name = "d_servicedetails")
	private String serviceDetails;
	@Column(name = "d_serviceprice")
	private double servicePrice;

	@Column(name = "vs_isapproved", insertable = false)
	private int isApproved;

	@Column(name = "createdtimestamp", insertable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdTimestamp;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "user_id")
	private User user;

	@OneToMany(mappedBy = "services")
	private List<RatingReviews> feedback;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "v_service_id")
	private MasterServices masterService;

	@OneToMany(mappedBy = "vendorService")
	private List<Orders> booking;

	@OneToMany(mappedBy = "vendorPhotos", cascade = { CascadeType.PERSIST })
	private List<Photos> imgList;

	public VendorServiceDetails() {

	}

	public VendorServiceDetails(int vendorServiceDetailsId, String brandName, String specification,
			String serviceDetails, double servicePrice, int isApproved, Date createdTimestamp) {

		this.vendorServiceDetailsId = vendorServiceDetailsId;
		this.brandName = brandName;
		this.specification = specification;
		this.serviceDetails = serviceDetails;
		this.servicePrice = servicePrice;
		this.isApproved = isApproved;
		this.createdTimestamp = createdTimestamp;

	}

	public VendorServiceDetails(int vendorServiceDetailsId) {
		this.vendorServiceDetailsId = vendorServiceDetailsId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<RatingReviews> getFeedback() {
		return feedback;
	}

	public void setFeedback(List<RatingReviews> feedback) {
		this.feedback = feedback;
	}

	public MasterServices getMasterService() {
		return masterService;
	}

	public void setMasterService(MasterServices masterService) {
		this.masterService = masterService;
	}

	public int getVendorServiceDetailsId() {
		return vendorServiceDetailsId;
	}

	public void setVendorServiceDetailsId(int vendorServiceDetailsId) {
		this.vendorServiceDetailsId = vendorServiceDetailsId;
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

	public String getServiceDetails() {
		return serviceDetails;
	}

	public void setServiceDetails(String serviceDetails) {
		this.serviceDetails = serviceDetails;
	}

	public double getServicePrice() {
		return servicePrice;
	}

	public void setServicePrice(double servicePrice) {
		this.servicePrice = servicePrice;
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

	public List<Orders> getBooking() {
		return booking;
	}

	public void setBooking(List<Orders> booking) {
		this.booking = booking;
	}
//	public List<Booking> getBooking() {
//		return booking;
//	}
//	
//	
//	public void setBooking(List<Booking> booking) {
//		this.booking = booking;
//	}

	public List<Photos> getImgList() {
		return imgList;
	}

	public void setImgList(List<Photos> imgList) {
		this.imgList = imgList;
	}

	public void addPhotos(Photos img) {
		if (this.imgList == null) {
			this.imgList = new ArrayList<>();
		}
		int index = this.imgList.indexOf(img);
		if (index == -1) {
			this.imgList.add(img);
		} else {
			this.imgList.set(index, img);
		}
		img.setVendorPhotos(this);
	}

	@Override
	public String toString() {
		return "VendorServiceDetails [vendorServiceDetailsId=" + vendorServiceDetailsId + ", brandName=" + brandName
				+ ", specification=" + specification + ", serviceDetails=" + serviceDetails + ", servicePrice="
				+ servicePrice + ", isApproved=" + isApproved + ", createdTimestamp=" + createdTimestamp + ", imgList="
				+ imgList + "]";
	}

}
