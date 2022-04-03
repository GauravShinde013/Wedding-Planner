package com.wedding.services;

import java.util.DoubleSummaryStatistics;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amazonaws.services.kms.model.NotFoundException;
import com.wedding.daos.IBookingDao;
import com.wedding.dtos.CustomizeBookingDto;
import com.wedding.dtos.DtoEntityConverter;
import com.wedding.entities.Booking;

@Transactional
@Service
public class BookingServiceImpl {
	@Autowired
	private IBookingDao dao;
	@Autowired
	private DtoEntityConverter converter;

	public CustomizeBookingDto getByBookingId(int id) {
		Booking book = dao.findByBookingId(id);
		CustomizeBookingDto dto = converter.toCustomizeBookingDto(book);
		return dto;
	}

	public List<CustomizeBookingDto> getByCustomerId(int id) {
		List<Booking> bookingList = dao.findByClientId(id);
		List<CustomizeBookingDto> dto = null;
		if (!bookingList.isEmpty()) {
			dto = bookingList.stream().map(book -> converter.toCustomizeBookingDto(book)).collect(Collectors.toList());
		} else {
			throw new NotFoundException("Customer id invalid");
		}
		return dto;
	}

	public List<CustomizeBookingDto> getAllBookings() {
		List<Booking> booking = dao.findAll();
		List<CustomizeBookingDto> bookingList = booking.stream().map(book -> converter.toCustomizeBookingDto(book))
				.collect(Collectors.toList());
		return bookingList;
	}

	public List<CustomizeBookingDto> getRecentBookings() {
		List<Booking> booking = dao.findTop5ByOrderByCreatedtimestampDesc();
		List<CustomizeBookingDto> bookingList = booking.stream().map(book -> converter.toCustomizeBookingDto(book))
				.collect(Collectors.toList());
		return bookingList;
	}

	public DoubleSummaryStatistics getAllBookingsStatistics() {
		DoubleSummaryStatistics stats = getAllBookings().stream().mapToDouble((book) -> (book.getPayAmount()))
				.summaryStatistics();
		return stats;
	}

	public String addNewBooking(CustomizeBookingDto dto) {
		Booking booking = converter.toBookingEntity(dto);
		System.out.println(booking.toString());
		Booking insertedBooking = dao.save(booking);
		if (insertedBooking != null) {
			return "Booking Added Successfully";
		}
		return "Booking Failed";
	}

}
