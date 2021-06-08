package com.projetointegrador.liriodosvalesmodaevangelica.dtos;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.projetointegrador.liriodosvalesmodaevangelica.entities.ProductImage;

public class ProductImageDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;

	private Long productId;

	// Não consegui validar esse campo, mesmo usando o validador próprio para o tipo
	// desse atributo (NotNull). P.S. Penso que esse problema esteja relacionado com
	// o problema de validação desse mesmo campo na lista de imagens no produto.
	@NotNull(message = "Campo obrigatório.")
	private boolean mainImage;

	// Não consegui validar esse campo, , mesmo usando os validadores próprios para
	// o tipo desse atributo (NotNull (funciona pois também tenho uma validação
	// igual na entidade.), NotEmpty e NotBlank). P.S. Penso que esse problema
	// esteja
	// relacionado com o problema de validação desse mesmo campo na lista de imagens
	// no produto.
	@NotBlank(message = "Campo obrigatório.")
	private String url;

	public ProductImageDTO() {

	}

	public ProductImageDTO(Long id, Long productId, boolean mainImage, String url) {
		this.id = id;
		this.productId = productId;
		this.mainImage = mainImage;
		this.url = url;
	}

	public ProductImageDTO(ProductImage entity) {
		this.id = entity.getId();
		this.productId = entity.getProduct().getId();
		this.mainImage = entity.isMainImage();
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
		return mainImage;
	}

	public void setMainImage(boolean mainImage) {
		this.mainImage = mainImage;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}
}
