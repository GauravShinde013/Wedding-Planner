package com.wedding.controller;

import java.time.LocalDateTime;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.client.HttpServerErrorException.InternalServerError;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.wedding.dtos.Response;

import lombok.extern.slf4j.Slf4j;

@ControllerAdvice
@Slf4j
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

	Logger log = LoggerFactory.getLogger(GlobalExceptionHandler.class);

	public class ExceptionResponse {

		private String message;
		private LocalDateTime dateTime;

		public String getMessage() {
			return message;
		}

		public void setMessage(String message) {
			this.message = message;
		}

		public LocalDateTime getDateTime() {
			return dateTime;
		}

		public void setDateTime(LocalDateTime dateTime) {
			this.dateTime = dateTime;
		}
	}

	@ExceptionHandler(DataIntegrityViolationException.class)
	public ResponseEntity<?> emailExistsHandler(DataIntegrityViolationException ex) {
		LogErrors(ex, "Duplicate Entry");
		return Response.error("Data Integrity Error ");
	}

	@ExceptionHandler(NotFoundException.class)
	public ResponseEntity<?> notFoundException(NotFoundException ex) {
		ExceptionResponse response = new ExceptionResponse();
		response.setDateTime(LocalDateTime.now());
		ResponseEntity<Object> entity = new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
		LogErrors(ex, "Status Code: " + entity.getStatusCode() + " => Requested Content Not Found");

		return Response.error("Resource Not Found");
	}

	@ExceptionHandler(NullPointerException.class)
	public ResponseEntity<?> nullException(NullPointerException ex) {
		ExceptionResponse response = new ExceptionResponse();
		response.setDateTime(LocalDateTime.now());
		response.setMessage("Requested Content Not Found");
		ResponseEntity<Object> entity = new ResponseEntity<>(response, HttpStatus.NO_CONTENT);

		LogErrors(ex, "Status Code: " + entity.getStatusCode() + " => Requested Content Not Found");

		return Response.error("Data Not Found");
	}

	@ExceptionHandler(InternalServerError.class)
	public ResponseEntity<?> serverException(InternalServerError ex) {
		ExceptionResponse response = new ExceptionResponse();
		response.setDateTime(LocalDateTime.now());
		response.setMessage("Server Error: 500");
		ResponseEntity<Object> entity = new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		LogErrors(ex, "Status Code: " + entity.getStatusCode() + " => Something is wrong at server side");
		return entity;

	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<?> superException(Exception ex) {
		ExceptionResponse response = new ExceptionResponse();
		response.setDateTime(LocalDateTime.now());
		response.setMessage(ex.getMessage());

		LogErrors(ex, "Something is wrong within app");

		return Response.error("Error Message:  " + response.message);
	}

	public void LogErrors(Exception ex, String msg) {
		log.error(
				"\n=======================================================================================================");
		log.error("\nSome Error Occurred: ");
		log.error(msg);
		log.error("\nTechnical Details: " + ex.getMessage());

	}

}
