package com.taskmanager.backend.service;

import com.taskmanager.backend.entity.Role;
import com.taskmanager.backend.entity.User;
import com.taskmanager.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AdminInitializer
        implements CommandLineRunner {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args)
            throws Exception {

        String adminEmail =
                "admin@gmail.com";

        boolean adminExists =
                userRepository
                        .findByEmail(adminEmail)
                        .isPresent();

        if (!adminExists) {

            User admin = new User();

            admin.setName("Admin");

            admin.setEmail(adminEmail);

            admin.setPassword(
                    passwordEncoder.encode("admin123")
            );

            admin.setRole(Role.ADMIN);

            userRepository.save(admin);

            System.out.println(
                    "Admin User Created Successfully"
            );
        }
    }
}