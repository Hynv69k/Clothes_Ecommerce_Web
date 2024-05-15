package com.nguyenvanhuy.exercise03.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenvanhuy.exercise03.entity.OrderItem;
import com.nguyenvanhuy.exercise03.repository.OrderItemRepository;
import com.nguyenvanhuy.exercise03.service.OrderItemService;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class OrderItemServiceImpl implements OrderItemService {

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Override
    public OrderItem addOrderItem(OrderItem orderItem) {
        return orderItemRepository.save(orderItem);
    }

    @Override
    public OrderItem getOrderItemById(UUID orderItemId) {
        Optional<OrderItem> optionalOrderItem = orderItemRepository.findById(orderItemId);
        return optionalOrderItem.orElse(null);
    }

    @Override
    public List<OrderItem> getAllOrderItems() {
        return orderItemRepository.findAll();
    }

    @Override
    public OrderItem updateOrderItem(UUID orderItemId, OrderItem updatedOrderItem) {
        OrderItem existingOrderItem = orderItemRepository.findById(orderItemId).orElse(null);

        if (existingOrderItem != null) {
            existingOrderItem.setProduct(updatedOrderItem.getProduct());
            existingOrderItem.setOrder(updatedOrderItem.getOrder());
            existingOrderItem.setPrice(updatedOrderItem.getPrice());
            existingOrderItem.setQuantity(updatedOrderItem.getQuantity());
            existingOrderItem.setShippingId(updatedOrderItem.getShippingId());
            return orderItemRepository.save(existingOrderItem);
        }

        return null;
    }

    @Override
    public void deleteOrderItem(UUID orderItemId) {
        orderItemRepository.deleteById(orderItemId);
    }
}
