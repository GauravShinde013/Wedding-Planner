package com.wedding.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wedding.entities.Booking;
import com.wedding.entities.VendorServiceDetails;

public interface IBookingDao extends JpaRepository<Booking, Integer> {
	Booking findByBookingId(int id);
	List<Booking> findByClientId(int id);
	List<Booking> findTop5ByOrderByCreatedtimestampDesc();
}

