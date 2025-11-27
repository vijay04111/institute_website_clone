import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">

    
      <section className="about-header fade-in">
        <h1>About Our IT Institute</h1>
        <p>
          Learn modern IT skills with expert trainers, real projects, and
          complete placement support.
        </p>
      </section>

      
      <section className="about-section slide-up">
        <h2>Who We Are</h2>
        <p>
          We are one of the leading IT training institutes, helping students
          build successful careers in Java, Python, Cloud, Cyber Security, 
          Data Analytics, and many more fields.
        </p>
      </section>

     
      <section className="about-section slide-up">
        <h2>Our Mission</h2>
        <p>
          To provide high-quality, practical IT training that prepares students
          for real-world jobs in top companies.
        </p>
      </section>

      
      <section className="stats-section fade-in">
        <div className="stat-card">
          <h3>10,000+</h3>
          <p>Students Trained</p>
        </div>

        <div className="stat-card">
          <h3>95%</h3>
          <p>Placement Rate</p>
        </div>

        <div className="stat-card">
          <h3>35+</h3>
          <p>Expert Trainers</p>
        </div>
      </section>

     
      <footer className="about-footer">
        © {new Date().getFullYear()} IT Classes — All Rights Reserved
      </footer>
    </div>
  );
}
