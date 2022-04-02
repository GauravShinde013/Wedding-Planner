package com.wedding.services;



import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

	public VendorServiceDetailsDto findServiceDetailsById(int id) {
		VendorServiceDetails serviceDetails = serviceDetailsDao.findByVendorServiceDetailsId(id);
		return converter.toVendorServiceDetailsDto(serviceDetails);

	}

	public List<VendorServiceDetailsDto> findServiceDetailsByVendorId(int vendorId) {
		List<VendorServiceDetails> allServices = serviceDetailsDao.findByUserId(vendorId);
		List<VendorServiceDetailsDto> dto=allServices.stream().map((service)->converter.toVendorServiceDetailsDto(service)).collect(Collectors.toList());
		
		return dto;

	}

	public String saveServiceDetails(VendorServiceDetailsDto vsDetails) {
		VendorServiceDetails details = converter.toVendorServiceDetailsEntity(vsDetails);
		System.out.println("Service: "+details.toString());
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
	
	public List<VendorServiceDetailsDto> lastFiveVendors(){
		List<VendorServiceDetails> vendors=serviceDetailsDao.findTop5ByOrderByCreatedTimestampDesc();
		List<VendorServiceDetailsDto> dto= vendors.stream().map(service->converter.toVendorServiceDetailsDto(service)).collect(Collectors.toList());
		
		return dto;
	}
	

}

















