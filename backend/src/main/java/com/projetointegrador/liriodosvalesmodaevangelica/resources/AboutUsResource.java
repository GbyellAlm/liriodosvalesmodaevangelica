package com.projetointegrador.liriodosvalesmodaevangelica.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projetointegrador.liriodosvalesmodaevangelica.dtos.AboutUsDTO;
import com.projetointegrador.liriodosvalesmodaevangelica.services.AboutUsService;

@RestController
@RequestMapping(value = "/about-us")
public class AboutUsResource {

	@Autowired
	private AboutUsService service;

	@GetMapping(value = "/{id}")
	public ResponseEntity<AboutUsDTO> findById(@PathVariable Long id) {
		AboutUsDTO dto = service.findById(id);
		return ResponseEntity.ok().body(dto);
	}

	// Não sei se vai ser útil, pois acho que o endpoint "findById" já é o
	// suficiente para listar e editar o "sobre nós" no administrativo.
	@GetMapping
	public ResponseEntity<List<AboutUsDTO>> findAll() {
		List<AboutUsDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<AboutUsDTO> update(@PathVariable Long id, @RequestBody AboutUsDTO dto) {
		dto = service.update(id, dto);
		return ResponseEntity.ok().body(dto);
	}
}
