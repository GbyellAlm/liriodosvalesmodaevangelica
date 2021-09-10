package com.projetointegrador.liriodosvalesmodaevangelica.dtos;

import java.io.Serializable;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.projetointegrador.liriodosvalesmodaevangelica.entities.User;

public class UserDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;

	@Size(min = 5, max = 10, message = "Este campo deve conter de 5 a 10 caracteres")
	private String userName;

	@Email(message = "E-mail invalido")
	@NotBlank(message = "Campo obrigatório")
	private String email;

	public UserDTO() {

	}

	public UserDTO(Long id, String userName, String email) {
		this.id = id;
		this.userName = userName;
		this.email = email;
	}

	public UserDTO(User entity) {
		id = entity.getId();
		userName = entity.getUserName();
		email = entity.getEmail();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}
