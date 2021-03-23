package com.projetointegrador.liriodosvalesmodaevangelica.services;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.projetointegrador.liriodosvalesmodaevangelica.dtos.CategoryDTO;
import com.projetointegrador.liriodosvalesmodaevangelica.dtos.ProductDTO;
import com.projetointegrador.liriodosvalesmodaevangelica.entities.Category;
import com.projetointegrador.liriodosvalesmodaevangelica.entities.Product;
import com.projetointegrador.liriodosvalesmodaevangelica.repositories.CategoryRepository;
import com.projetointegrador.liriodosvalesmodaevangelica.repositories.ProductRepository;
import com.projetointegrador.liriodosvalesmodaevangelica.services.exceptions.DatabaseException;
import com.projetointegrador.liriodosvalesmodaevangelica.services.exceptions.ResourceNotFoundException;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository repository;
	
	@Autowired
	private CategoryRepository catRepository;
	
	public List<ProductDTO> findAllByCategoryId(Long categoryId) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Transactional(readOnly = true)
	public ProductDTO findById(Long id) {
		Optional<Product> obj = repository.findById(id);
		Product entity = obj.orElseThrow(() -> new ResourceNotFoundException("O produto solicitado não existe."));
		return new ProductDTO(entity, entity.getCategories());
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
		}
		catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("O produto que você quer atualizar não existe.");
		}
	}

	public void delete(Long id) {
		try {
			repository.deleteById(id);
		}
		catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("O produto que você quer deletar não existe.");
		}
		catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Violação de integridade");
		}
	}
	
	private void copyDTOToEntity(ProductDTO dto, Product entity) {
		entity.setName(dto.getName());
		entity.setPrice(dto.getPrice());
		entity.setPaymentTerms(dto.getPaymentTerms());
		entity.setPromotion(dto.isPromotion());
		entity.setPromotionalPrice(dto.getPromotionalPrice());
		entity.setDescription(dto.getDescription());
		
		entity.getCategories().clear();
		
		for(CategoryDTO catDTO : dto.getCategories()) {
			Category category = catRepository.getOne(catDTO.getId());
			entity.getCategories().add(category);
		}
	}
}
