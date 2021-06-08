package com.projetointegrador.liriodosvalesmodaevangelica.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.projetointegrador.liriodosvalesmodaevangelica.dtos.UserDTO;
import com.projetointegrador.liriodosvalesmodaevangelica.dtos.UserUpdateDTO;
import com.projetointegrador.liriodosvalesmodaevangelica.entities.User;
import com.projetointegrador.liriodosvalesmodaevangelica.repositories.UserRepository;
import com.projetointegrador.liriodosvalesmodaevangelica.services.exceptions.ResourceNotFoundException;

@Service
public class UserService implements UserDetailsService {

	private static Logger logger = LoggerFactory.getLogger(UserService.class);

	@Autowired
	private UserRepository repository;

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = repository.findByEmail(username);
		if (user == null) {
			logger.error("User not found: " + username);
			throw new UsernameNotFoundException("Endereço de e-mail não encontrado.");
		}
		logger.info("User found: " + username);
		return user;
	}

	@Transactional(readOnly = true)
	public List<UserDTO> findAll() {
		List<User> users = repository.findAll();
		return users.stream().map(user -> new UserDTO(user)).collect(Collectors.toList());
	}

	@Transactional
	public UserDTO update(Long id, UserUpdateDTO dto) {
		try {
			User entity = repository.getOne(id);
			entity.setUserName(dto.getUserName());
			entity.setEmail(dto.getEmail());
			entity.setPassword(passwordEncoder.encode(dto.getPassword()));
			entity = repository.save(entity);
			return new UserDTO(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("O usuário que você está querendo atualizar não existe.");
		}
	}
}
