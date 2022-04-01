package com.wedding.dtos;

public class OrderDto {
	private int orderId;
	private CustomizeBookingDto bookingDto;
	
	
	public OrderDto() {

	}


	public OrderDto(int orderId, CustomizeBookingDto bookingDto) {
		super();
		this.orderId = orderId;	
		this.bookingDto = bookingDto;
	}


	public int getOrderId() {
		return orderId;
	}


	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}



	public CustomizeBookingDto getBookingDto() {
		return bookingDto;
	}


	public void setBookingDto(CustomizeBookingDto bookingDto) {
		this.bookingDto = bookingDto;
	}
	


	
	
}
