package com.wedding.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.wedding.entities.VendorServiceDetails;

public interface IVendorServiceDetailsDao extends JpaRepository<VendorServiceDetails, Integer> {
	VendorServiceDetails findByVendorServiceDetailsId(int id);
	List<VendorServiceDetails> findByUserId(int id);
	@Modifying
	@Query("update VendorServiceDetails v set v.isApproved=?2 where v.vendorServiceDetailsId=?1")
	int approvedService(int serviceId,int flag);
	List<VendorServiceDetails> findTop5ByOrderByCreatedTimestampDesc();
	
	List<VendorServiceDetails> findByUserRole(String role);
	@Query(value="select v.* from vendor_service_details v order by (select avg(r_rating) as avg_rating from rating_reviews where vs_id=v.vs_id) desc limit 5", nativeQuery=true)
    List<VendorServiceDetails> featuredvendors();
//	List<VendorServiceDetails> findByBookingVendorServiceVendorServiceDetailsId();
}
