package com.nguyenvanhuy.exercise03.service;

import java.util.List;

import com.nguyenvanhuy.exercise03.entity.Country;

public interface CountryService {
    Country addCountry(Country country);
    
    Country getCountryById(Long countryId);
    
    List<Country> getAllCountries();
    
    Country updateCountry(Long countryId, Country updatedCountry);
    
    void deleteCountry(Long countryId);
}
