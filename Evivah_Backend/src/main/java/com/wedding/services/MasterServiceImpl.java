package com.wedding.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wedding.daos.IMasterServiceDao;
import com.wedding.dtos.DtoEntityConverter;
import com.wedding.dtos.MasterServiceDto;
import com.wedding.dtos.MasterServicePhotoDto;
import com.wedding.dtos.VendorServiceDetailsDto;
import com.wedding.entities.MasterServices;
import com.wedding.entities.VendorServiceDetails;

@Transactional
@Service
public class MasterServiceImpl {
	@Autowired
	private IMasterServiceDao dao;
	@Autowired
	private DtoEntityConverter converter;
	@Autowired
	private PhotoServiceImpl photoService;

//	public List<VendorServiceDetails> getAllVendorServiceDetailsByMasterId(int id) {
//		MasterServices specificMasterServices = dao.findByMasterId(id);
//		List<VendorServiceDetails> list=specificMasterServices.getVendorServiceDetailList();
//		List<VendorServiceDetailsDto> VendorsList= list.stream().map((service)-> converter.toVendorServiceDetailsDto(service)).collect(Collectors.toList());
//		return specificMasterServices.getVendorServiceDetailList();
//	}
	public List<VendorServiceDetailsDto> getAllVendorServiceDetailsByMasterId(int id) {
		MasterServices specificMasterServices = dao.findByMasterId(id);
		List<VendorServiceDetails> list=specificMasterServices.getVendorServiceDetailList();
		List<VendorServiceDetailsDto> VendorsList= list.stream().map((service)-> converter.toVendorServiceDetailsDto(service)).collect(Collectors.toList());
		return VendorsList;
	}

	public List<MasterServiceDto> getAllMasterServices() {
		List<MasterServices> services = dao.findAll();
		return services.stream().map((service) -> converter.toMasterServiceDto(service)).collect(Collectors.toList());

	}

	public String addNewMasterService(MasterServices newService) {
		if (!(dao.existsByServiceName(newService.getServiceName()))) {
			dao.save(newService);
			return "New Service added Successfully";
		}
		return null;
	}

	public String addNewServicePhoto(MasterServicePhotoDto dto) {
		if (!(dao.existsByServiceName(dto.getName()))) {
			String url=photoService.upload(dto.getmServicePhoto());
			dto.setmServiceLink(url);
			
			MasterServices service = converter.toMasterServicePhotosEntity(dto);
			dao.save(service);
			return "New Service added Successfully";
		}
		return null;
	}
	
	public void deleteMasterService(int id) {
		dao.deleteById(id);
	}

}
