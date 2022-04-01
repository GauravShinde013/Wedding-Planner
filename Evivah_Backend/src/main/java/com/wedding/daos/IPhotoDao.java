package com.wedding.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.wedding.entities.Photos;

public interface IPhotoDao extends JpaRepository<Photos, Integer>  {
	
	Photos findById(int id);
	
}
