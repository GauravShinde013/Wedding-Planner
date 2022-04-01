package com.wedding.services;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wedding.daos.IRatingReviewsDao;
import com.wedding.dtos.DtoEntityConverter;
import com.wedding.dtos.ServiceFeedbackDto;
import com.wedding.entities.RatingReviews;

@Transactional
@Service
public class RatingReviewServiceImpl {
	@Autowired
	private IRatingReviewsDao dao;
	@Autowired
	private DtoEntityConverter converter;
	
	public RatingReviews getById(int id) {
		RatingReviews review=  dao.findByRatingId(id);
		return review;
	}

	public int updateOrDeleteReview(int id,String review) {
		if(dao.existsById(id)) {
			 dao.updateReview(id,review);
			return 1;
			
		}
		return 0;
	}

	
	public Map<String, Object> addReviewRating(ServiceFeedbackDto dto) {
		RatingReviews review=converter.toReviewRatingEntity(dto);
		RatingReviews newReview=dao.save(review);
		return Collections.singletonMap("insertedId", newReview.getRatingId());
	}
	
	
	public Map<String, Object> getAvgRating(int serviceDetailId){
		float avgRating=dao.getAvgRating(serviceDetailId);
		return Collections.singletonMap("Avg Rating", avgRating);
		
	}
	
	public List<RatingReviews> findFeedbackByServiceId(int serviceDetailId){
		List<RatingReviews> feedbackList=dao.findByServicesVendorServiceDetailsId(serviceDetailId);
		return feedbackList;
	}

	

}



























