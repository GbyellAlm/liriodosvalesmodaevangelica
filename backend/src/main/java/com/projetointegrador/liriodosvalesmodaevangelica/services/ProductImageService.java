package com.projetointegrador.liriodosvalesmodaevangelica.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.projetointegrador.liriodosvalesmodaevangelica.dtos.ProductImageDTO;
import com.projetointegrador.liriodosvalesmodaevangelica.entities.Product;
import com.projetointegrador.liriodosvalesmodaevangelica.entities.ProductImage;
import com.projetointegrador.liriodosvalesmodaevangelica.repositories.ProductImageRepository;
import com.projetointegrador.liriodosvalesmodaevangelica.repositories.ProductRepository;
import com.projetointegrador.liriodosvalesmodaevangelica.services.exceptions.ResourceNotFoundException;

@Service
public class ProductImageService {

	@Autowired
	private ProductImageRepository repository;

	@Autowired
	private ProductRepository productRepository;

	@Transactional(readOnly = true)
	public ProductImageDTO findById(Long id) {
		Optional<ProductImage> obj = repository.findById(id);
		ProductImage entity = obj.orElseThrow(() -> new ResourceNotFoundException("A imagem solicitada não existe."));
		return new ProductImageDTO(entity);
	}

	@Transactional
	public ProductImageDTO insert(ProductImageDTO dto) {
		ProductImage entity = new ProductImage();
		copyDTOToEntity(dto, entity);
		entity = repository.save(entity);
		return new ProductImageDTO(entity);
	}

	public void delete(Long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("A imagem que você quer deletar não existe.");
		}
	}

	private void copyDTOToEntity(ProductImageDTO dto, ProductImage entity) {
		Product product = productRepository.getOne(dto.getProductId());
		entity.setProduct(product);
		// List<ProductImageDTO> productImage = repository.findAll(dto.getProductId());
		entity.setMainImage(dto.isMainImage());
		entity.setUrl(dto.getUrl());
	}
}
