package com.taskmanager.backend.service;

import com.taskmanager.backend.dto.DashboardResponse;
import com.taskmanager.backend.entity.TaskStatus;
import com.taskmanager.backend.entity.User;
import com.taskmanager.backend.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class DashboardService {

    private final TaskRepository taskRepository;

    public DashboardResponse getDashboardStats(
            User currentUser
    ) {

        long totalTasks = taskRepository.count();

        long completedTasks = taskRepository
                .countByStatus(TaskStatus.DONE);

        long pendingTasks = taskRepository
                .countByStatus(TaskStatus.TODO);

        long overdueTasks = taskRepository
                .countByDueDateBefore(LocalDate.now());

        long myTasks = taskRepository
                .countByAssignedToId(currentUser.getId());

        return new DashboardResponse(
                totalTasks,
                completedTasks,
                pendingTasks,
                overdueTasks,
                myTasks
        );
    }
}