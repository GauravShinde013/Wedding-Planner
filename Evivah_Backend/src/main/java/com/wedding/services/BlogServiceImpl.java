package com.wedding.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wedding.daos.IBlogDao;
import com.wedding.dtos.BlogDto;
import com.wedding.dtos.DtoEntityConverter;
import com.wedding.dtos.VendorServiceDetailsDto;
import com.wedding.entities.Blog;
import com.wedding.entities.VendorServiceDetails;

@Transactional
@Service
public class BlogServiceImpl {
	@Autowired
	private IBlogDao dao;
	@Autowired 
	private DtoEntityConverter converter;
	@Autowired
	private PhotoServiceImpl photoService;
	
	
	
	public BlogDto getBlogById(int id) {
		Blog blog= dao.findByBlogId(id);
		BlogDto dto=converter.toBlogDto(blog);
		
		return dto;
		
	}
	
	
	public List<BlogDto> getAllBlogs() {
		List<Blog> blogs=dao.findAll();
		return blogs.stream().map(blog->(converter.toBlogDto(blog))).collect(Collectors.toList());
	}
	
	
	public Blog addNewBlog(BlogDto blogDto) {
		String url=photoService.upload(blogDto.getBlogImage());
		blogDto.setBlogImageLink(url);
		
		Blog blog=converter.toBlogEntity(blogDto);
		
		return dao.save(blog);
	}
	
	
	public int deleteBlogById(int id) {
		if(dao.existsById(id)) {
			dao.deleteById(id);
			return 1;
		}
		return 0;
	}
	
	
	public List<BlogDto> findBlogByTitle(String blogTitle) {
		List<Blog> blogs=dao.findByTitleContaining(blogTitle);
		return blogs.stream().map(blog->(converter.toBlogDto(blog))).collect(Collectors.toList());
	}
	
	
	public List<BlogDto> findBlogByAuthorName(String authorName) {
		List<BlogDto> blogs=getAllBlogs();
		return blogs.stream().filter(blog->blog.getAuthorFirstName().equals(authorName)
												||blog.getAuthorLastName().equals(authorName)).collect(Collectors.toList());

	}
	
	
	public List<BlogDto> findBlogsOfAuthor(int id){
		List<Blog> authorBlog=dao.findByAuthorId(id);
		return authorBlog.stream().map(blog->(converter.toBlogDto(blog))).collect(Collectors.toList());
	}
	
	public List<BlogDto> lastThreeBlogs(){
		List<Blog> blogs=dao.findTop3ByOrderByCreatedTimestampDesc();
		List<BlogDto> dto= blogs.stream().map(blog->converter.toBlogDto(blog)).collect(Collectors.toList());
		
		return dto;
	}
	 
}


















