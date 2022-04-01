package com.wedding.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wedding.entities.MasterServices;
import com.wedding.entities.VendorServiceDetails;

public interface IMasterServiceDao extends JpaRepository<MasterServices, Integer> {
//	MasterServices findByMasterId(int id);
	boolean existsByServiceName(String serviceName);
	MasterServices findByMasterId(int id);
}
