package com.wedding.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.wedding.dtos.MasterServiceDto;
import com.wedding.dtos.MasterServicePhotoDto;
import com.wedding.dtos.Response;
import com.wedding.dtos.VendorServiceDetailsDto;
import com.wedding.services.MasterServiceImpl;

@RestController
@CrossOrigin(origins="*")
public class MasterServiceController {

	@Autowired
	private MasterServiceImpl masterService;
	
	
//	Get All Vendors Services of particular Master Service
	
	@GetMapping("/masterService/{id}/vendors")
    public ResponseEntity<?> getVendorsByMasterServiceById(@PathVariable("id") int id){
        List<VendorServiceDetailsDto> service=masterService.getAllVendorServiceDetailsByMasterId(id);
        return Response.success(service);
    }
	
//	Get All Master Services
	@GetMapping("/masterServices")
	public ResponseEntity<?> getAllMasterServices(){
		List<MasterServiceDto> masterservices=masterService.getAllMasterServices();
		return Response.success(masterservices);
	}
	
//	Add New Master Services

	@PostMapping(value = "/masterservice/add/",consumes = {MediaType.MULTIPART_FORM_DATA_VALUE,MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<?> addNewServiceWithPhoto(@RequestPart("serviceImg") MultipartFile serviceImg,@RequestPart("jsonBodyData") MasterServicePhotoDto dto)
	{
		dto.setmServicePhoto(serviceImg);
		String addedOrdersMsg=masterService.addNewServicePhoto(dto);
		return Response.success(addedOrdersMsg);
	}
	



}


























