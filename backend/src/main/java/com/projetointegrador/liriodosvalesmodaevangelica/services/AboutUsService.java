package com.projetointegrador.liriodosvalesmodaevangelica.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.projetointegrador.liriodosvalesmodaevangelica.entities.AboutUs;
import com.projetointegrador.liriodosvalesmodaevangelica.repositories.AboutUsRepository;

@Service
public class AboutUsService {
	
	@Autowired
	private AboutUsRepository repository;
	
	@Transactional(readOnly = true)
	public List<AboutUs> findAll() {
		return repository.findAll();
	}
}
