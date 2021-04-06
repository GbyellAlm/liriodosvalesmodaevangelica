package com.projetointegrador.liriodosvalesmodaevangelica.resources;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.projetointegrador.liriodosvalesmodaevangelica.dtos.ProductImageDTO;
import com.projetointegrador.liriodosvalesmodaevangelica.services.ProductImageService;

@RestController
@RequestMapping(value = "/images")
public class ProductImageResource {

	@Autowired
	private ProductImageService service;

	@GetMapping(value = "/{id}")
	public ResponseEntity<ProductImageDTO> findById(@PathVariable Long id) {
		ProductImageDTO dto = service.findById(id);
		return ResponseEntity.ok().body(dto);
	}

	@PostMapping
	public ResponseEntity<ProductImageDTO> insert(@RequestBody ProductImageDTO dto) {
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}

	@DeleteMapping(value = "{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
}
