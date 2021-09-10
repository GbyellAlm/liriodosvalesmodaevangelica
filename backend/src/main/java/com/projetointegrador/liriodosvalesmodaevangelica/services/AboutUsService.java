package com.projetointegrador.liriodosvalesmodaevangelica.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

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
	public AboutUsDTO findById(Long id) {
		Optional<AboutUs> obj = repository.findById(id);
		AboutUs entity = obj.orElseThrow(() -> new ResourceNotFoundException("Id não encontrado"));
		return new AboutUsDTO(entity);
	}

	@Transactional(readOnly = true)
	public List<AboutUsDTO> findAll() {
		List<AboutUs> list = repository.findAll();
		return list.stream().map(x -> new AboutUsDTO(x)).collect(Collectors.toList());
	}

	@Transactional
	public AboutUsDTO update(Long id, AboutUsDTO dto) {
		try {
			AboutUs entity = repository.getOne(id);
			entity.setImageURL(dto.getImageURL());
			entity.setDescription(dto.getDescription());
			entity = repository.save(entity);
			return new AboutUsDTO(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id não encontrado");
		}
	}
}
