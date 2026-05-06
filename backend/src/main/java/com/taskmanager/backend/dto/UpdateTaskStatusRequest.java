package com.taskmanager.backend.dto;

import com.taskmanager.backend.entity.TaskStatus;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateTaskStatusRequest {

    private TaskStatus status;
}