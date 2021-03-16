package com.projetointegrador.liriodosvalesmodaevangelica.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.projetointegrador.liriodosvalesmodaevangelica.dtos.AboutUsDTO;
import com.projetointegrador.liriodosvalesmodaevangelica.entities.AboutUs;
import com.projetointegrador.liriodosvalesmodaevangelica.repositories.AboutUsRepository;
import com.projetointegrador.liriodosvalesmodaevangelica.services.exceptions.ResourceNotFoundException;

@Service
public class AboutUsService {
	
	@Autowired
	private AboutUsRepository repository;
	
	@Transactional(readOnly = true)
	public List<AboutUsDTO> findAll() {
		List<AboutUs> list = repository.findAll();
		return list.stream().map(x -> new AboutUsDTO(x)).collect(Collectors.toList());
	}
	
	@Transactional(readOnly = true)
	public AboutUsDTO findById(Long id) {
		Optional<AboutUs> obj = repository.findById(id);
		AboutUs entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entidade não encontrada"));
		return new AboutUsDTO(entity);
	}
}
