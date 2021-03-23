package com.projetointegrador.liriodosvalesmodaevangelica.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projetointegrador.liriodosvalesmodaevangelica.entities.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{

}
