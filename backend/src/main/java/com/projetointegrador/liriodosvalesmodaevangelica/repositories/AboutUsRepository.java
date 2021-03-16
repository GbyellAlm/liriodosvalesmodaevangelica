package com.projetointegrador.liriodosvalesmodaevangelica.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projetointegrador.liriodosvalesmodaevangelica.entities.AboutUs;

@Repository
public interface AboutUsRepository extends JpaRepository<AboutUs, Long>{

}
