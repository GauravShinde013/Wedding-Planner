package com.wedding.services;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amazonaws.services.kms.model.NotFoundException;
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

	public ServiceFeedbackDto getById(int id) {
		RatingReviews review = dao.findByRatingId(id);
		ServiceFeedbackDto dto = converter.toReviewRatingDto(review);
		return dto;
	}

	public int updateOrDeleteReview(int id, String review) {
		if (dao.existsById(id)) {
			dao.updateReview(id, review);
			return 1;

		}
		return 0;
	}

	public Map<String, Object> addReviewRating(ServiceFeedbackDto dto) {
		RatingReviews review = converter.toReviewRatingEntity(dto);
		RatingReviews newReview = dao.save(review);
		return Collections.singletonMap("insertedId", newReview.getRatingId());
	}

	public Map<String, Object> getAvgRating(int serviceDetailId) {
		float avgRating = dao.getAvgRating(serviceDetailId);
		return Collections.singletonMap("Avg Rating", avgRating);

	}

	public List<ServiceFeedbackDto> findFeedbackByServiceId(int serviceDetailId) {
		List<RatingReviews> feedbackList = dao.findByServicesVendorServiceDetailsId(serviceDetailId);	
		List<ServiceFeedbackDto>	reviewsList;
		if(!feedbackList.isEmpty()) {
			reviewsList = feedbackList.stream().map(review->converter.toReviewRatingDto(review)).collect(Collectors.toList());
		reviewsList.stream().forEach(review->review.setVendorServiceDetailsId(serviceDetailId));
		}else {
			throw new NotFoundException("Invalid Vendor Service Details Id");
		}
		return reviewsList;
	}

}
