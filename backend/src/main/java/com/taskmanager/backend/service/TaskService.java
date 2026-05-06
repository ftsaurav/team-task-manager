package com.taskmanager.backend.service;

import com.taskmanager.backend.dto.CreateTaskRequest;
import com.taskmanager.backend.dto.UpdateTaskStatusRequest;
import com.taskmanager.backend.entity.*;
import com.taskmanager.backend.repository.ProjectRepository;
import com.taskmanager.backend.repository.TaskRepository;
import com.taskmanager.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;

    private final ProjectRepository projectRepository;

    private final UserRepository userRepository;

    public Task createTask(
            CreateTaskRequest request,
            User currentUser
    ) {

        if (request.getDueDate().isBefore(LocalDate.now())) {

            throw new RuntimeException(
                    "Due Date Cannot Be In Past"
            );
        }

        if (currentUser.getRole() != Role.ADMIN) {
            throw new RuntimeException(
                    "Only Admin Can Create Tasks"
            );
        }

        Project project = projectRepository.findById(
                request.getProjectId()
        ).orElseThrow(() ->
                new RuntimeException("Project Not Found")
        );

        User assignedUser = userRepository.findById(
                request.getAssignedToUserId()
        ).orElseThrow(() ->
                new RuntimeException("Assigned User Not Found")
        );

        Task task = new Task();

        task.setTitle(request.getTitle());

        task.setDescription(request.getDescription());

        task.setPriority(request.getPriority());

        task.setDueDate(request.getDueDate());

        task.setStatus(TaskStatus.TODO);

        task.setCreatedAt(LocalDateTime.now());

        task.setProject(project);

        task.setAssignedTo(assignedUser);

        task.setCreatedBy(currentUser);

        return taskRepository.save(task);
    }

    public List<Task> getAllTasks() {

        return taskRepository.findAll();
    }

    public List<Task> getMyTasks(User user) {

        return taskRepository.findByAssignedToId(
                user.getId()
        );
    }

    public Task updateTaskStatus(
            Long taskId,
            UpdateTaskStatusRequest request,
            User currentUser
    ) {

        Task task = taskRepository.findById(taskId)
                .orElseThrow(() ->
                        new RuntimeException("Task Not Found")
                );

        if (!task.getAssignedTo()
                .getId()
                .equals(currentUser.getId())) {

            throw new RuntimeException(
                    "You Can Only Update Your Assigned Tasks"
            );
        }

        task.setStatus(request.getStatus());

        return taskRepository.save(task);
    }

    public List<Task> getOverdueTasks() {

        return taskRepository.findByDueDateBefore(
                LocalDate.now()
        );
    }
}