package com.nguyenvanhuy.exercise03.repository;

import java.util.List;
import java.util.UUID;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nguyenvanhuy.exercise03.entity.Category;

public interface CategoryRepository extends JpaRepository<Category,UUID > {
    @Query("SELECT c FROM Category c WHERE c.parentId IS NULL")
    List<Category> findRootCategories();
    @Query("SELECT c FROM Category c WHERE c.parentId.id = :parentId")
    List<Category> findByParentId(@Param("parentId") UUID  parentId);
}