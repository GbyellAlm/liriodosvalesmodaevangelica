package com.projetointegrador.liriodosvalesmodaevangelica.dtos;

import java.io.Serializable;

public class ImageUriDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private String imageUri;

	public ImageUriDTO() {

	}

	public ImageUriDTO(String imageUri) {
		this.imageUri = imageUri;
	}

	public String getImageUri() {
		return imageUri;
	}

	public void setImageUri(String imageUri) {
		this.imageUri = imageUri;
	}
}
