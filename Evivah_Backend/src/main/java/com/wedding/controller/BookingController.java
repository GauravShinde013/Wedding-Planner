package com.wedding.controller;

import java.util.DoubleSummaryStatistics;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.wedding.dtos.BookingOrdersDto;
import com.wedding.dtos.CustomizeBookingDto;
import com.wedding.dtos.OrderDto;
import com.wedding.dtos.Response;
import com.wedding.services.BookingServiceImpl;
import com.wedding.services.OrdersServiceImpl;

@RestController
@CrossOrigin(origins="*")
public class BookingController {

		@Autowired 
		private BookingServiceImpl service;
		@Autowired 
		private OrdersServiceImpl orderService;

//		Get Particular Booking by Booking Id
		@GetMapping("/booking/{id}")
		public ResponseEntity<?> getBookingByBookingId(@PathVariable("id") int id){
			CustomizeBookingDto book=service.getByBookingId(id);
			return Response.success(book);
		}

		
//		Get Particular Customer  All Booking by customer Id
		@GetMapping("/booking/customer/{id}")
		public ResponseEntity<?> getCustomerBooking(@PathVariable("id") int id){
			List<CustomizeBookingDto> book=service.getByCustomerId(id);
			return Response.success(book);
		}
		
//		Get Stats of All Booking by 
		@GetMapping("/booking/stats")
		public ResponseEntity<?> getSummary(){
			DoubleSummaryStatistics book=service.getAllBookingsStatistics();
			return Response.success(book);
		}
	
//		Get Stats of All Orders of Particular vendor by vendor Id
		@GetMapping("/order/vendor/{id}/stats")
		public ResponseEntity<?> getRevenue(@PathVariable("id") int id){
			DoubleSummaryStatistics book=orderService.getStats(id);
			return Response.success(book);
		}
		
//		Get All Bookings
		@GetMapping("/bookings")
		public ResponseEntity<?> getAllBookings(){
			List<CustomizeBookingDto> book=service.getAllBookings();
			return Response.success(book);
		}

//		Add Bookings
		@PostMapping("/bookings/add")
		public ResponseEntity<?> addNewBooking(@RequestBody CustomizeBookingDto dto){
			System.out.println(dto.toString());
			String addedBooking=service.addNewBooking(dto);
			return Response.success(addedBooking);
		}
		
		
		
		
//		Get order Booking by order Id
		@GetMapping("/orders/{id}")
		public ResponseEntity<?> getOrders(@PathVariable("id") int id){
			OrderDto order=orderService.getByOrderId(id);
			return Response.success(order);
		}
//		Get All orders of Vendor by vendor Id		
		@GetMapping("/orders/vendor/{id}")
		public ResponseEntity<?> getOrdersOfVendor(@PathVariable("id") int id){
			List<OrderDto> book=orderService.getAllOrdersOfvendor(id);
			return Response.success(book);
		}
		
		
		
//		Add New Orders 
		@PostMapping("/orders/add")
		public ResponseEntity<?> addNewBookingOrders(@RequestBody List<BookingOrdersDto> ordersDto){
			String addedOrdersMsg=orderService.addNewBookingOrders(ordersDto);
			return Response.success(addedOrdersMsg);
		}
		
		
	
		

}






















