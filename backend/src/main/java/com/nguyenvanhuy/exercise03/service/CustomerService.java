package com.nguyenvanhuy.exercise03.service;

import java.util.List;
import java.util.UUID;

import com.nguyenvanhuy.exercise03.entity.Customer;

public interface CustomerService {
    Customer addCustomer(Customer customer);

    Customer getCustomerById(UUID customerId);

    List<Customer> getAllCustomers();

    Customer updateCustomer(UUID customerId, Customer updatedCustomer);

    void deleteCustomer(UUID customerId);
}
