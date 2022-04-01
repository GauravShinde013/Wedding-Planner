package com.wedding.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.wedding.daos.IUserDao;
import com.wedding.dtos.ChangePasswordDto;
import com.wedding.dtos.Credentials;
import com.wedding.dtos.DtoEntityConverter;
import com.wedding.dtos.UserDto;
import com.wedding.entities.User;


@Transactional
@Service
public class UserServiceImpl {
		
	@Autowired
	private IUserDao userDao;
	@Autowired
	private DtoEntityConverter converter;
	@Autowired
	private PasswordEncoder encoder;
	
	
	
	
	public User findUserById(int id) {
		User user= userDao.findById(id);
//		user.setServiceDetails(user.getServiceDetails());
		
//		for(VendorServiceDetails service: user.getServiceDetails()) {
//			user.setServiceDetails(service);
//		}
		return user;
	}
	
	
	
	public UserDto updateUserById(User user) {
		
			System.out.println("first"+user);

			User updatedUser=userDao.save(user);
			
			System.out.println("third"+updatedUser);
			
			UserDto dto=converter.toUserDto(updatedUser);
			dto.setPassword("*******");
		
			
		
		return dto;
	}
//	public UserDto updateUserById(UserDto user) {
//		System.out.println(user);
//		User userEntity=converter.toUserEntity(user);
//		System.out.println(userEntity);
//		User updatedUser=userDao.save(userEntity);
//		System.out.println(updatedUser);
//		
//		UserDto dto=converter.toUserDto(updatedUser);
//		dto.setPassword("*******");
//		
//		return dto;
//	}
	
	
	
	public User findUserByEmail(String email) {
		return userDao.findByEmail(email);
	}
	
	
	public UserDto authenticateUser(Credentials cred) {
		
		User user=findUserByEmail(cred.getEmail());
		String rawPassword=cred.getPassword();
		if(user!=null && encoder.matches(rawPassword, user.getPassword())) {
			UserDto dto=converter.toUserDto(user);
			dto.setPassword("*******");
			return dto;
			
		}
		return null;
		
	}
	
	public String changePassword(ChangePasswordDto dto) {
		
		User user=findUserByEmail(dto.getEmail());

		String dbOldPassword=user.getPassword();
			
		if(encoder.matches(dto.getOldPassword(),dbOldPassword)) {
			String encryptedNewPassword=encoder.encode(dto.getNewPassword());
			user.setPassword(encryptedNewPassword);
			return "Password Changed";
			
		}
		
		return "Old Password does not match";
	
	}
	
	public UserDto saveUser(UserDto user) {
		
		String encryptedPassword=encoder.encode(user.getPassword());
		user.setPassword(encryptedPassword);
		User userEntity=converter.toUserEntity(user);
		User insertedUser=userDao.save(userEntity);
		
		UserDto dto=converter.toUserDto(insertedUser);
		dto.setPassword("*******");
		return dto;
	}
	
	
	public List<UserDto> showAllCustomers(){
		List<User> customers=userDao.findAll();
		List<UserDto> dto=customers.stream().filter(customer->customer.getRole().equalsIgnoreCase("Customer")).map(customer->converter.toCustomerDto(customer))
																	.collect(Collectors.toList());
		
		return dto;
	}
	
	public long customersCount(){
		return showAllCustomers().stream().count();
	}
	
	public List<UserDto> lastFiveCustomers(){
		List<User> customers=userDao.findTop5ByOrderByCreatedTimestampDesc();
		List<UserDto> dto=customers.stream().filter(customer->customer.getRole().equalsIgnoreCase("Customer")).map(customer->converter.toCustomerDto(customer))
				.collect(Collectors.toList());
		
		return dto;
	}
	public List<UserDto> lastFiveVendors(){
		List<User> customers=userDao.findTop5ByOrderByCreatedTimestampDesc();
		List<UserDto> dto=customers.stream().filter(customer->customer.getRole().equalsIgnoreCase("Vendor")).map(customer->converter.toCustomerDto(customer))
				.collect(Collectors.toList());
		
		return dto;
	}
	
	
}


























