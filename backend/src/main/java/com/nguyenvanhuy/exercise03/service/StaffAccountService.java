package com.nguyenvanhuy.exercise03.service;

import java.util.List;
import java.util.UUID;

import com.nguyenvanhuy.exercise03.entity.StaffAccount;

public interface StaffAccountService {
    StaffAccount addStaffAccount(StaffAccount staffAccount);

    StaffAccount getStaffAccountById(UUID staffAccountId);

    List<StaffAccount> getAllStaffAccounts();

    StaffAccount updateStaffAccount(UUID staffAccountId, StaffAccount updatedStaffAccount);

    void deleteStaffAccount(UUID staffAccountId);
}
