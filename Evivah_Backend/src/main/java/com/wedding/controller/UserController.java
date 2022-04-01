package com.wedding.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.wedding.dtos.ChangePasswordDto;
import com.wedding.dtos.Credentials;
import com.wedding.dtos.Response;
import com.wedding.dtos.UserDto;
import com.wedding.entities.User;
import com.wedding.services.PhotoServiceImpl;
import com.wedding.services.UserServiceImpl;


@RestController
@CrossOrigin(origins="*")
public class UserController {

	@Autowired
	private UserServiceImpl userService;
	
	@Autowired
	private PhotoServiceImpl photoService;
	
	
	
//	Add New User (SignUp)
	@PostMapping(value="/user/signup",consumes = {MediaType.MULTIPART_FORM_DATA_VALUE,MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<?> saveUser(@RequestPart(value="blogImg",required=false) MultipartFile blogImg,@RequestPart("jsonBodyData") UserDto user){
		if(!(blogImg==null)) {
			String url=photoService.upload(blogImg);
			user.setProfilePicUrl(url);
		}
		UserDto insertedUser=userService.saveUser(user);
		return Response.success(insertedUser);

	}

//	Login
	@PostMapping("/user/signin")
	public ResponseEntity<?> authenticateUser(@RequestBody Credentials cred){
		UserDto dbUser=userService.authenticateUser(cred);
		if(dbUser==null) {
			return Response.error("Please Check Your Credentials...");
		}
		return Response.success(dbUser);
	}
	
//Update User
	@PutMapping("/user/{id}")
	public ResponseEntity<?> updateUser(@PathVariable("id") int userId,@RequestBody User user ){
		user.setId(userId);
		System.out.println(userId);
		UserDto userUpdated=userService.updateUserById(user);
		
		return Response.success(userUpdated);
		
	}
	
//Update User
	@PutMapping("/user/changePassword")
	public ResponseEntity<?> updatePassword(@RequestBody ChangePasswordDto dto ){

		System.out.println(dto.toString());
		
		String updatedPassMsg=userService.changePassword(dto);
		
		return Response.success(updatedPassMsg);
//		return null;
	}

	
	



}





















