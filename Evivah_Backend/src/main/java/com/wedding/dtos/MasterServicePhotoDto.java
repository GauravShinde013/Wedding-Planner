package com.wedding.dtos;

import org.springframework.web.multipart.MultipartFile;

public class MasterServicePhotoDto {
	private int id;
	private String name;
	private MultipartFile mServicePhoto;

	private String mServiceLink;	
	
	public MasterServicePhotoDto() {
		
	}
	
	public MasterServicePhotoDto(int id, String name, MultipartFile mServicePhoto, String mServiceLink) {
		super();
		this.id = id;
		this.name = name;
		this.mServicePhoto = mServicePhoto;
		this.mServiceLink = mServiceLink;
	}
	

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public MultipartFile getmServicePhoto() {
		return mServicePhoto;
	}
	public void setmServicePhoto(MultipartFile mServicePhoto) {
		this.mServicePhoto = mServicePhoto;
	}
	public String getmServiceLink() {
		return mServiceLink;
	}
	public void setmServiceLink(String mServiceLink) {
		this.mServiceLink = mServiceLink;
	}

	

}
