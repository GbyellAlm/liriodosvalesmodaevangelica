package com.projetointegrador.liriodosvalesmodaevangelica.resources;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projetointegrador.liriodosvalesmodaevangelica.dtos.UserDTO;
import com.projetointegrador.liriodosvalesmodaevangelica.dtos.UserUpdateDTO;
import com.projetointegrador.liriodosvalesmodaevangelica.services.UserService;

@RestController
// Comentei o item abaixo, pois esse endpoint não será útil nessa 1a versão do sistema.
@RequestMapping(value = "/users")
public class UserResource {

	@Autowired
	private UserService service;

	@GetMapping
	public ResponseEntity<List<UserDTO>> findAll() {
		List<UserDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<UserDTO> update(@PathVariable Long id, @Valid @RequestBody UserUpdateDTO dto) {
		UserDTO newDTO = service.update(id, dto);
		return ResponseEntity.ok().body(newDTO);
	}
}
