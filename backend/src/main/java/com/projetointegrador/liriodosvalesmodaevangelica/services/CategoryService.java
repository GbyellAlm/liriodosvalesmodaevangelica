package com.projetointegrador.liriodosvalesmodaevangelica.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.projetointegrador.liriodosvalesmodaevangelica.dtos.CategoryDTO;
import com.projetointegrador.liriodosvalesmodaevangelica.entities.Category;
import com.projetointegrador.liriodosvalesmodaevangelica.repositories.CategoryRepository;

@Service
public class CategoryService {

	@Autowired
	private CategoryRepository repository;

	@Transactional(readOnly = true)
	public List<CategoryDTO> findAll() {
		List<Category> categories = repository.findAll();
		return categories.stream().map(category -> new CategoryDTO(category)).collect(Collectors.toList());
	}
	
	// Comentei o código abaixo, pois não será útil nessa 1a versão do sistema.
	/*@Transactional(readOnly = true)
	public CategoryDTO findById(Long id) {
		Optional<Category> obj = repository.findById(id);
		Category entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entidade não encontrada"));
		return new CategoryDTO(entity);
	}*/
}
