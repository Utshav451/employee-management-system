# Employee Management System - Backend

A Spring Boot REST API backend for Employee Management System.

## Features

- Create Employee
- Update Employee
- Delete Employee
- Get Employee Details
- RESTful APIs
- Database Integration

## Tech Stack

- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- MySQL
- Maven

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/employees | Get all employees |
| GET | /api/employees/{id} | Get employee by ID |
| POST | /api/employees | Create employee |
| PUT | /api/employees/{id} | Update employee |
| DELETE | /api/employees/{id} | Delete employee |

## Installation

Clone the repository:

```bash
git clone clone https://github.com/Utshav451/employee-management-system.git
```

Navigate to backend folder:

```bash
cd EMS-BACKEND
```

## Configure Database

Update `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/your_Database_name
spring.datasource.username=your_username
spring.datasource.password=your_password
```

## Run Application

Using Maven:

```bash
mvn spring-boot:run
```

Or run directly from your IDE.

The backend server will start at:

```bash
http://localhost:8080
```

## Future Improvements

- JWT Authentication
- Role Management
- Swagger Documentation
- Docker Deployment

## Author

Utshav Nath