package com.wedding.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wedding.entities.User;

public interface IUserDao extends JpaRepository<User, Integer> {
	User findById(int id);
	User findByEmail(String email);
	List<User> findTop5ByRoleOrderByCreatedTimestampDesc(String role);
	
}
