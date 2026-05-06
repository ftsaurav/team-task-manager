package com.taskmanager.backend.controller;

import com.taskmanager.backend.dto.CreateTaskRequest;
import com.taskmanager.backend.dto.UpdateTaskStatusRequest;
import com.taskmanager.backend.entity.Task;
import com.taskmanager.backend.entity.User;
import com.taskmanager.backend.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.
        AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@RequiredArgsConstructor
public class TaskController {

    private final TaskService taskService;

    @PostMapping
    public Task createTask(
            @Valid @RequestBody CreateTaskRequest request,
            @AuthenticationPrincipal User user
    ) {

        return taskService.createTask(request, user);
    }

    @GetMapping
    public List<Task> getAllTasks() {

        return taskService.getAllTasks();
    }

    @GetMapping("/my")
    public List<Task> getMyTasks(
            @AuthenticationPrincipal User user
    ) {

        return taskService.getMyTasks(user);
    }

    @PatchMapping("/{taskId}/status")
    public Task updateTaskStatus(
            @PathVariable Long taskId,
            @RequestBody UpdateTaskStatusRequest request,
            @AuthenticationPrincipal User user
    ) {

        return taskService.updateTaskStatus(
                taskId,
                request,
                user
        );
    }

    @GetMapping("/overdue")
    public List<Task> getOverdueTasks() {

        return taskService.getOverdueTasks();
    }
}