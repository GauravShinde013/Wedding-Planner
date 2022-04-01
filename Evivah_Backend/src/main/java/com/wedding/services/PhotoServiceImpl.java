package com.wedding.services;

import java.io.IOException;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.SdkClientException;
import com.amazonaws.services.kms.model.NotFoundException;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.AmazonS3Exception;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.GetObjectMetadataRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.wedding.daos.IFileService;
import com.wedding.daos.IPhotoDao;
import com.wedding.entities.Photos;

@Service
public class PhotoServiceImpl implements IFileService {

	@Autowired
	private AmazonS3Client client;

	@Autowired
	private IPhotoDao dao;

	@Autowired(required = false)
	private Photos photo;

	@Value("${application.bucket.name}")
	private String bucketName;

	@Override
	public String upload(MultipartFile file) {
		String extension = StringUtils.getFilenameExtension(file.getOriginalFilename());
		String key = UUID.randomUUID().toString() + "." + extension;
		ObjectMetadata metadata = new ObjectMetadata();
		metadata.setContentLength(file.getSize());
		metadata.setContentType(file.getContentType());
		try {
			client.putObject("owpphotos", key, file.getInputStream(), metadata);
		} catch (IOException e) {
			throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error during file upload");
		}
		client.setObjectAcl("owpphotos", key, CannedAccessControlList.PublicRead);
		return client.getResourceUrl("owpphotos", key);
	}

	@Override
	public void replaceFile(MultipartFile file, String Url) {
		String[] stringarray = Url.split("/");
		String Key = stringarray[stringarray.length - 1];

		if (Exists(Key, bucketName)) {
			ObjectMetadata metadata = new ObjectMetadata();
			metadata.setContentLength(file.getSize());
			metadata.setContentType(file.getContentType());
			try {
				client.putObject(new PutObjectRequest(bucketName, Key, file.getInputStream(), metadata));
			} catch (AmazonServiceException e) {
				e.printStackTrace();
			} catch (SdkClientException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
		} else {
			throw new NotFoundException("Key Not Found");
		}
	}

	public boolean Exists(String fileKey, String bucketName) {
		try {
			client.getObjectMetadata(
					new GetObjectMetadataRequest(bucketName, fileKey).withBucketName(bucketName).withKey(fileKey));

			return true;
		}

		catch (AmazonS3Exception ex) {

			System.out.println("\n\n Error Code: " + ex.getErrorCode() + "\nError Message: " + ex.getErrorMessage());

		}
		return false;
	}

}
