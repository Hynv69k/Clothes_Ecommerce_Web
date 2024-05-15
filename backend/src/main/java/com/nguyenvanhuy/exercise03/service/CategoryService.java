package com.nguyenvanhuy.exercise03.service;

import java.util.List;
import java.util.UUID;

import com.nguyenvanhuy.exercise03.entity.Category;

public interface CategoryService {

    Category addCategory(Category category);

    Category getCategoryById(UUID categoryId);

    List<Category> getAllCategories();

    Category updateCategory(UUID categoryId, Category category);

    void deleteCategory(UUID categoryId);

    List<Category> getCategoriesByParentId(UUID parentId);
    List<Category> getRootCategories();
}
