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
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name="booking")
public class Booking {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "booking_id")
	private int bookingId;
	@Column(name = "brides_name")
	private String bridesName;
	@Column(name = "grooms_name")
	private String groomsName;
	@Column(name = "guest_count")
	private long guestCount;
	
	@Column(name = "wedding_date")
	private Date weddingDate;
	@Column(name = "wedding_city")
	private String weddingCity;
	@Column(name = "pay_amount")
	private double payAmount;
	@Column(name = "pay_status")
	private boolean payStatus;
	
	
	@OneToMany(mappedBy = "booking",cascade = {CascadeType.PERSIST })
	private List<Orders> orders;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User client;
	
		
	@Column(name = "wedding_status", insertable = false)
	private boolean weddingStatus;
	
	
	@Column(name = "createdtimestamp", insertable = false)
	@Temporal(TemporalType.TIMESTAMP)
    private Date createdtimestamp ;
	
	public Booking() {

	}



	public Booking(int bookingId, String bridesName, String groomsName, long guestCount, Date weddingDate,
			String weddingCity, double payAmount, boolean payStatus, List<Orders> orders, User customerBooking,
			boolean weddingStatus, Date createdtimestamp) {
		this.bookingId = bookingId;
		this.bridesName = bridesName;
		this.groomsName = groomsName;
		this.guestCount = guestCount;
		this.weddingDate = weddingDate;
		this.weddingCity = weddingCity;
		this.payAmount = payAmount;
		this.payStatus = payStatus;
		this.orders = orders;
		this.client = customerBooking;
		this.weddingStatus = weddingStatus;
		this.createdtimestamp = createdtimestamp;
	}


	



	public Booking(int bookingId) {
		super();
		this.bookingId = bookingId;
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

	public Date getWeddingDate() {
		return weddingDate;
	}

	public void setWeddingDate(Date weddingDate) {
		this.weddingDate = weddingDate;
	}

	public String getWeddingCity() {
		return weddingCity;
	}

	public void setWeddingCity(String weddingCity) {
		this.weddingCity = weddingCity;
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

	public Date getCreatedtimestamp() {
		return createdtimestamp;
	}

	public void setCreatedtimestamp(Date createdtimestamp) {
		this.createdtimestamp = createdtimestamp;
	}

	public List<Orders> getOrders() {
		return orders;
	}

	public void setOrders(List<Orders> orders) {
		this.orders = orders;
	}

	public User getClient() {
		return client;
	}

	public void setClient(User client) {
		this.client = client;
	}

	public boolean getWeddingStatus() {
		return weddingStatus;
	}

	public void setWeddingStatus(boolean weddingStatus) {
		this.weddingStatus = weddingStatus;
	}

	public void addOrders(Orders order) {
		if(this.orders==null) {
			this.orders=new ArrayList<>();
		}
		int index=this.orders.indexOf(order);
		if(index==-1) {
			this.orders.add(order);
		}
		else {
			this.orders.set(index, order);
		}
		order.setBooking(this);
	}
	


	@Override
	public String toString() {
		return "Booking [bookingId=" + bookingId + ", bridesName=" + bridesName + ", groomsName=" + groomsName
				+ ", guestCount=" + guestCount + ", weddingDate=" + weddingDate + ", weddingCity=" + weddingCity
				+ ", payAmount=" + payAmount + ", payStatus=" + payStatus + ", orders=" + orders + ", client=" + client
				+ ", weddingStatus=" + weddingStatus + ", createdtimestamp=" + createdtimestamp + "]";
	}
	
	
	
	
	
	
}
























