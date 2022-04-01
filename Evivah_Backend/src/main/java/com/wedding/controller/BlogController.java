package com.wedding.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.wedding.dtos.BlogDto;
import com.wedding.dtos.Response;
import com.wedding.entities.Blog;
import com.wedding.services.BlogServiceImpl;

@RestController
@CrossOrigin(origins = "*")
public class BlogController {

	@Autowired
	private BlogServiceImpl service;

//Show Blog By Id
	@GetMapping("/blog/{id}")
	public ResponseEntity<?> findBlogById(@PathVariable("id") int id) {
		BlogDto blog = service.getBlogById(id);
		return Response.success(blog);
	}

//Get All Blogs or get Blogs by Title Or Get Blogs By Author Name(firsname or lastname)

	@GetMapping("/blogs")
	public ResponseEntity<?> findAllBlogs(@RequestParam(name = "title", defaultValue = "") String blogTitle,
			@RequestParam(name = "authorName", defaultValue = "") String authorName) {
		List<BlogDto> blogs = new ArrayList<>();
		if (!(blogTitle.isEmpty())) {
			blogs = service.findBlogByTitle(blogTitle);
		} else if (!(authorName.isEmpty())) {
			System.out.println(authorName);
			blogs = service.findBlogByAuthorName(authorName);
		} else {
			blogs = service.getAllBlogs();
		}

		return Response.success(blogs);
	}

//	Add New Blog
	@PostMapping(value = "/blog/add",consumes = {MediaType.MULTIPART_FORM_DATA_VALUE,MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<?> addBlog(@RequestPart("blogImg") MultipartFile blogImg,@RequestPart("jsonBodyData") BlogDto blog) {

		System.out.println(blog.toString());
		blog.setBlogImage(blogImg);
		Blog insertedBlog = service.addNewBlog(blog);
		return Response.success(insertedBlog);
	}


//Delete Blog
	@DeleteMapping("/blog/{id}/delete")
	public ResponseEntity<?> deleteBlogById(@PathVariable("id") int id) {
		int deleteBlog = service.deleteBlogById(id);
		if (deleteBlog == 1) {
			return Response.success("Deleted Successfully...");

		}
		return Response.success("Deletion Failed...");
	}

//Get Blogs Of Particular Author
	@GetMapping("/blog/author/{id}")
	public ResponseEntity<?> addBlog(@PathVariable("id") int authorId) {

		List<BlogDto> authorBlog = service.findBlogsOfAuthor(authorId);
		return Response.success(authorBlog);
	}
	
	@GetMapping("/blog/latest")
	public ResponseEntity<?> addBlog() {
		List<BlogDto> authorBlog = service.lastThreeBlogs();
		return Response.success(authorBlog);
	}

}
