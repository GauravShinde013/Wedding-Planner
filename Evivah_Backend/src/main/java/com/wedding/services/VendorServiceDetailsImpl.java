package com.wedding.services;



import java.util.DoubleSummaryStatistics;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amazonaws.services.kms.model.NotFoundException;
import com.wedding.daos.IVendorServiceDetailsDao;
import com.wedding.dtos.DtoEntityConverter;
import com.wedding.dtos.VendorServiceDetailsDto;
import com.wedding.entities.VendorServiceDetails;

@Transactional
@Service
public class VendorServiceDetailsImpl {
	@Autowired
	private IVendorServiceDetailsDao serviceDetailsDao;
	@Autowired
	private DtoEntityConverter converter;
	@Autowired
	private BookingServiceImpl bookingService;

	public VendorServiceDetailsDto findServiceDetailsById(int id) {
		VendorServiceDetails serviceDetails = serviceDetailsDao.findByVendorServiceDetailsId(id);
		return converter.toVendorServiceDetailsDto(serviceDetails);

	}

	public List<VendorServiceDetailsDto> findServiceDetailsByVendorId(int vendorId) {
		
		List<VendorServiceDetails> allServices = serviceDetailsDao.findByUserId(vendorId);
		List<VendorServiceDetailsDto> dto=null;
		if(!allServices.isEmpty()) {
			dto=allServices.stream().map((service)->converter.toVendorServiceDetailsDto(service)).collect(Collectors.toList());
		}else {
			throw new NotFoundException("Vendor Not Found. Check vendor Id");
		}
		
		return dto;

	}

	public String saveServiceDetails(VendorServiceDetailsDto vsDetails) {
		VendorServiceDetails details = converter.toVendorServiceDetailsEntity(vsDetails);
		serviceDetailsDao.save(details);
		return "Service Added....";
	}

	public int deleteServiceDetails(int id) {
		if (serviceDetailsDao.existsById(id)) {
			serviceDetailsDao.deleteById(id);
			return 1;
		}
		return 0;
	}

	public String vendorServiceApproval(int serviceId, int flag) {

		int isApproved = serviceDetailsDao.approvedService(serviceId, flag);
		if (isApproved == 1 && flag == 1) {
			return "Approved Successfully";
		} else if (isApproved == 1 && flag == 0) {
			return "Rejected Successfully";
		}
		return null;

	}
	
	public List<VendorServiceDetailsDto> getAllVendors(){
		List<VendorServiceDetails> allServices=serviceDetailsDao.findAll();
		List<VendorServiceDetailsDto> dto= allServices.stream().map(service->converter.toVendorServiceDetailsDto(service)).collect(Collectors.toList());
		return dto;
	}
	public List<VendorServiceDetailsDto> getAllServices(){
		List<VendorServiceDetails> allServices=serviceDetailsDao.findAll();
		List<VendorServiceDetailsDto> dto= allServices.stream().map(service->converter.toVendorServiceDetailsDto(service))
				.filter(service->!service.getMasterServiceName().equalsIgnoreCase("planner"))
				.collect(Collectors.toList());
		return dto;
	}
	
	
	public List<VendorServiceDetailsDto> getAllPlanners(){
		List<VendorServiceDetails> allServices=serviceDetailsDao.findAll();
		List<VendorServiceDetailsDto> dto= allServices.stream().map(service->converter.toVendorServiceDetailsDto(service))
																							.filter(service->service.getMasterServiceName().equalsIgnoreCase("planner"))
																							.collect(Collectors.toList());
		return dto;
	}

	public long  getVendorsCount() {
		return getAllServices().stream().count();
	}

	public long getPlannersCount() {
		
		return getAllPlanners().stream().count();
	}

	
	public HashMap<String, Long> getHomeStats() {
		
		HashMap<String, Long> homeStats=new HashMap<>();
		
		long vendorCount= getVendorsCount(); 
		long plannerCount=getPlannersCount(); 
		DoubleSummaryStatistics bookingStats=bookingService.getAllBookingsStatistics();
		long bookingCount=bookingStats.getCount();
		long bookingSales=(long)bookingStats.getSum();
		
		homeStats.put("vendorCount", vendorCount);
		homeStats.put("plannerCount", plannerCount);
		homeStats.put("bookingCount", bookingCount);
		homeStats.put("bookingSales", bookingSales);
		
		return homeStats;
		
		
	}
	
	public List<VendorServiceDetailsDto> lastFiveVendors(){
		List<VendorServiceDetails> vendors=serviceDetailsDao.findTop5ByOrderByCreatedTimestampDesc();
		
		List<VendorServiceDetailsDto> dto= vendors.stream().map(service->converter.toVendorServiceDetailsDto(service)).collect(Collectors.toList());
		
		return dto;
	}
	
	  public List<VendorServiceDetailsDto> featuredvendors() {
          List<VendorServiceDetails> vendors = serviceDetailsDao.featuredvendors();
          List<VendorServiceDetailsDto> dto =vendors.stream().map(service->converter.toVendorServiceDetailsDto(service)).collect(Collectors.toList());

          return dto;
      }

}

















