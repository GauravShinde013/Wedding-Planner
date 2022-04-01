package com.wedding.services;

import java.util.DoubleSummaryStatistics;
import java.util.Iterator;
import java.util.List;import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wedding.daos.IOrderDao;
import com.wedding.dtos.BookingOrdersDto;
import com.wedding.dtos.CustomizeBookingDto;
import com.wedding.dtos.DtoEntityConverter;
import com.wedding.dtos.MasterServicePhotoDto;
import com.wedding.dtos.OrderDto;
import com.wedding.dtos.VendorServiceDetailsDto;
import com.wedding.entities.MasterServices;
import com.wedding.entities.Orders;

@Transactional
@Service
public class OrdersServiceImpl {
		
	@Autowired
	private IOrderDao dao;
	@Autowired
	private DtoEntityConverter converter;

	public OrderDto getByOrderId(int id) {
		Orders order= dao.findByOrderId(id);
		return converter.toOrderDto(order);
		
	}
	public List<OrderDto> getAllOrdersOfvendor(int vendorId) {
		List<Orders> vendorOrders= dao.findByVendorServiceVendorServiceDetailsId(vendorId);
		List<OrderDto> dto=vendorOrders.stream().map(order->converter.toVendorOrderDto(order,vendorId)).collect(Collectors.toList());
		
		return dto;
		
	}
	
	public DoubleSummaryStatistics getStats(int vendorId) {
		DoubleSummaryStatistics stats=getAllOrdersOfvendor(vendorId).stream().mapToDouble(order->order.getBookingDto().getPayAmount()).summaryStatistics();
		return stats;
		
	}
	public String addNewBookingOrders(List<BookingOrdersDto> ordersDto) {
		
		List<Orders> orderList=ordersDto.stream().map(order->converter.toOrdersEntity(order)).collect(Collectors.toList());
		
		List<Orders> savedOrders= dao.saveAll(orderList);
		
		if(savedOrders!=null) {
			return "Orders Saved Succesfully...";
		}
		return "Orders Cannot be Added...";
	}
	
	
}	































