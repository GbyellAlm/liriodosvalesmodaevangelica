package com.projetointegrador.liriodosvalesmodaevangelica.dtos;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import com.projetointegrador.liriodosvalesmodaevangelica.entities.Category;
import com.projetointegrador.liriodosvalesmodaevangelica.entities.Product;
import com.projetointegrador.liriodosvalesmodaevangelica.entities.ProductImage;

public class ProductDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private List<ProductImageDTO> images = new ArrayList<>();
	private String name;
	private Double price;
	private boolean isPromotion;
	private Double promotionalPrice;
	private String paymentTerms;
	private String sizes;
	private String description;
	private List<CategoryDTO> categories = new ArrayList<>();

	public ProductDTO() {

	}

	public ProductDTO(Long id, String name, Double price, boolean isPromotion, Double promotionalPrice,
			String paymentTerms, String sizes, String description) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.isPromotion = isPromotion;
		this.promotionalPrice = promotionalPrice;
		this.paymentTerms = paymentTerms;
		this.sizes = sizes;
		this.description = description;
	}

	public ProductDTO(Product entity) {
		this.id = entity.getId();
		this.name = entity.getName();
		this.price = entity.getPrice();
		this.isPromotion = entity.isPromotion();
		this.promotionalPrice = entity.getPromotionalPrice();
		this.paymentTerms = entity.getPaymentTerms();
		this.sizes = entity.getSizes();
		this.description = entity.getDescription();
	}

	public ProductDTO(Product entity, Set<ProductImage> images, Set<Category> categories) {
		this(entity);
		images.forEach(img -> this.images.add(new ProductImageDTO(img)));
		categories.forEach(cat -> this.categories.add(new CategoryDTO(cat)));
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public List<ProductImageDTO> getImages() {
		return images;
	}

	public void setImages(List<ProductImageDTO> images) {
		this.images = images;
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
