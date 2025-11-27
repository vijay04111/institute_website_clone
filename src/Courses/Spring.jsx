import React from "react";
import "./Spring.css";

export default function Spring() {
  return (
    <div className="spring-container">

      <section className="spring-hero">
        <h1>Spring Framework & Spring Boot</h1>
        <p>Build powerful backend applications with Java, Spring Boot, REST APIs & Microservices.</p>
      </section>

      <section className="spring-section">
        <h2>🔰 About the Course</h2>
        <p>
          This Spring course focuses on real-time backend development using Spring Boot,
          REST API creation, database integration, security, and microservices.
          Perfect for backend developers & Java learners.
        </p>
      </section>

      <section className="highlight-grid">
        <div className="highlight-card">
          <h3>⚙ Spring Core</h3>
          <p>IOC, DI, Beans, ApplicationContext, XML vs Annotation config.</p>
        </div>
        <div className="highlight-card">
          <h3>🚀 Spring Boot</h3>
          <p>Auto-config, Starter dependencies, Embedded Tomcat, Quick APIs.</p>
        </div>
        <div className="highlight-card">
          <h3>🛢 Database</h3>
          <p>JPA, Hibernate, CRUD Operations, MySQL/PostgreSQL.</p>
        </div>
        <div className="highlight-card">
          <h3>🔐 Security</h3>
          <p>Spring Security, JWT Authentication, Role-based access.</p>
        </div>
      </section>

      <section className="spring-section">
        <h2>📘 Course Syllabus</h2>
        <ul className="syllabus-list">
          <li>Introduction to Spring Framework</li>
          <li>Spring Core, Beans, Autowiring</li>
          <li>Spring Boot Architecture</li>
          <li>Spring Boot Annotations</li>
          <li>REST API with Spring Boot</li>
          <li>JPA + Hibernate Integration</li>
          <li>Connecting to MySQL Database</li>
          <li>Spring Security & JWT Authentication</li>
          <li>Microservices Basics (Eureka, API Gateway)</li>
        </ul>
      </section>

  
      <section className="spring-section projects">
        <h2>💼 My Spring Projects</h2>

        <div className="project-card">
          <h3>Student API Management</h3>
          <p>CRUD REST API using <strong>Spring Boot + JPA + MySQL</strong>.</p>
        </div>

        <div className="project-card">
          <h3>Employee Payroll System</h3>
          <p>REST backend with <strong>Spring Boot + Security + JWT</strong>.</p>
        </div>

        <div className="project-card">
          <h3>E-Commerce Backend</h3>
          <p>Products, Cart, Orders API using <strong>Spring Boot Microservices</strong>.</p>
        </div>

       
        <div className="project-card custom">
          <h3>Your Spring Project</h3>
          <p>Add your custom project details here!</p>
        </div>
      </section>

    </div>
  );
}
