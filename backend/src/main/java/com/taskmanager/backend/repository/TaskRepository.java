package com.taskmanager.backend.repository;

import com.taskmanager.backend.entity.Task;
import com.taskmanager.backend.entity.TaskStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface TaskRepository
        extends JpaRepository<Task, Long> {

    List<Task> findByAssignedToId(Long userId);

    List<Task> findByStatus(TaskStatus status);

    List<Task> findByDueDateBefore(LocalDate date);

    long countByStatus(TaskStatus status);

    long countByDueDateBefore(LocalDate date);

    long countByAssignedToId(Long userId);
}