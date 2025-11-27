import React from "react";
import "./Java.css";

export default function Java() {
  return (
    <div className="java-container">

      <div className="java-header">
        <h1>Java Full Stack Course</h1>
        <p>Master Core Java, OOP, JDBC, Spring Boot, Hibernate and Build Real Projects.</p>
      </div>

      <div className="java-section">
        <h2>About the Course</h2>
        <p>
          This Java course is designed for beginners to advanced learners. You will learn 
          Java fundamentals, OOP concepts, exception handling, collections, multithreading, 
          and then move to advanced Java including JDBC, Spring Boot, and REST APIs.
        </p>
      </div>

      <div className="java-section">
        <h2>What You Will Learn</h2>
        <ul>
          <li>Core Java & OOP Concepts</li>
          <li>Exception Handling & Collections Framework</li>
          <li>Multithreading</li>
          <li>JDBC & Database Connectivity</li>
          <li>Spring Boot & REST API Development</li>
          <li>Mini Projects + Full Stack Project</li>
        </ul>
      </div>

      <div className="java-section">
        <h2>Course Syllabus</h2>
        <ol>
          <li>Introduction to Java & JDK Setup</li>
          <li>Variables, Data Types & Operators</li>
          <li>Conditional Statements & Loops</li>
          <li>Object-Oriented Programming</li>
          <li>Constructors & Inheritance</li>
          <li>Interfaces & Polymorphism</li>
          <li>Exception Handling</li>
          <li>Collection Framework</li>
          <li>File Handling</li>
          <li>JDBC</li>
          <li>Spring Boot & REST APIs</li>
        </ol>
      </div>

      <div className="java-section project-section">
        <h2>My Java Projects</h2>

        <div className="project-card">
          <h3>Student Management System</h3>
          <p>
            A CRUD project made using <strong>Core Java + OOP + File Handling</strong>.
          </p>
        </div>

        <div className="project-card">
          <h3>Banking Application</h3>
          <p>
            Features: Create account, withdraw, deposit, transaction history using 
            <strong>Collections & OOP</strong>.
          </p>
        </div>

        <div className="project-card">
          <h3>Full Stack Web App (Spring Boot)</h3>
          <p>
            A complete full stack project using <strong>Spring Boot, MySQL & React</strong>.
          </p>
        </div>

        <div className="project-card custom">
          <h3>Your Project Title</h3>
          <p>Your custom project description goes here...</p>
        </div>
      </div>
    </div>
  );
}
