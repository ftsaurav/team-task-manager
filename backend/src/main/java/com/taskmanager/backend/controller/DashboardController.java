package com.taskmanager.backend.controller;

import com.taskmanager.backend.dto.DashboardResponse;
import com.taskmanager.backend.entity.User;
import com.taskmanager.backend.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.
        AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.
        RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/dashboard")
@RequiredArgsConstructor
public class DashboardController {

    private final DashboardService dashboardService;

    @GetMapping("/stats")
    public DashboardResponse getStats(
            @AuthenticationPrincipal User user
    ) {

        return dashboardService.getDashboardStats(user);
    }
}