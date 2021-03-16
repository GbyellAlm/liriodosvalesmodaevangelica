package com.projetointegrador.liriodosvalesmodaevangelica.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projetointegrador.liriodosvalesmodaevangelica.entities.AboutUs;
import com.projetointegrador.liriodosvalesmodaevangelica.repositories.AboutUsRepository;

@Service
public class AboutUsService {
	
	@Autowired
	private AboutUsRepository repository;
	
	public List<AboutUs> findAll() {
		return repository.findAll();
	}
}
