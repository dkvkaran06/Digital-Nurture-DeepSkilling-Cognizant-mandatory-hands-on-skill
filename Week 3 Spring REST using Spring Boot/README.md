# 📘 Week 3 — Spring REST using Spring Boot

## 📌 Overview

This week focuses on building **RESTful APIs** using **Spring Boot**. The exercises cover REST controller creation, request/response handling, CRUD operations, exception handling, validation, and API best practices.

## 📂 Folder Structure

```
Week 3 Spring REST using Spring Boot/
└── spring-learn/
    ├── pom.xml          → Maven configuration with Spring Boot & Web dependencies
    ├── mvnw / mvnw.cmd  → Maven wrapper scripts
    └── src/
        ├── main/
        │   ├── java/    → REST Controllers, Services, Repositories, Models
        │   └── resources/  → application.properties / application.yml
        └── test/        → Unit & Integration tests
```

## 📝 Topics Covered

| #  | Topic                              | Description                                          |
|----|------------------------------------|------------------------------------------------------|
| 1  | **REST Controllers**               | Creating RESTful endpoints with `@RestController`    |
| 2  | **HTTP Methods**                   | GET, POST, PUT, DELETE mapping                       |
| 3  | **Request/Response Handling**      | `@RequestBody`, `@PathVariable`, `@RequestParam`     |
| 4  | **CRUD Operations**                | Complete Create, Read, Update, Delete operations     |
| 5  | **Exception Handling**             | Global exception handling with `@ControllerAdvice`   |
| 6  | **Validation**                     | Input validation using Bean Validation annotations   |
| 7  | **Data Persistence**               | Integration with Spring Data JPA                     |

## 🛠️ Tech Stack

- **Language:** Java
- **Framework:** Spring Boot, Spring Web, Spring Data JPA
- **Build Tool:** Maven
- **API Testing:** Postman / cURL
- **Concepts:** REST Architecture, HTTP Methods, Status Codes, JSON Serialization

## 🚀 How to Run

1. Navigate to the `spring-learn` directory.
2. Build and run:
   ```bash
   ./mvnw clean install
   ./mvnw spring-boot:run
   ```
3. The API will be available at `http://localhost:8080`.
4. Test endpoints using **Postman** or **cURL**.

## 📎 Part of

> **Cognizant Digital Nurture 4.0 — Deep Skilling Program**  
> Java Full Stack Engineering (FSE) Masterclass
