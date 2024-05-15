package com.nguyenvanhuy.exercise03.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nguyenvanhuy.exercise03.entity.SlideShow;

import java.util.UUID;

@Repository
public interface SlideShowRepository extends JpaRepository<SlideShow, UUID> {
}
