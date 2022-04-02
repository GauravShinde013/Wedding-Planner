package com.wedding.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wedding.dtos.Response;
import com.wedding.dtos.UserDto;
import com.wedding.dtos.VendorServiceDetailsDto;
import com.wedding.services.UserServiceImpl;
import com.wedding.services.VendorServiceDetailsImpl;

@RestController
@CrossOrigin(origins="*")
public class AdminController {


	
	@Autowired
	private VendorServiceDetailsImpl vendorService;
	@Autowired
	private UserServiceImpl userService;
	
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
	
	//Show All Customers
	@GetMapping("/admin/vendor/allCustomers")
	public ResponseEntity<?> getAllCustomers(){
		List<UserDto> allCustomers =userService.showAllCustomers();
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
	
	
	
	
	
	
}






























