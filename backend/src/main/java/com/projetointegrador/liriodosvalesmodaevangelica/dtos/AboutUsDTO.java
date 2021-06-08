package com.projetointegrador.liriodosvalesmodaevangelica.dtos;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;

import com.projetointegrador.liriodosvalesmodaevangelica.entities.AboutUs;

public class AboutUsDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;

	// Não consegui validar esse campo, mesmo usando os validadores próprios para o
	// tipo desse atributo (NotNull (funciona pois também tenho uma validação igual
	// na entidade), NotEmpty e NotBlank). P.S. Penso que essa validação pode ser
	// feita no front, e que deve existir um validador que funcione aqui.
	@NotBlank(message = "Campo obrigatório.")
	private String imgUrl;

	// Não consegui validar esse campo, mesmo usando os validadores próprios para o
	// tipo desse atributo (NotNull (funciona pois também tenho uma validação igual
	// na entidade), NotEmpty e NotBlank). P.S. Penso que essa validação pode ser
	// feita no front, e que deve existir um validador que funcione aqui.
	@NotBlank(message = "Campo obrigatório.")
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
