package com.wedding.dtos;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class CustomizeBookingDto {
	private int bookingId;
	private String bridesName;
	private String groomsName;
	private long guestCount;
	private double payAmount;
	private boolean payStatus;
	private String weddingCity;
	private Date weddingDate;

	private int customerId;
	private String customerFirstName;
	private String customerLastName;
	private boolean weddingStatus;

	List<BookingOrdersDto> orders;

	List<VendorServiceDetailsDto> serviceDetailsList;

	public CustomizeBookingDto() {
		this.serviceDetailsList = new ArrayList<>();
	}

	public CustomizeBookingDto(int bookingId, String bridesName, String groomsName, long guestCount, double payAmount,
			boolean payStatus, String weddingCity, Date weddingDate, int customerId, String customerFirstName,
			String customerLastName, boolean weddingStatus, List<BookingOrdersDto> orders,
			List<VendorServiceDetailsDto> serviceDetailsList) {
		super();
		this.bookingId = bookingId;
		this.bridesName = bridesName;
		this.groomsName = groomsName;
		this.guestCount = guestCount;
		this.payAmount = payAmount;
		this.payStatus = payStatus;
		this.weddingCity = weddingCity;
		this.weddingDate = weddingDate;
		this.customerId = customerId;
		this.customerFirstName = customerFirstName;
		this.customerLastName = customerLastName;
		this.weddingStatus = weddingStatus;
		this.orders = orders;
		this.serviceDetailsList = serviceDetailsList;
	}

	public List<BookingOrdersDto> getOrders() {
		return orders;
	}

	public void setOrders(List<BookingOrdersDto> orders) {
		this.orders = orders;
	}

	public boolean isWeddingStatus() {
		return weddingStatus;
	}

	public void setWeddingStatus(boolean weddingStatus) {
		this.weddingStatus = weddingStatus;
	}

	

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public int getBookingId() {
		return bookingId;
	}

	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}

	public String getBridesName() {
		return bridesName;
	}

	public void setBridesName(String bridesName) {
		this.bridesName = bridesName;
	}

	public String getGroomsName() {
		return groomsName;
	}

	public void setGroomsName(String groomsName) {
		this.groomsName = groomsName;
	}

	public long getGuestCount() {
		return guestCount;
	}

	public void setGuestCount(long guestCount) {
		this.guestCount = guestCount;
	}

	public double getPayAmount() {
		return payAmount;
	}

	public void setPayAmount(double payAmount) {
		this.payAmount = payAmount;
	}

	public boolean isPayStatus() {
		return payStatus;
	}

	public void setPayStatus(boolean payStatus) {
		this.payStatus = payStatus;
	}

	public String getWeddingCity() {
		return weddingCity;
	}

	public void setWeddingCity(String weddingCity) {
		this.weddingCity = weddingCity;
	}

	public Date getWeddingDate() {
		return weddingDate;
	}

	public void setWeddingDate(Date weddingDate) {
		this.weddingDate = weddingDate;
	}

	public List<VendorServiceDetailsDto> getServiceDetailsList() {
		return serviceDetailsList;
	}

	public void setServiceDetailsList(List<VendorServiceDetailsDto> serviceDetailsList) {
		this.serviceDetailsList = serviceDetailsList;
	}

	public String getCustomerFirstName() {
		return customerFirstName;
	}

	public void setCustomerFirstName(String customerFirstName) {
		this.customerFirstName = customerFirstName;
	}

	public String getCustomerLastName() {
		return customerLastName;
	}

	public void setCustomerLastName(String customerLastName) {
		this.customerLastName = customerLastName;
	}

	@Override
	public String toString() {
		return "CustomizeBookingDto [bookingId=" + bookingId + ", bridesName=" + bridesName + ", groomsName="
				+ groomsName + ", guestCount=" + guestCount + ", payAmount=" + payAmount + ", payStatus=" + payStatus
				+ ", weddingCity=" + weddingCity + ", weddingDate=" + weddingDate + "]";
	}
	
	

//	@Override
//	public String toString() {
//		return "CustomizeBookingDto [bookingId=" + bookingId + ", bridesName=" + bridesName + ", groomsName="
//				+ groomsName + ", guestCount=" + guestCount + ", payAmount=" + payAmount + ", payStatus=" + payStatus
//				+ ", weddingCity=" + weddingCity + ", weddingDate=" + weddingDate + ", customerId=" + customerId
//				+ ", customerFirstName=" + customerFirstName + ", customerLastName=" + customerLastName
//				+ ", weddingStatus=" + weddingStatus + ", orders=" + orders + ", serviceDetailsList="
//				+ serviceDetailsList + "]";
//	}

}
