# 📘 Week 4 — Code Quality & SonarQube, Microservices with Spring Boot 3 & Spring Cloud

## 📌 Overview

This week covers two key areas: **Code Quality analysis using SonarQube** and building **Microservices architecture** using **Spring Boot 3** and **Spring Cloud**. The hands-on exercises include an Account microservice demonstrating modern cloud-native development patterns.

## 📂 Folder Structure

```
Week 4 Code quality and Sonarqube, Microservices with Spring Boot 3 and Spring Cloud/
└── account/
    ├── pom.xml          → Maven configuration with Spring Boot 3 & Cloud dependencies
    ├── mvnw / mvnw.cmd  → Maven wrapper scripts
    └── src/
        ├── main/
        │   ├── java/    → Microservice Controllers, Services, DTOs, Config
        │   └── resources/  → application.properties / application.yml
        └── test/        → Unit & Integration tests
```

## 📝 Topics Covered

| #  | Topic                              | Description                                            |
|----|------------------------------------|--------------------------------------------------------|
| 1  | **Code Quality**                   | Static code analysis, code smells, technical debt      |
| 2  | **SonarQube**                      | Code quality gates, coverage reports, vulnerability scan |
| 3  | **Microservices Architecture**     | Service decomposition, independent deployment          |
| 4  | **Spring Boot 3**                  | Latest Spring Boot features and auto-configuration     |
| 5  | **Spring Cloud**                   | Service discovery, configuration management            |
| 6  | **Account Microservice**           | RESTful account management service                     |
| 7  | **API Gateway & Communication**    | Inter-service communication patterns                   |

## 🛠️ Tech Stack

- **Language:** Java
- **Framework:** Spring Boot 3, Spring Cloud
- **Code Quality:** SonarQube
- **Build Tool:** Maven
- **Concepts:** Microservices, Service Discovery, API Gateway, Circuit Breaker, Code Quality Metrics

## 🚀 How to Run

1. Navigate to the `account` directory.
2. Build and run:
   ```bash
   ./mvnw clean install
   ./mvnw spring-boot:run
   ```
3. For SonarQube analysis:
   ```bash
   mvn sonar:sonar -Dsonar.host.url=http://localhost:9000
   ```
4. The microservice will be available at `http://localhost:8080`.

## 📎 Part of

> **Cognizant Digital Nurture 4.0 — Deep Skilling Program**  
> Java Full Stack Engineering (FSE) Masterclass
