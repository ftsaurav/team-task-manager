package com.taskmanager.backend.controller;

import com.taskmanager.backend.dto.AddMemberRequest;
import com.taskmanager.backend.dto.CreateProjectRequest;
import com.taskmanager.backend.entity.Project;
import com.taskmanager.backend.entity.User;
import com.taskmanager.backend.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.
        AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectService projectService;

    @PostMapping
    public Project createProject(
            @Valid @RequestBody CreateProjectRequest request,
            @AuthenticationPrincipal User user
    ) {

        return projectService.createProject(request, user);
    }

    @GetMapping
    public List<Project> getAllProjects() {

        return projectService.getAllProjects();
    }

    @GetMapping("/{id}")
    public Project getProjectById(
            @PathVariable Long id
    ) {

        return projectService.getProjectById(id);
    }

    @PostMapping("/{projectId}/members")
    public String addMember(
            @PathVariable Long projectId,
            @RequestBody AddMemberRequest request
    ) {

        return projectService.addMember(projectId, request);
    }
}