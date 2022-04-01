package com.wedding.daos;

import org.springframework.web.multipart.MultipartFile;

public interface IFileService {
	String upload(MultipartFile file);

	void replaceFile(MultipartFile file, String Key);
}
