package com.projetointegrador.liriodosvalesmodaevangelica.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.projetointegrador.liriodosvalesmodaevangelica.entities.Category;
import com.projetointegrador.liriodosvalesmodaevangelica.entities.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
	@Query("SELECT obj FROM Product obj INNER JOIN obj.categories cats WHERE" + ":category IN cats")
	Page<Product> findAllByCategoryId(Category category, Pageable pageable);

	@Query("SELECT DISTINCT obj FROM Product obj INNER JOIN obj.categories cats WHERE"
			+ "(COALESCE(:categories) IS NULL OR cats IN :categories) AND "
			+ "(:name = '' OR LOWER(obj.name) LIKE LOWER(CONCAT('%',:name,'%')))")
	Page<Product> findAllByCategoryIdOrProductName(List<Category> categories, String name, Pageable pageable);
}
