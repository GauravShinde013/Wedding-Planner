package com.wedding.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.wedding.services.PhotoServiceImpl;

@RequestMapping("/photos")
@RestController()
public class PhotosController {

	@Autowired
	private PhotoServiceImpl service;
	
	@PostMapping("/upload")
	public ResponseEntity<Map<String, String>> upload(@RequestParam("file") MultipartFile file ){
		String url = service.upload(file);
	
		Map<String, String> response = new HashMap<String, String>();
		response.put("url",url);
		return new ResponseEntity<Map<String, String>>(response, HttpStatus.CREATED); 
	}
	
	
}
