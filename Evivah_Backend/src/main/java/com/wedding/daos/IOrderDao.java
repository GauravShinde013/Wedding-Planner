package com.wedding.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wedding.dtos.BookingOrdersDto;
import com.wedding.entities.Orders;

public interface IOrderDao extends JpaRepository<Orders, Integer> {
	Orders findByOrderId(int id);
	List<Orders> findByVendorServiceVendorServiceDetailsId(int id);
	List<Orders> findByVendorServiceUserId(int id);

}
