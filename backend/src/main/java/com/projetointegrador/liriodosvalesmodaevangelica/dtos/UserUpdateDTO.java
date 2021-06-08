package com.projetointegrador.liriodosvalesmodaevangelica.dtos;

import javax.validation.constraints.Size;

public class UserUpdateDTO extends UserDTO{
	private static final long serialVersionUID = 1L;
	
	@Size(min = 8, max = 16, message = "Esse campo deve conter entre 8 e 16 caracteres.")
	private String password;

	public UserUpdateDTO() {
		super();
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
