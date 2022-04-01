package com.wedding.dtos;

public class BookingOrdersDto {
	private int orderId;
	private int vendorServiceDetailsId;
	private int bookingId;
	
	
	public BookingOrdersDto() {

	}

	
	public BookingOrdersDto(int orderId, int vendorServiceDetailsId, int bookingId) {
		super();
		this.orderId = orderId;
		this.vendorServiceDetailsId = vendorServiceDetailsId;
		this.bookingId = bookingId;
	}



	public int getOrderId() {
		return orderId;
	}


	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}


	public int getVendorServiceDetailsId() {
		return vendorServiceDetailsId;
	}


	public void setVendorServiceDetailsId(int vendorServiceDetailsId) {
		this.vendorServiceDetailsId = vendorServiceDetailsId;
	}


	public int getBookingId() {
		return bookingId;
	}


	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}


	@Override
	public String toString() {
		return "BookingOrdersDto [orderId=" + orderId + ", vendorServiceDetailsId=" + vendorServiceDetailsId
				+ ", bookingId=" + bookingId + "]";
	}
	
	
	
	
	
	
}
