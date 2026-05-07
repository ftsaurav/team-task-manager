TEAM TASK MANAGER - FULL STACK APPLICATION
==========================================

Project Overview
----------------
Team Task Manager is a full-stack web application built for managing projects, teams, and tasks with role-based access control.

The application allows Admin users to create and manage projects, assign tasks to team members, and track task progress. Member users can view and update tasks assigned to them.

The project is built using React for the frontend, Spring Boot for the backend, and MySQL as the database.

--------------------------------------------------

FEATURES
========

1. Authentication & Authorization
---------------------------------
- User Signup
- User Login
- JWT Authentication
- Secure API access using JWT token
- Role-Based Access Control (RBAC)

Roles:
- ADMIN
- MEMBER

--------------------------------------------------

2. Admin Features
-----------------
Admin users can:

- Create Projects
- View All Projects
- Create Tasks
- Assign Tasks to Members
- Update Task Status
- Manage Team Members
- View Dashboard Statistics

--------------------------------------------------

3. Member Features
------------------
Member users can:

- Login securely
- View assigned tasks
- Update task status
- Track task progress

Members cannot:
- Create Projects
- Assign Tasks
- Access Admin-only APIs

--------------------------------------------------

4. Dashboard
-------------
Dashboard provides:

- Total Projects
- Total Tasks
- Completed Tasks
- Pending Tasks
- Overdue Tasks

--------------------------------------------------

TECH STACK
===========

Frontend
---------
- React
- Vite
- React Router DOM
- Axios
- Plain CSS
- React Toastify

Backend
--------
- Spring Boot
- Spring Security
- JWT Authentication
- Spring Data JPA
- Hibernate

Database
--------
- MySQL

Deployment
----------
- Railway

--------------------------------------------------

PROJECT STRUCTURE
=================

Root Folder
------------
team-task-manager/

Frontend
---------
frontend/

Backend
--------
backend/

--------------------------------------------------

BACKEND FEATURES
================

- REST APIs
- JWT Token Validation
- Password Encryption
- Role-Based Authorization
- MySQL Database Integration
- CORS Configuration
- Exception Handling

--------------------------------------------------

FRONTEND FEATURES
=================

- Responsive UI
- Authentication Pages
- Dashboard UI
- Project Management Pages
- Task Management Pages
- Protected Routes
- Token-based Authentication

--------------------------------------------------

DEFAULT ADMIN LOGIN
===================

Admin Email:
-------------
admin@gmail.com

Admin Password:
----------------
admin123

--------------------------------------------------

API SECURITY
=============

- JWT Authentication
- Protected APIs
- Stateless Session Management
- Spring Security Integration

--------------------------------------------------

DEPLOYMENT
===========

Frontend:
----------
Deployed on Railway

Backend:
---------
Deployed on Railway

Database:
----------
Railway MySQL

--------------------------------------------------

HOW TO RUN LOCALLY
==================

Frontend
---------
1. Open frontend folder
2. Install dependencies

   npm install

3. Run application

   npm run dev

--------------------------------------------------

Backend
--------
1. Open backend folder
2. Configure MySQL database
3. Run Spring Boot application

--------------------------------------------------

FUTURE IMPROVEMENTS
===================

- Email Notifications
- File Attachments
- Task Comments
- Team Chat
- Activity Logs
- Dark Mode
- Calendar Integration

--------------------------------------------------

AUTHOR
=======
Saurav Kumar
ft.saurav17@gmail.com
7070246025

--------------------------------------------------
