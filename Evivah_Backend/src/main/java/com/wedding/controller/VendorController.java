package com.wedding.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.wedding.dtos.Response;
import com.wedding.dtos.ServiceFeedbackDto;
import com.wedding.dtos.VendorServiceDetailsDto;
import com.wedding.entities.RatingReviews;
import com.wedding.entities.VendorServiceDetails;
import com.wedding.services.RatingReviewServiceImpl;
import com.wedding.services.VendorServiceDetailsImpl;

@RestController
@CrossOrigin(origins="*")
public class VendorController {

	@Autowired
	private VendorServiceDetailsImpl serviceDetails;
	@Autowired
	private RatingReviewServiceImpl ratingService;
	
	
//	Find Specific Service Detail By Service Detail Id
	@GetMapping("/servicedetail/{id}")
	public ResponseEntity<?> getServiceDetails(@PathVariable("id") int id){
		VendorServiceDetailsDto serviceDetail=serviceDetails.findServiceDetailsById(id);
		return Response.success(serviceDetail);
	}
	
//	Add Single Service Detail 
	@PostMapping("/servicedetail")
	public ResponseEntity<?> addServiceDetails(@RequestBody VendorServiceDetailsDto vsDetails ){
		String serviceDetail=serviceDetails.saveServiceDetails(vsDetails);
		return Response.success(serviceDetail);
	}
	
//	Delete Specific Service Detail By Service Detail Id
	@DeleteMapping("/servicedetail/{id}")
	public ResponseEntity<?> removeServiceDetails(@PathVariable("id") int id){
		int  deletedMsg=serviceDetails.deleteServiceDetails(id);
		if(deletedMsg==1) {
			return Response.success("Deleted Successfully...");
			
		}
		return Response.success("Deletion Failed...");
	}
	
//	Find All Service Details By Specific Vendor(User) Id	
	@GetMapping("/vendor/{id}/services")
	public ResponseEntity<?> getVendorsServices(@PathVariable("id") int id){
		List<VendorServiceDetails> vendorServices  =serviceDetails.findServiceDetailsByVendorId(id);
		return Response.success(vendorServices);
	}
	

	
	
//Rating and Reviews	(Feedback)

	
//	Find Single Feedback By Specific RatingReviews Id	
	@GetMapping("/feedback/{id}")
	public ResponseEntity<?> getRatingReviews(@PathVariable("id") int id){
		RatingReviews feedback=ratingService.getById(id);
		return Response.success(feedback);
	}
	
	
//	Delete(null) Single Review By Specific RatingReviews Id	
	@DeleteMapping("/feedback/{id}")
	public ResponseEntity<?> deleteReviews(@PathVariable("id") int id){
		int feedback=ratingService.updateOrDeleteReview(id,null);
		if(feedback==1) {
			return Response.success("Deleted Successfully...");
			
		}
		return Response.success("Deletion Failed...");
	}
	

//	Update Single Review By Specific RatingReviews Id
	@PutMapping("/feedback/{id}")
	public ResponseEntity<?> updateReviews(@PathVariable("id") int id,@RequestBody RatingReviews updatedReview ){
		int feedback=ratingService.updateOrDeleteReview(id,updatedReview.getReview());
		return Response.success(feedback);
	}
	
	
//	Add Single Feedback
	@PostMapping("/feedback/{id}")
	public ResponseEntity<?> addNewReviews(@PathVariable("id") int id,@RequestBody ServiceFeedbackDto dto ){
		dto.setVendorServiceDetailsId(id);
		Map<String, Object> addedFeedback=ratingService.addReviewRating(dto);
		return Response.success(addedFeedback);
	}
	
//	find Specific Service Reviews by Service Detail Id(vs_id)
	@GetMapping("/feedback/service/{id}")
	public ResponseEntity<?> findSpecificServiceReviews(@PathVariable("id") int id){
		
		List<RatingReviews> addedFeedback=ratingService.findFeedbackByServiceId(id);
		return Response.success(addedFeedback);
	}
	
//	find Avg Rating of Specific Service by Service Detail Id(vs_id)
	@GetMapping("/feedback/service/{id}/aggregate")
	public ResponseEntity<?> findAvgRating(@PathVariable("id") int id){
		
		Map<String, Object> avgRating=ratingService.getAvgRating(id);
		return Response.success(avgRating);
	}
	
	

//	TODO: Blog all api,Master Service ,Admin

//	blog all api--> get all blogs, add blog ,delete blog,get specific blog(blog,authorinfo)


	
	
}





















