package com.projetointegrador.liriodosvalesmodaevangelica.dtos;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

import com.projetointegrador.liriodosvalesmodaevangelica.entities.Category;
import com.projetointegrador.liriodosvalesmodaevangelica.entities.Product;
import com.projetointegrador.liriodosvalesmodaevangelica.entities.ProductImage;

public class ProductDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;

	@NotBlank(message = "Campo obrigatório.")
	private String name;

	@NotNull(message = "Campo obrigatório.")
	@Positive(message = "Esse campo deve conter um valor positivo.")
	private Double price;

	// Não consegui validar esse campo. Tentei o unico validador que serve para o
	// tipo boolean (NotNull) e não funcionou.
	// private boolean promotion;

	// ATENÇÃO: Se eu não conseguir ocultar e habilitar o "imput" correspondente a
	// esse atributo ao selecionar "Sim" no "imput" correspondente ao atributo
	// "promotion", codar validação para não permitir que o usuário insira um preço
	// promocional sem que o produto esteja em promoção. P.S. Penso que posso fazer
	// essa validação no front.
	@Positive(message = "Esse campo deve conter um valor positivo.")
	private Double promotionalPrice;

	@NotBlank(message = "Campo obrigatório.")
	@Size(min = 39, max = 41, message = "Esse campo deve conter entre 39 e 41 caracteres.")
	private String paymentTerms;

	// Também não consegui validar esse campo. Também tentei o unico validador que
	// serve para o tipo List (NotNull (NotNull dentro do "<>" do List)) e não
	// funcionou. P.S. Penso que não faz sentido validar aqui esse atributo, visto
	// que como ele tem uma relação com outra classe, é obrigatório passar o "id"
	// dessa outra classe. Penso também que a validação no front irá resolver esse
	// problema.
	private List<CategoryDTO> categories = new ArrayList<>();

	//@Null
	//@Size(min = 1, max = 12, message = "Esse campo deve conter entre 1 e 12 caracteres.")
	private String sizes;

	// Não consegui validar direito esse campo. O unico validador que funciona + ou
	// - para esse campo é o NotEmpty (funciona + ou menos pois não permite inserir
	// uma lista de imagens vazia, entretanto permite inserir os atributos
	// "mainImage" e "url" nulos e vazios.). P.S. Penso que deve existir um
	// validador que funciona 100% para listas, que essa validação pode ser feita no
	// front e, que essa validação pode ser totalmente diferente quando eu for
	// implementar o upload de imagens.
	// -----------------------------------------------------------------------------
	// ATENÇÃO: Se eu não conseguir validar no front o fato de que o produto só pode
	// ter 1 imagem com o atributo "mainImage = true", codar essa validação.
	@NotEmpty(message = "A lista não pode ser vazia.")
	private List<ProductImageDTO> images = new ArrayList<>();

	@NotBlank(message = "Campo obrigatório.")
	private String description;

	public ProductDTO() {

	}

	public ProductDTO(Long id, String name, Double price, Double promotionalPrice, String paymentTerms, String sizes,
			String description) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.promotionalPrice = promotionalPrice;
		this.paymentTerms = paymentTerms;
		this.sizes = sizes;
		this.description = description;
	}

	public ProductDTO(Product entity) {
		this.id = entity.getId();
		this.name = entity.getName();
		this.price = entity.getPrice();
		this.promotionalPrice = entity.getPromotionalPrice();
		this.paymentTerms = entity.getPaymentTerms();
		this.sizes = entity.getSizes();
		this.description = entity.getDescription();
	}

	public ProductDTO(Product entity, Set<Category> categories, Set<ProductImage> images) {
		this(entity);
		categories.forEach(cat -> this.categories.add(new CategoryDTO(cat)));
		images.forEach(img -> this.images.add(new ProductImageDTO(img)));
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

	public List<CategoryDTO> getCategories() {
		return categories;
	}

	public void setCategories(List<CategoryDTO> categories) {
		this.categories = categories;
	}

	public String getSizes() {
		return sizes;
	}

	public void setSizes(String sizes) {
		this.sizes = sizes;
	}

	public List<ProductImageDTO> getImages() {
		return images;
	}

	public void setImages(List<ProductImageDTO> images) {
		this.images = images;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
