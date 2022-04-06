package com.wedding.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wedding.dtos.CustomizeBookingDto;
import com.wedding.dtos.Response;
import com.wedding.dtos.UserDto;
import com.wedding.dtos.VendorServiceDetailsDto;
import com.wedding.services.BookingServiceImpl;
import com.wedding.services.UserServiceImpl;
import com.wedding.services.VendorServiceDetailsImpl;

@RestController
@CrossOrigin(origins="*")
public class AdminController {


	
	@Autowired
	private VendorServiceDetailsImpl vendorService;
	@Autowired
	private UserServiceImpl userService;
	@Autowired
	private BookingServiceImpl bookingService;
	
//	Approval Of vendor Service
	@PutMapping("/admin/vendor/{id}")
	public ResponseEntity<?> approveVendor(@PathVariable("id") int serviceId,  @RequestParam("status") int flag){
		String  isApprovedMsg=vendorService.vendorServiceApproval(serviceId,flag);
		return Response.success(isApprovedMsg);
		
	}
		
//Show All Vendor Service Details
	@GetMapping("/admin/vendor/allServices")
	public ResponseEntity<?> getAllServices(){
		List<VendorServiceDetailsDto> allServices =vendorService.getAllServices();
		return Response.success(allServices);
		
	}
	
//Show All Planner Service Details
	@GetMapping("/admin/vendor/allPlanners")
	public ResponseEntity<?> getAllPlanners(){
		List<VendorServiceDetailsDto> allPlanners =vendorService.getAllPlanners();
		return Response.success(allPlanners);
		
	}
	@GetMapping("/admin/allVendors")
	public ResponseEntity<?> getAllVendors(){
		List<VendorServiceDetailsDto> allPlanners =vendorService.getAllVendors();
		return Response.success(allPlanners);
		
	}
	
	
	//Show All Customers
	@GetMapping("/admin/vendor/allCustomers")
	public ResponseEntity<?> getAllCustomers(){
		List<UserDto> allCustomers =userService.showAllCustomers();
		return Response.success(allCustomers);
		
	}
	//Show All Users
	@GetMapping("/admin/allUsers")
	public ResponseEntity<?> getAllUsers(){
		List<UserDto> allCustomers =userService.showAllUsers();
		return Response.success(allCustomers);
		
	}
	
	
	
	
//	Count of Vendors Services
	@GetMapping("/admin/vendor/count")
	public ResponseEntity<?> getCountOfAllVendorServices (){
		long vendorsCount =vendorService.getVendorsCount();
		return Response.success(vendorsCount);
		
	}
//	Count of Planners Services
	@GetMapping("/admin/planners/count")
	public ResponseEntity<?> getCountOfAllPlanners(){
		long plannersCount =vendorService.getPlannersCount();
		return Response.success(plannersCount);
		
	}
	//get Statistics For Admin Home
	@GetMapping("admin/home/getStats")
	public ResponseEntity<?> getStats(){
		HashMap<String, Long> getStats=vendorService.getHomeStats();
		return Response.success(getStats);
		
	}
//	Count of Customers
	@GetMapping("/admin/customers/count")
	public ResponseEntity<?> getCountOfCustomers(){
		long plannersCount =userService.customersCount();
		return Response.success(plannersCount);
		
	}
	
//	Recently added Customers
	@GetMapping("/admin/recent/customers")
	public ResponseEntity<?> getTopCustomers(){
		List<UserDto> dto =userService.lastFiveCustomers();
		return Response.success(dto);
		
	}
//	Recently added Customers
	@GetMapping("/admin/recent/members")
	public ResponseEntity<?> getTopMembers(){
		List<UserDto> dto =userService.lastFiveMembers();
		return Response.success(dto);
		
	}

	
//	Recently added Vendors
	@GetMapping("/admin/recent/vendors")
	public ResponseEntity<?> getTopVendors(){
		List<UserDto> dto =userService.lastFiveVendors();
		return Response.success(dto);
		
	}

//	Recently added Services
	@GetMapping("/admin/recent/services")
	public ResponseEntity<?> getTopServices(){
		List<VendorServiceDetailsDto> dto =vendorService.lastFiveVendors();
		return Response.success(dto);
		
	}
	@GetMapping("/admin/recent/bookings")
	public ResponseEntity<?> getTopBookings(){
		List<CustomizeBookingDto> dto =bookingService.getRecentBookings();
		return Response.success(dto);
		
	}
	
	
	
	
	
	
}






























