package com.projetointegrador.liriodosvalesmodaevangelica.dtos;

import java.io.Serializable;

import org.springframework.web.multipart.MultipartFile;

public class ImageFileDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private MultipartFile imageFile;

	public ImageFileDTO() {

	}

	public MultipartFile getImageFile() {
		return imageFile;
	}

	public void setImageFile(MultipartFile imageFile) {
		this.imageFile = imageFile;
	}
}
