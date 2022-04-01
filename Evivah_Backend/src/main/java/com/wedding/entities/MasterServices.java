package com.wedding.entities;

import java.util.Arrays;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "master_services")
public class MasterServices {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "v_service_id")
	private int masterId;
	@Column(name = "s_servicename")
	private String serviceName;
	
	@Column(name = "s_thumbnail_Link")
	private String thumbnailLink;

	@OneToMany(mappedBy = "masterService")
	private List<VendorServiceDetails> vendorServiceDetailList;

	public MasterServices() {

	}

	public MasterServices(int masterId, String serviceName, String thumbnailLink) {
		super();
		this.masterId = masterId;
		this.serviceName = serviceName;
		this.thumbnailLink = thumbnailLink;
	}
	
	public MasterServices(int masterId) {
		this.masterId = masterId;
	}
	

	public int getMasterId() {
		return masterId;
	}

	public void setMasterId(int masterId) {
		this.masterId = masterId;
	}

	public String getServiceName() {
		return serviceName;
	}

	public void setServiceName(String serviceName) {
		this.serviceName = serviceName;
	}

	
	public List<VendorServiceDetails> getVendorServiceDetailList() {
		return vendorServiceDetailList;
	}

	public void setVendorServiceDetailList(List<VendorServiceDetails> vendorServiceDetailList) {
		this.vendorServiceDetailList = vendorServiceDetailList;
	}
	
	

	public String getThumbnailLink() {
		return thumbnailLink;
	}

	public void setThumbnailLink(String thumbnailLink) {
		this.thumbnailLink = thumbnailLink;
	}

	@Override
	public String toString() {
		return "MasterServices [masterId=" + masterId + ", serviceName=" + serviceName + ", thumbnail="
				+ thumbnailLink + "]";
	}

}
