package com.projetointegrador.liriodosvalesmodaevangelica.dtos;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;

import com.projetointegrador.liriodosvalesmodaevangelica.entities.AboutUs;

public class AboutUsDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;

	/*
	 * Não consegui validar esse campo, mesmo usando os validadores próprios para o
	 * tipo desse atributo (NotNull (funciona, pois também tenho uma validação igual
	 * na entidade), NotEmpty e NotBlank). OBS. Penso que essa validação pode ser
	 * feita no front, e que deve existir um validador que funcione aqui.
	 */
	@NotBlank(message = "Campo obrigatório")
	private String imageURL;

	/*
	 * Não consegui validar esse campo, mesmo usando os validadores próprios para o
	 * tipo desse atributo (NotNull (funciona, pois também tenho uma validação igual
	 * na entidade), NotEmpty e NotBlank). OBS. Penso que essa validação pode ser
	 * feita no front, e que deve existir um validador que funcione aqui.
	 */
	@NotBlank(message = "Campo obrigatório.")
	private String description;

	public AboutUsDTO() {

	}

	public AboutUsDTO(Long id, String imageURL, String description) {
		this.id = id;
		this.imageURL = imageURL;
		this.description = description;
	}

	public AboutUsDTO(AboutUs entity) {
		this.id = entity.getId();
		this.imageURL = entity.getImageURL();
		this.description = entity.getDescription();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getImageURL() {
		return imageURL;
	}

	public void setImageURL(String imageURL) {
		this.imageURL = imageURL;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
