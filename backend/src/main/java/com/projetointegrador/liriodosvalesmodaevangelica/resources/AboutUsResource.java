package com.projetointegrador.liriodosvalesmodaevangelica.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projetointegrador.liriodosvalesmodaevangelica.entities.AboutUs;
import com.projetointegrador.liriodosvalesmodaevangelica.services.AboutUsService;

@RestController
@RequestMapping(value = "/aboutus")
public class AboutUsResource {
	
	@Autowired
	private AboutUsService service;
	
	@GetMapping
	public ResponseEntity<List<AboutUs>> findAll() {
		List<AboutUs> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
}
