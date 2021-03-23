package com.projetointegrador.liriodosvalesmodaevangelica.dtos;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import com.projetointegrador.liriodosvalesmodaevangelica.entities.Category;
import com.projetointegrador.liriodosvalesmodaevangelica.entities.Product;

public class ProductDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	private Double price;
	private String paymentTerms;
	private String sizes;
	private boolean isPromotion;
	private Double promotionalPrice;
	private String description;
	
	private List<CategoryDTO> categories = new ArrayList<>();
	
	public ProductDTO() {
		
	}

	public ProductDTO(Long id, String name, Double price, String paymentTerms, String sizes, boolean isPromotion,
			Double promotionalPrice, String description) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.paymentTerms = paymentTerms;
		this.sizes = sizes;
		this.isPromotion = isPromotion;
		this.promotionalPrice = promotionalPrice;
		this.description = description;
	}
	
	public ProductDTO(Product entity) {
		this.id = entity.getId();
		this.name = entity.getName();
		this.price = entity.getPrice();
		this.paymentTerms = entity.getPaymentTerms();
		this.sizes = entity.getSizes();
		this.isPromotion = entity.isPromotion();
		this.promotionalPrice = entity.getPromotionalPrice();
		this.description = entity.getDescription();
	}
	
	public ProductDTO(Product entity, Set<Category> categories) {
		this(entity);
		categories.forEach(cat -> this.categories.add(new CategoryDTO(cat)));
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

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public String getPaymentTerms() {
		return paymentTerms;
	}

	public void setPaymentTerms(String paymentTerms) {
		this.paymentTerms = paymentTerms;
	}
	
	public String getSizes() {
		return sizes;
	}

	public void setSizes(String sizes) {
		this.sizes = sizes;
	}

	public boolean isPromotion() {
		return isPromotion;
	}

	public void setPromotion(boolean isPromotion) {
		this.isPromotion = isPromotion;
	}

	public Double getPromotionalPrice() {
		return promotionalPrice;
	}

	public void setPromotionalPrice(Double promotionalPrice) {
		this.promotionalPrice = promotionalPrice;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<CategoryDTO> getCategories() {
		return categories;
	}

	public void setCategories(List<CategoryDTO> categories) {
		this.categories = categories;
	}
}
