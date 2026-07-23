# 📘 Week 2 — Spring Core & Maven, Spring Data JPA with Spring Boot & Hibernate

## 📌 Overview

This week covers the **Spring Framework ecosystem** including Spring Core concepts with Maven, **Spring Data JPA** with Spring Boot, and **Hibernate ORM**. The exercises include hands-on projects for Library Management and ORM learning.

## 📂 Folder Structure

```
Week 2 Spring Core and Maven, Spring Data JPA with SpringBoot, Hibernate/
├── pom.xml                        → Root Maven configuration (Spring Core exercises)
├── src/                           → Spring Core & Maven source code
│   └── main/
├── LibraryManagementSpringBoot/   → Library Management System using Spring Boot & JPA
│   ├── pom.xml
│   ├── README.md
│   └── src/
└── orm-learn/                     → ORM & Hibernate learning project
    ├── pom.xml
    └── src/
```

## 📝 Topics Covered

| #  | Module / Project                    | Description                                           |
|----|-------------------------------------|-------------------------------------------------------|
| 1  | **Spring Core & Maven**             | Dependency Injection, Bean lifecycle, Maven build tool |
| 2  | **LibraryManagementSpringBoot**      | Full CRUD Library Management System with Spring Boot & Spring Data JPA |
| 3  | **orm-learn**                        | Hibernate ORM concepts — Entity mapping, Relationships, JPQL |

## 🛠️ Tech Stack

- **Language:** Java
- **Frameworks:** Spring Core, Spring Boot, Spring Data JPA, Hibernate
- **Build Tool:** Maven
- **Database:** H2 / MySQL (configurable)
- **Concepts:** Dependency Injection, IoC Container, ORM, JPA Repositories, Entity Relationships

## 🚀 How to Run

1. Ensure **Java 17+** and **Maven** are installed.
2. Navigate to the desired project directory.
3. Build and run:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```
4. For the root Spring Core project:
   ```bash
   mvn clean compile exec:java
   ```

## 📎 Part of

> **Cognizant Digital Nurture 4.0 — Deep Skilling Program**  
> Java Full Stack Engineering (FSE) Masterclass
