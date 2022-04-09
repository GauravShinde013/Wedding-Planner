package com.wedding.services;

import java.util.ArrayList;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.wedding.daos.IUserDao;


@Transactional
@Service
public class MyUserDetailsService implements UserDetailsService {

	@Autowired
	private IUserDao userDao;
	
	
    @Override
    public User loadUserByUsername(String email) throws UsernameNotFoundException {
    	com.wedding.entities.User dbUser	=userDao.findByEmail(email);
    	return new User(dbUser.getEmail(),dbUser.getPassword(),new ArrayList<>());
    }
    
}