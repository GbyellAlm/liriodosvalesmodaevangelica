package com.projetointegrador.liriodosvalesmodaevangelica.dtos;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.projetointegrador.liriodosvalesmodaevangelica.entities.Category;
import com.projetointegrador.liriodosvalesmodaevangelica.entities.Product;

public class ProductDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;

	@NotBlank(message = "Campo obrigatório")
	private String name;

	@NotNull(message = "Campo obrigatório")
	private String unformattedPrice;

	private Double price;

	@NotEmpty(message = "Este campo não deve estar vazio")
	private List<CategoryDTO> categories = new ArrayList<>();

	private String unformattedPromotionalPrice;

	private Double promotionalPrice;

	@NotBlank(message = "Campo obrigatório")
	@Size(min = 39, max = 41, message = "Este campo deve conter de 39 a 41 caracteres")
	private String paymentTerms;

	// @Size(min = 1, max = 12, message = "Este campo deve conter de 1 a 12
	// caracteres")
	private String sizes;

	@NotBlank(message = "Campo obrigatório")
	private String imageURL;

	@NotBlank(message = "Campo obrigatório")
	@Size(min = 10, message = "Este campo deve conter no mínimo 10 caracteres")
	private String description;

	public ProductDTO() {

	}

	public ProductDTO(Long id, @NotBlank(message = "Campo obrigatório") String name,
			@NotNull(message = "Campo obrigatório") String unformattedPrice, Double price,
			String unformattedPromotionalPrice, Double promotionalPrice,
			@NotBlank(message = "Campo obrigatório") @Size(min = 39, max = 41, message = "Este campo deve conter de 39 a 41 caracteres") String paymentTerms,
			String sizes, @NotBlank(message = "Campo obrigatório") String imageURL,
			@NotBlank(message = "Campo obrigatório") @Size(min = 10, message = "Este campo deve conter no mínimo 10 caracteres") String description) {
		this.id = id;
		this.name = name;
		this.unformattedPrice = unformattedPrice;
		this.price = price;
		this.unformattedPromotionalPrice = unformattedPromotionalPrice;
		this.promotionalPrice = promotionalPrice;
		this.paymentTerms = paymentTerms;
		this.sizes = sizes;
		this.imageURL = imageURL;
		this.description = description;
	}

	public ProductDTO(Product entity) {
		this.id = entity.getId();
		this.name = entity.getName();
		this.price = entity.getPrice();
		this.promotionalPrice = entity.getPromotionalPrice();
		this.paymentTerms = entity.getPaymentTerms();
		this.sizes = entity.getSizes();
		this.imageURL = entity.getImageURL();
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

	public String getUnformattedPrice() {
		return unformattedPrice;
	}

	public void setUnformattedPrice(String unformattedPrice) {
		this.unformattedPrice = unformattedPrice;
	}

	public void formattedPrice(String unformattedPrice) {
		String str = unformattedPrice.replaceAll(",", ".");
		price = Double.parseDouble(str);
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public List<CategoryDTO> getCategories() {
		return categories;
	}

	public void setCategories(List<CategoryDTO> categories) {
		this.categories = categories;
	}

	public String getUnformattedPromotionalPrice() {
		return unformattedPromotionalPrice;
	}

	public void setUnformattedPromotionalPrice(String unformattedPromotionalPrice) {
		this.unformattedPromotionalPrice = unformattedPromotionalPrice;
	}

	public void formattedPromotionalPrice(String unformattedPromotionalPrice) {
		String str = unformattedPromotionalPrice.replaceAll(",", ".");
		promotionalPrice = Double.parseDouble(str);
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
