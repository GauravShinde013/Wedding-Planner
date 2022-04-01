package com.wedding.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wedding.entities.Blog;
import com.wedding.entities.VendorServiceDetails;

public interface IBlogDao extends JpaRepository<Blog, Integer> {
	Blog findByBlogId(int id);
	List<Blog> findByTitleContaining(String title);
	List<Blog> findByAuthorId(int id);
	List<Blog> findTop3ByOrderByCreatedTimestampDesc();
}
