package com.wedding.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
import com.wedding.services.MyUserDetailsService;
import com.wedding.services.PhotoServiceImpl;
import com.wedding.services.UserServiceImpl;
import com.wedding.utility.JwtUtil;


@RestController
@CrossOrigin(origins="*")
public class UserController {

	@Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private PhotoServiceImpl photoService;

    @Autowired
    private MyUserDetailsService jwtService;

    @Autowired
    private JwtUtil jwtTokenUtil;
	
	
	
//	Add New User (SignUp)
	@PostMapping(value="/user/signup",consumes = {MediaType.MULTIPART_FORM_DATA_VALUE,MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<?> saveUser(@RequestPart(value="userImg",required=false) MultipartFile userImg,@RequestPart("jsonBodyData") UserDto user){
		if(!(userImg==null)) {
		
			String url=photoService.upload(userImg);
			user.setProfilePicUrl(url);
		}
		UserDto insertedUser=userService.saveUser(user);
		return Response.success(insertedUser);

	}

//	Login
//	@PostMapping("/user/signin")
//	public ResponseEntity<?> authenticateUser(@RequestBody Credentials cred){
//		UserDto dbUser=userService.authenticateUser(cred);
//		if(dbUser==null) {
//			return Response.error("Please Check Your Credentials...");
//		}
//		return Response.success(dbUser);
//	}
	
	@PostMapping("/user/signin")
    public ResponseEntity<?> authenticateUser(@RequestBody Credentials cred) throws Exception{
        UserDto dbUser=userService.authenticateUser(cred);
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(cred.getEmail(), cred.getPassword())
            );
        }
        catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }
                User user =jwtService.loadUserByUsername(cred.getEmail());
                final String jwt = jwtTokenUtil.generateToken(user);

                return Response.success(jwt,dbUser);
    }
	
//Update User
	@PutMapping("/user/{id}")
	public ResponseEntity<?> updateUser(@PathVariable("id") int userId,@RequestBody UserDto user ){
		user.setId(userId);

		UserDto userUpdated=userService.updateUserById(user);
		
		return Response.success(userUpdated);
		
	}
//Update User Details
	@PutMapping("/user/update/details/{id}")
	public ResponseEntity<?> updateUserDetails(@PathVariable("id") int userId,@RequestBody UserDto user ){
		System.out.println("UserId: "+userId);
		user.setId(userId);
		
		UserDto userUpdated=userService.updateUserDetailsById(user);
		
		return Response.success(userUpdated);
		
	}
	
//Update password
	@PutMapping("/user/changePassword")
	public ResponseEntity<?> updatePassword(@RequestBody ChangePasswordDto dto ){

		System.out.println(dto.toString());
		
		String updatedPassMsg=userService.changePassword(dto);
		if(updatedPassMsg==null) {
			return Response.error("Password updation Failed");
		}
		return Response.success(updatedPassMsg);
	}
	
//Get User By Id	
	@GetMapping("/user/get/{id}")
	public ResponseEntity<?> getUserById(@PathVariable("id") int userId ){
		System.out.println("In User");
		UserDto user=userService.findUserById(userId);
		
		return Response.success(user);
	}


}





















