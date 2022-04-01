package com.wedding.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.wedding.dtos.MasterServiceDto;
import com.wedding.dtos.MasterServicePhotoDto;
import com.wedding.dtos.Response;
import com.wedding.dtos.VendorServiceDetailsDto;
import com.wedding.entities.MasterServices;
import com.wedding.entities.VendorServiceDetails;
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
//	@PostMapping("/masterService/add")
//	public ResponseEntity<?> addNewMasterService(@RequestBody MasterServices newService){
//		String addedService=masterService.addNewMasterService(newService);
//		if(addedService==null) {
//			return Response.error("Service Already Exists....");
//			
//		}
//		return Response.success(addedService);
//	}
	

//	--------------------------------------------------------------------------------------------------------------------------------
	@PostMapping("/masterservice/add/{name}")
	public ResponseEntity<?> addNewServiceWithPhoto(@PathVariable("name") String name,MasterServicePhotoDto dto){
		dto.setName(name);
		String addedOrdersMsg=masterService.addNewServicePhoto(dto);
		return Response.success(addedOrdersMsg);
	}
	
//	@GetMapping(value="/masterservice/{id}",produces="image/png")
//	public @ResponseBody byte[] showMasterService(@PathVariable("id") int id){
//		
//		MasterServices addedOrdersMsg=masterService.downloadServicePhoto(id);
////		return Response.success(addedOrdersMsg);
//		return addedOrdersMsg.getThumbnail()	;
//	}
//	


}


























