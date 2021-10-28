package com.projetointegrador.liriodosvalesmodaevangelica.services;

import java.net.URL;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.projetointegrador.liriodosvalesmodaevangelica.dtos.CategoryDTO;
import com.projetointegrador.liriodosvalesmodaevangelica.dtos.ProductDTO;
import com.projetointegrador.liriodosvalesmodaevangelica.dtos.ImageUriDTO;
import com.projetointegrador.liriodosvalesmodaevangelica.entities.Category;
import com.projetointegrador.liriodosvalesmodaevangelica.entities.Product;
import com.projetointegrador.liriodosvalesmodaevangelica.repositories.CategoryRepository;
import com.projetointegrador.liriodosvalesmodaevangelica.repositories.ProductRepository;
import com.projetointegrador.liriodosvalesmodaevangelica.services.exceptions.ResourceNotFoundException;

@Service
public class ProductService {

	@Autowired
	private CategoryRepository categoryRepository;

	@Autowired
	private ProductRepository repository;

	@Autowired
	private S3Service s3Service;

	@Transactional(readOnly = true)
	public Page<ProductDTO> findAllByCategoryId(Long catId, PageRequest pageRequest) {
		Category category = categoryRepository.getOne(catId);
		Page<Product> page = repository.findAllByCategoryId(category, pageRequest);
		repository.findAllWithCategories(page.getContent());
		return page.map(prod -> new ProductDTO(prod, prod.getCategories()));
	}

	@Transactional(readOnly = true)
	public ProductDTO findById(Long id) {
		Optional<Product> obj = repository.findById(id);
		Product entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entidade não encontrada"));
		return new ProductDTO(entity, entity.getCategories());
	}

	@Transactional(readOnly = true)
	public Page<ProductDTO> findAllByProductNameOrCategoryId(String name, Long catId, PageRequest pageRequest) {
		List<Category> categories = (catId == 0) ? null : Arrays.asList(categoryRepository.getOne(catId));
		Page<Product> page = repository.findAllByProductNameOrCategoryId(name, categories, pageRequest);
		repository.findAllWithCategories(page.getContent());
		return page.map(prod -> new ProductDTO(prod, prod.getCategories()));
	}

	public ImageUriDTO uploadImage(MultipartFile imageFile) {
		URL url = s3Service.uploadImage(imageFile);
		return new ImageUriDTO(url.toString());
	}

	@Transactional
	public ProductDTO insert(ProductDTO dto) {
		Product entity = new Product();
		copyDTOToEntity(dto, entity);
		entity = repository.save(entity);
		return new ProductDTO(entity);
	}

	@Transactional
	public ProductDTO update(Long id, ProductDTO dto) {
		try {
			Product entity = repository.getOne(id);
			copyDTOToEntity(dto, entity);
			entity = repository.save(entity);
			return new ProductDTO(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id não encontrado");
		}
	}

	public void delete(Long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id não encontrado");
		}
	}

	private void copyDTOToEntity(ProductDTO dto, Product entity) {
		entity.setName(dto.getName());
		entity.setPrice(dto.getPrice());
		entity.setPromotionalPrice(dto.getPromotionalPrice());
		entity.setPaymentTerms(dto.getPaymentTerms());
		entity.setSizes(dto.getSizes());
		entity.setImageURL(dto.getImageURL());
		entity.setDescription(dto.getDescription());

		entity.getCategories().clear();

		for (CategoryDTO categoryDTO : dto.getCategories()) {
			Category category = categoryRepository.getOne(categoryDTO.getId());
			entity.getCategories().add(category);
		}
	}
}
