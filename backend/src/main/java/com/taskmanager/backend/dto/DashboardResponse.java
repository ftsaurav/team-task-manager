package com.taskmanager.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class DashboardResponse {

    private long totalTasks;

    private long completedTasks;

    private long pendingTasks;

    private long overdueTasks;

    private long myTasks;
}