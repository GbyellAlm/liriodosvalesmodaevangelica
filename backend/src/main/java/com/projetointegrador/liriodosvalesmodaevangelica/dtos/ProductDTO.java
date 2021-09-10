package com.projetointegrador.liriodosvalesmodaevangelica.dtos;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

import com.projetointegrador.liriodosvalesmodaevangelica.entities.Category;
import com.projetointegrador.liriodosvalesmodaevangelica.entities.Product;

public class ProductDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;

	@NotBlank(message = "Campo obrigatório")
	private String name;

	@NotNull(message = "Campo obrigatório")
	@Positive(message = "Este campo deve conter somente valor positivo")
	private Double price;

	/*
	 * Não consegui validar esse campo. Tentei o unico validador que serve para o
	 * tipo List (NotNull (NotNull dentro do "<>" do List)) e não funcionou. OBS.
	 * Penso que, em último caso, a validação por si só no front irá resolver o
	 * problema.
	 */
	private List<CategoryDTO> categories = new ArrayList<>();

	@Positive(message = "Este campo deve conter somente valor positivo")
	private Double promotionalPrice;

	@NotBlank(message = "Campo obrigatório")
	@Size(min = 39, max = 41, message = "Este campo deve conter de 39 a 41 caracteres")
	private String paymentTerms;

	// @Size(min = 1, max = 12, message = "Este campo deve conter de 1 a 12
	// caracteres")
	private String sizes;

	private String imageURL;

	@NotBlank(message = "Campo obrigatório")
	private String description;

	public ProductDTO() {

	}

	public ProductDTO(Long id, @NotBlank(message = "Campo obrigatório") String name,
			@NotNull(message = "Campo obrigatório") @Positive(message = "Este campo deve conter somente valor positivo") Double price,
			@Positive(message = "Este campo deve conter somente valor positivo") Double promotionalPrice,
			@NotBlank(message = "Campo obrigatório") @Size(min = 39, max = 41, message = "Este campo deve conter de 39 a 41 caracteres") String paymentTerms,
			String sizes, String imageURL, @NotBlank(message = "Campo obrigatório") String description) {
		this.id = id;
		this.name = name;
		this.price = price;
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
