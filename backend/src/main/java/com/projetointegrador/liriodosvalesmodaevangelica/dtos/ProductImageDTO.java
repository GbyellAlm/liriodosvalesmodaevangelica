package com.projetointegrador.liriodosvalesmodaevangelica.dtos;

import java.io.Serializable;

import com.projetointegrador.liriodosvalesmodaevangelica.entities.ProductImage;

public class ProductImageDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private Long productId;
	private boolean isMainImage;
	private String url;

	public ProductImageDTO() {

	}

	public ProductImageDTO(Long id, Long productId, boolean isMainImage, String url) {
		super();
		this.id = id;
		this.productId = productId;
		this.isMainImage = isMainImage;
		this.url = url;
	}

	public ProductImageDTO(ProductImage entity) {
		this.id = entity.getId();
		this.productId = entity.getProduct().getId();
		this.isMainImage = entity.isMainImage();
		this.url = entity.getUrl();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

	public boolean isMainImage() {
		return isMainImage;
	}

	public void setMainImage(boolean isMainImage) {
		this.isMainImage = isMainImage;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}
}
