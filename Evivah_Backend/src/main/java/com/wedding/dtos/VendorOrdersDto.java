package com.wedding.dtos;

import java.util.List;

import com.wedding.entities.Booking;

public class VendorOrdersDto {
	private int orderId;
	private int serviceId;
	private String vendorFirstName;
	private String vendorLastName;
	private double servicePrice;
	private String serviceName;

	CustomizeBookingDto bookingList;
	
	public VendorOrdersDto() {
		
	}

	public VendorOrdersDto(int orderId, int serviceId, String vendorFirstName, String vendorLastName,
			double servicePrice, String serviceName, CustomizeBookingDto bookingList) {
		super();
		this.orderId = orderId;
		this.serviceId = serviceId;
		this.vendorFirstName = vendorFirstName;
		this.vendorLastName = vendorLastName;
		this.servicePrice = servicePrice;
		this.serviceName = serviceName;
		this.bookingList = bookingList;
	}

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public int getServiceId() {
		return serviceId;
	}

	public void setServiceId(int serviceId) {
		this.serviceId = serviceId;
	}

	public String getVendorFirstName() {
		return vendorFirstName;
	}

	public void setVendorFirstName(String vendorFirstName) {
		this.vendorFirstName = vendorFirstName;
	}

	public String getVendorLastName() {
		return vendorLastName;
	}

	public void setVendorLastName(String vendorLastName) {
		this.vendorLastName = vendorLastName;
	}

	public double getServicePrice() {
		return servicePrice;
	}

	public void setServicePrice(double servicePrice) {
		this.servicePrice = servicePrice;
	}

	public String getServiceName() {
		return serviceName;
	}

	public void setServiceName(String serviceName) {
		this.serviceName = serviceName;
	}

	public CustomizeBookingDto getBookingList() {
		return bookingList;
	}

	public void setBookingList(CustomizeBookingDto bookingList) {
		this.bookingList = bookingList;
	}
	
	
	
	
	
}
