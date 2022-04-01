package com.wedding;

import javax.transaction.Transactional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.wedding.entities.Booking;
import com.wedding.entities.RatingReviews;
import com.wedding.entities.User;
import com.wedding.entities.VendorServiceDetails;
import com.wedding.services.BookingServiceImpl;
import com.wedding.services.UserServiceImpl;
import com.wedding.services.VendorServiceDetailsImpl;

@SpringBootTest
class ProjectW2ApplicationTests {
	
//	@Autowired
//	private UserServiceImpl userService;
//	@Autowired
//	private VendorServiceDetailsImpl vendorService;
	
	
	
//	@Transactional
//	@Test
//	public void findById() {
//		User user=userService.findUserById(3);
//		System.out.println(user);
//		for(VendorServiceDetails service : user.getServiceDetails()) {
//			System.out.println(service);
//		}
//		for(RatingReviews rev : user.getFeedback()) {
//			System.out.println(rev);
//		}
//		
//	}
	
//	@Transactional
//	@Test
//	public void serviceDetails() {
//		VendorServiceDetails vendor=vendorService.findServiceDetailsById(1);
//		System.out.println(vendor);
//		for(RatingReviews rev : vendor.getFeedback()) {
//			System.out.println(rev);
//			System.out.println(rev.getCustomer());
//		}
//	
//	}

	@Autowired
	BookingServiceImpl booking;
	
//	@Test
//	public  void getBooking() {
//		Booking book=booking.getById(6);
//		System.out.println(book);
//	}
}






















