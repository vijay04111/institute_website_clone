import React from "react";
import "./Python.css";

export default function Python() {
  return (
    <div className="py-container">

      <div className="py-header">
        <h1>Python Full Course</h1>
        <p>Learn Python from beginner to advanced and build real-world projects.</p>
      </div>

      <div className="py-section">
        <h2>About the Course</h2>
        <p>
          This Python course is designed for absolute beginners as well as intermediate learners.
          You will learn programming fundamentals, data structures, OOP, file handling, 
          database connectivity, Flask/Django frameworks, and real project development.
        </p>
      </div>

      <div className="py-section">
        <h2>What You Will Learn</h2>
        <ul>
          <li>Python Basics & Syntax</li>
          <li>Data Types, Loops & Conditions</li>
          <li>Functions & Modules</li>
          <li>Object-Oriented Programming (OOP)</li>
          <li>File Handling</li>
          <li>Exception Handling</li>
          <li>Database Connectivity (MySQL)</li>
          <li>Flask / Django Web Development</li>
          <li>Mini Projects + Full Stack Project</li>
        </ul>
      </div>

      <div className="py-section">
        <h2>Course Syllabus</h2>
        <ol>
          <li>Introduction to Python & Installation</li>
          <li>Variables, Data Types, Operators</li>
          <li>Loops & Conditional Statements</li>
          <li>Functions, Modules & Packages</li>
          <li>Lists, Tuples, Dictionaries, Sets</li>
          <li>OOP Concepts in Python</li>
          <li>File Handling</li>
          <li>Error & Exception Handling</li>
          <li>MySQL Database + Python Connector</li>
          <li>Flask / Django Framework Basics</li>
        </ol>
      </div>

      <div className="py-section project-section">
        <h2>My Python Projects</h2>

        <div className="project-card">
          <h3>Library Management System</h3>
          <p>
            A full CRUD Python project using <strong>Lists, File Handling & Functions</strong>.
          </p>
        </div>

        <div className="project-card">
          <h3>Weather Information App</h3>
          <p>
            Built using <strong>API Integration + Python requests module</strong>.
          </p>
        </div>

        <div className="project-card">
          <h3>Flask Blog Website</h3>
          <p>
            A complete web app using <strong>Flask + HTML + MySQL</strong>.
          </p>
        </div>

        <div className="project-card custom">
          <h3>Your Python Project</h3>
          <p>Write your project details here…</p>
        </div>
      </div>
    </div>
  );
}
