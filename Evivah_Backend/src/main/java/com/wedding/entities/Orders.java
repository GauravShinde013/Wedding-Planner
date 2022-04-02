package com.wedding.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="orders")
public class Orders {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "order_id")
	private int orderId;
	
	@ManyToOne
	@JoinColumn(name = "orders_vs_id")
	private VendorServiceDetails vendorService;
	
	@ManyToOne
	@JoinColumn(name = "booking_id")
	private Booking booking;
	
	public Orders() {
		
	}

	public Orders(int orderId, VendorServiceDetails vendorService, Booking booking) {
		super();
		this.orderId = orderId;
		this.vendorService = vendorService;
		this.booking = booking;
	}

	
	
	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public VendorServiceDetails getVendorService() {
		return vendorService;
	}

	public void setVendorService(VendorServiceDetails vendorService) {
		this.vendorService = vendorService;
	}

	public Booking getBooking() {
		return booking;
	}

	public void setBooking(Booking booking) {
		this.booking = booking;
	}

	@Override
	public String toString() {
		return "Orders [orderId=" + orderId + ", vendorService=" + vendorService + ", booking=" + booking + "]";
	}



	

	
	
	
}

































