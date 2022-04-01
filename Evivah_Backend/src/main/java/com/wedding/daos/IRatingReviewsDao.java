package com.wedding.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.wedding.entities.RatingReviews;

public interface IRatingReviewsDao extends JpaRepository<RatingReviews, Integer> {
	RatingReviews findByRatingId(int id);
	List<RatingReviews> findByServicesVendorServiceDetailsId(int id);
	@Modifying
	@Query("update RatingReviews r set r.review=?2 where r.ratingId=?1 ")
	int updateReview(int ratingId,String review) ;
	
	
	@Query("Select Avg(r.rating) from RatingReviews r where r.services.vendorServiceDetailsId=?1")
	float getAvgRating(int serviceDetailId);
	
	
	
}
