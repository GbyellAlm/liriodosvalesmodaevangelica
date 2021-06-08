package com.projetointegrador.liriodosvalesmodaevangelica.services.exceptions;

// Classe para capturar mensagens personalizadas de violação de integridade de deleção de algo - Exemplo: Deleção de categorias que possuem produtos associados a elas. P.S. Não estou mais usando essa classe, mas acredito que posso usar no futuro. 
public class DatabaseException extends RuntimeException {
	private static final long serialVersionUID = 1L;

	public DatabaseException(String msg) {
		// Substitui a mensagem padrão "do Java" pela mensagem personalizada.
		super(msg);
	}
}
