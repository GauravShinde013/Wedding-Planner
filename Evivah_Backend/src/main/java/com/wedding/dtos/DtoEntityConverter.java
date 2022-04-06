package com.wedding.dtos;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.wedding.entities.Blog;
import com.wedding.entities.Booking;
import com.wedding.entities.MasterServices;
import com.wedding.entities.Orders;
import com.wedding.entities.Photos;
import com.wedding.entities.RatingReviews;
import com.wedding.entities.User;
import com.wedding.entities.VendorServiceDetails;

@Component
public class DtoEntityConverter {

	public UserDto toUserDto(User user) {
		UserDto dto = new UserDto();

		dto.setId(user.getId());
		dto.setFirstName(user.getFirstName());
		dto.setLastName(user.getLastName());
		dto.setEmail(user.getEmail());
		dto.setMobile(user.getMobile());
		dto.setPassword(user.getPassword());
		dto.setRole(user.getRole());
		dto.setCity(user.getCity());
		dto.setAddressLine(user.getAddressLine());
		dto.setPincode(user.getPincode());
		dto.setState(user.getState());
		dto.setCreatedTimestamp(user.getCreatedTimestamp());
		dto.setProfilePicUrl(user.getProfileImage());
//		 user.getServiceDetails().stream().map((service)->service.getBooking()).collect(Collectors.toList()).stream().map((order)->order);
		
		return dto;

	}

	public User toUserEntity(UserDto dto) {
		User user = new User();

		user.setId(dto.getId());
		user.setFirstName(dto.getFirstName());
		user.setLastName(dto.getLastName());
		user.setEmail(dto.getEmail());
		user.setMobile(dto.getMobile());
		user.setPassword(dto.getPassword());
		user.setRole(dto.getRole());
		if ((dto.getProfilePicUrl() != null)) {
			user.setProfileImage(dto.getProfilePicUrl());
		}
		return user;

	}

	public RatingReviews toReviewRatingEntity(ServiceFeedbackDto feedbackDto) {

		RatingReviews review = new RatingReviews();
		review.setRatingId(feedbackDto.getRatingId());
		review.setServices(new VendorServiceDetails(feedbackDto.getVendorServiceDetailsId()));
		review.setCustomer(new User(feedbackDto.getCustomerId()));
		review.setRating(feedbackDto.getRating());
		review.setReview(feedbackDto.getReview());
		review.setCreatedTimestamp(feedbackDto.getCreatedTimeStamp());

		return review;

	}

	public Blog toBlogEntity(BlogDto dto) {
		Blog blog = new Blog();
		blog.setBlogId(dto.getBlogId());
		blog.setTitle(dto.getTitle());
		blog.setWeddingCity(dto.getWeddingCity());
		blog.setDescription(dto.getDescription());
		blog.setCreatedTimestamp(dto.getCreatedTimestamp());
		blog.setAuthor(new User(dto.getAuthorId()));
		blog.setBlogImageUrl(dto.getBlogImageLink());

		return blog;
	}

	public BlogDto toBlogDto(Blog blog) {

		BlogDto dto = new BlogDto();

		dto.setBlogId(blog.getBlogId());
		dto.setTitle(blog.getTitle());
		dto.setWeddingCity(blog.getWeddingCity());
		dto.setDescription(blog.getDescription());
		dto.setCreatedTimestamp(blog.getCreatedTimestamp());
		dto.setAuthorId(blog.getAuthor().getId());
		dto.setAuthorFirstName(blog.getAuthor().getFirstName());
		dto.setAuthorLastName(blog.getAuthor().getLastName());
		dto.setAuthorProfileUrl(blog.getAuthor().getProfileImage());
		dto.setBlogImageLink(blog.getBlogImageUrl());
		return dto;
	}

	public ServiceFeedbackDto toReviewRatingDto(RatingReviews review) {

		ServiceFeedbackDto feedbackDto = new ServiceFeedbackDto();

		feedbackDto.setRatingId(review.getRatingId());
		feedbackDto.setCustomerId(review.getCustomer().getId());
		feedbackDto.setRating(review.getRating());
		feedbackDto.setReview(review.getReview());
		feedbackDto.setFirstName(review.getCustomer().getFirstName());
		feedbackDto.setLastName(review.getCustomer().getLastName());
		feedbackDto.setCreatedTimeStamp(review.getCreatedTimestamp());
		feedbackDto.setProfileImg(review.getCustomer().getProfileImage());

		return feedbackDto;

	}

	public MasterServices toMasterServicePhotosEntity(MasterServicePhotoDto dto) {
		MasterServices service = new MasterServices();
		service.setMasterId(dto.getId());
		service.setServiceName(dto.getName());
		service.setThumbnailLink(dto.getmServiceLink());
		return service;
	}

	public MasterServiceDto toMasterServiceDto(MasterServices service) {
		MasterServiceDto dto = new MasterServiceDto();
		dto.setId(service.getMasterId());
		dto.setServiceName(service.getServiceName());
		dto.setThumbnailLink(service.getThumbnailLink());
		return dto;
	}

//	WHILE ADDING VENDOR SERVICE DETAILS
	public VendorServiceDetails toVendorServiceDetailsEntity(VendorServiceDetailsDto dto) {
		VendorServiceDetails service = new VendorServiceDetails();

		service.setVendorServiceDetailsId(dto.getServiceId());
		service.setBrandName(dto.getBrandName());
		service.setSpecification(dto.getSpecification());
		service.setServiceDetails(dto.getDescription());
		service.setServicePrice(dto.getServicePrice());
		service.setIsApproved(dto.getIsApproved());
		service.setCreatedTimestamp(dto.getCreatedTimestamp());
		service.setMasterService(new MasterServices(dto.getMasterServiceId()));
		service.setUser(new User(dto.getUserId()));

		List<Photos> photosList = dto.getImgList().stream().map((link) -> toPhotosEntity(link))
				.collect(Collectors.toList());

		for (Photos p : photosList) {
			service.addPhotos(p);
		}
//		List<Photos> photosList=dto.getSaveImgList().stream().map((photoDto)->toPhotosEntity(photoDto)).collect(Collectors.toList());
//		
//		for (Photos p : photosList) {
//			service.addPhotos(p);
//		}

		return service;
	}

	public Photos toPhotosEntity(String url) {
		Photos photo = new Photos();
		photo.setImageLink(url);
		return photo;
	}

//	WHILE DISPLAYING VENDOR SERVICE DETAILS
	public VendorServiceDetailsDto toVendorServiceDetailsDto(VendorServiceDetails service) {
		VendorServiceDetailsDto dto = new VendorServiceDetailsDto();

		dto.setServiceId(service.getVendorServiceDetailsId());
		dto.setBrandName(service.getBrandName());
		dto.setSpecification(service.getSpecification());
		dto.setDescription(service.getServiceDetails());
		dto.setServicePrice(service.getServicePrice());
		dto.setMasterServiceId(service.getMasterService().getMasterId());
		dto.setMasterServiceName(service.getMasterService().getServiceName());
		dto.setUserId(service.getUser().getId());
		dto.setIsApproved(service.getIsApproved());
		dto.setCreatedTimestamp(service.getCreatedTimestamp());
		dto.setFirstName(service.getUser().getFirstName());
		dto.setLastName(service.getUser().getLastName());
		dto.setProfilePicLink(service.getUser().getProfileImage());
		dto.setVendorCity(service.getUser().getCity());
		dto.setImgList(service.getImgList().stream().map((img) -> img.getImageLink()).collect(Collectors.toList()));

		List<ServiceFeedbackDto> feedbackList = new ArrayList<>();
		service.getFeedback().stream().forEach((feedback) -> {
			ServiceFeedbackDto feedbackDto = new ServiceFeedbackDto();

			feedbackDto = toReviewRatingDto(feedback);
			feedbackList.add(feedbackDto);
		});

		dto.setFeedbackList(feedbackList);
		return dto;
	}

//ADMIN:	For Displaying All Customers

	public UserDto toCustomerDto(User user) {
		UserDto dto = new UserDto();

		dto.setId(user.getId());
		dto.setFirstName(user.getFirstName());
		dto.setLastName(user.getLastName());
		dto.setEmail(user.getEmail());
		dto.setMobile(user.getMobile());
		dto.setPassword("******");
		dto.setProfilePicUrl(user.getProfileImage());
		dto.setCity(user.getCity());
		dto.setAddressLine(user.getAddressLine());
		dto.setState(user.getState());
		dto.setPincode(user.getPincode());
		dto.setCreatedTimestamp(user.getCreatedTimestamp());
		dto.setRole(user.getRole());
		return dto;
	}

	public CustomizeBookingDto toCustomizeBookingDto(Booking booking) {
		CustomizeBookingDto dto = new CustomizeBookingDto();

		dto.setBookingId(booking.getBookingId());
		dto.setBridesName(booking.getBridesName());
		dto.setGroomsName(booking.getGroomsName());
		dto.setGuestCount(booking.getGuestCount());
		dto.setPayAmount(booking.getPayAmount());
		dto.setPayStatus(booking.isPayStatus());
		dto.setWeddingCity(booking.getWeddingCity());
		dto.setWeddingDate(booking.getWeddingDate());
		dto.setCustomerId(booking.getClient().getId());
		dto.setCustomerFirstName(booking.getClient().getFirstName());
		dto.setCustomerLastName(booking.getClient().getLastName());
		dto.setCreatedTimestamp(booking.getCreatedtimestamp());
//		dto.setOrders(booking.getOrders());

		List<VendorServiceDetailsDto> vdto = booking.getOrders().stream()
				.map(order -> toVendorServiceDetailsDto(order.getVendorService())).collect(Collectors.toList());
		dto.setServiceDetailsList(vdto);

		return dto;

	}

	public OrderDto toOrderDto(Orders order) {
		OrderDto dto = new OrderDto();

		dto.setOrderId(order.getOrderId());
		dto.setBookingDto(toCustomizeBookingDto(order.getBooking()));

		return dto;

	}

	public OrderDto toVendorOrderDto(Orders order, int vendorId) {
		OrderDto dto = new OrderDto();

		dto.setOrderId(order.getOrderId());
		CustomizeBookingDto bookingDto = toCustomizeBookingDto(order.getBooking());
		List<VendorServiceDetailsDto> d = bookingDto.getServiceDetailsList().stream()
				.filter(service -> service.getServiceId() == vendorId).collect(Collectors.toList());
		bookingDto.setPayAmount(d.get(0).getServicePrice());
		bookingDto.setServiceDetailsList(null);
		dto.setBookingDto(bookingDto);
		return dto;

	}

	public Orders toOrdersEntity(BookingOrdersDto dto) {
		Orders order = new Orders();

		order.setOrderId(dto.getOrderId());
		order.setBooking(new Booking(dto.getBookingId()));
		order.setVendorService(new VendorServiceDetails(dto.getVendorServiceDetailsId()));

		return order;
	}

	public Booking toBookingEntity(CustomizeBookingDto dto) {
		Booking booking = new Booking();

		booking.setBookingId(dto.getBookingId());
		booking.setBridesName(dto.getBridesName());
		booking.setGroomsName(dto.getGroomsName());
		booking.setGuestCount(dto.getGuestCount());
		booking.setWeddingCity(dto.getWeddingCity());
		booking.setWeddingDate(dto.getWeddingDate());
		booking.setPayAmount(dto.getPayAmount());
		booking.setPayStatus(dto.isPayStatus());
		booking.setClient(new User(dto.getCustomerId()));

		List<Orders> ordersList = dto.getOrders().stream().map(order -> toOrdersEntity(order))
				.collect(Collectors.toList());
		
		for (Orders o : ordersList) {
			booking.addOrders(o);
		}
		return booking;

	}
	
	public VendorOrdersDto toVendorOrderDto(Orders order) {
		VendorOrdersDto dto=new VendorOrdersDto();
		
		dto.setOrderId(order.getOrderId());
		
		dto.setServiceId(order.getVendorService().getVendorServiceDetailsId());
		dto.setServiceName(order.getVendorService().getMasterService().getServiceName());
		dto.setServicePrice(order.getVendorService().getServicePrice());
		dto.setVendorFirstName(order.getVendorService().getUser().getFirstName());
		dto.setVendorLastName(order.getVendorService().getUser().getLastName());
		
		CustomizeBookingDto cdto=toCustomizeBookingDto(order.getBooking());
		cdto.setServiceDetailsList(null);
		dto.setBookingList(cdto);
		
		
		return dto;
	}

}





















