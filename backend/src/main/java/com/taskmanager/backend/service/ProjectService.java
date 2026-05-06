package com.taskmanager.backend.service;

import com.taskmanager.backend.dto.AddMemberRequest;
import com.taskmanager.backend.dto.CreateProjectRequest;
import com.taskmanager.backend.entity.Project;
import com.taskmanager.backend.entity.ProjectMember;
import com.taskmanager.backend.entity.User;
import com.taskmanager.backend.repository.ProjectMemberRepository;
import com.taskmanager.backend.repository.ProjectRepository;
import com.taskmanager.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;

    private final ProjectMemberRepository projectMemberRepository;

    private final UserRepository userRepository;

    public Project createProject(
            CreateProjectRequest request,
            User currentUser
    ) {

        Project project = new Project();

        project.setName(request.getName());

        project.setDescription(request.getDescription());

        project.setCreatedAt(LocalDateTime.now());

        project.setCreatedBy(currentUser);

        return projectRepository.save(project);
    }

    public List<Project> getAllProjects() {

        return projectRepository.findAll();
    }

    public Project getProjectById(Long id) {

        return projectRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Project Not Found")
                );
    }

    public String addMember(
            Long projectId,
            AddMemberRequest request
    ) {

        Project project = projectRepository.findById(projectId)
                .orElseThrow(() ->
                        new RuntimeException("Project Not Found")
                );

        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() ->
                        new RuntimeException("User Not Found")
                );

        ProjectMember projectMember = new ProjectMember();

        projectMember.setProject(project);

        projectMember.setUser(user);

        boolean alreadyExists =
                projectMemberRepository
                        .existsByProjectIdAndUserId(
                                projectId,
                                user.getId()
                        );

        if (alreadyExists) {

            throw new RuntimeException(
                    "User Already Added To Project"
            );
        }

        projectMemberRepository.save(projectMember);

        return "Member Added Successfully";
    }
}