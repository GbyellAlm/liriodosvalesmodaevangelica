package com.projetointegrador.liriodosvalesmodaevangelica.dtos;

import java.io.Serializable;

import com.projetointegrador.liriodosvalesmodaevangelica.entities.AboutUs;

public class AboutUsDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String imgUrl;
	private String description;

	public AboutUsDTO() {

	}

	public AboutUsDTO(Long id, String imgUrl, String description) {
		this.id = id;
		this.imgUrl = imgUrl;
		this.description = description;
	}

	public AboutUsDTO(AboutUs entity) {
		this.id = entity.getId();
		this.imgUrl = entity.getImgUrl();
		this.description = entity.getDescription();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
