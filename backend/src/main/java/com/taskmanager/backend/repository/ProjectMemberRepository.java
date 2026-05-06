package com.taskmanager.backend.repository;

import com.taskmanager.backend.entity.ProjectMember;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectMemberRepository
        extends JpaRepository<ProjectMember, Long> {
    boolean existsByProjectIdAndUserId(
            Long projectId,
            Long userId
    );
}