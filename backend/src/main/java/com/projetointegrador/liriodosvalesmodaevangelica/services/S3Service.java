package com.projetointegrador.liriodosvalesmodaevangelica.services;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;

import org.apache.commons.io.FilenameUtils;
import org.joda.time.Instant;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;

@Service
public class S3Service {

	private static Logger LOG = LoggerFactory.getLogger(S3Service.class);

	@Autowired
	private AmazonS3 s3client;

	@Value("${s3.bucket}")
	private String bucketName;

	public URL uploadImage(MultipartFile imageFile) {
		try {
			String originalName = imageFile.getOriginalFilename();
			String extension = FilenameUtils.getExtension(originalName);

			String imageName = Instant.now().toDate().getTime() + "." + extension;

			InputStream is = imageFile.getInputStream();
			String contentType = imageFile.getContentType();
			return uploadImage(is, imageName, contentType);
		} catch (IOException e) {
			throw new IllegalArgumentException(e.getMessage());
		}
	}

	private URL uploadImage(InputStream is, String imageName, String contentType) {
		ObjectMetadata meta = new ObjectMetadata();
		meta.setContentType(contentType);

		LOG.info("Upload start");
		s3client.putObject(bucketName, imageName, is, meta);
		LOG.info("Upload finish");
		return s3client.getUrl(bucketName, imageName);
	}
}
