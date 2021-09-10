package com.projetointegrador.liriodosvalesmodaevangelica.dtos;

import java.io.Serializable;

import com.projetointegrador.liriodosvalesmodaevangelica.entities.Category;

public class CategoryDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	/*
	 * ATENÇÃO: Não fiz validações aqui pois tenho muita certeza que em momento
	 * algum vou precisar criar novas categorias.
	 */

	private Long id;
	private String name;

	public CategoryDTO() {

	}

	public CategoryDTO(Long id, String name) {
		this.id = id;
		this.name = name;
	}

	public CategoryDTO(Category entity) {
		this.id = entity.getId();
		this.name = entity.getName();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
