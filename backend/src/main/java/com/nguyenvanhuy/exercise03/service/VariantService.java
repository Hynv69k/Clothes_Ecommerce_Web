package com.nguyenvanhuy.exercise03.service;

import java.util.List;
import java.util.UUID;

import com.nguyenvanhuy.exercise03.entity.Variant;

public interface VariantService {
    Variant addVariant(Variant variant);

    List<Variant> getAllVariants();

    void deleteVariant(UUID variantId);
}
