import React from "react";
import "./CyberSecurity.css";

function CyberSecurity() {
  return (
    <div className="cyber-container">

      <div className="cyber-header">
        <h1>🛡 Cyber Security Course</h1>
        <p>Learn ethical hacking, threat analysis, and cyber defense systems.</p>
      </div>

     
      <section className="cyber-section">
        <h2>📘 What You Will Learn</h2>
        <ul>
          <li>Fundamentals of Cyber Security</li>
          <li>Ethical Hacking Techniques</li>
          <li>Network Security & Firewalls</li>
          <li>Malware Analysis & Prevention</li>
          <li>Penetration Testing (Pentesting)</li>
          <li>Web Application Security</li>
          <li>Cryptography & Data Protection</li>
          <li>Digital Forensics</li>
        </ul>
      </section>

    
      <section className="cyber-section">
        <h2>🧩 Hands-On Projects</h2>

        <div className="cyber-project-grid">
          <div className="cyber-project-card">
            <h3>✔ Vulnerability Scanner</h3>
            <p>Scan networks for vulnerable ports & services.</p>
          </div>

          <div className="cyber-project-card">
            <h3>✔ Password Cracking Lab</h3>
            <p>Brute force, dictionary attacks using tools.</p>
          </div>

          <div className="cyber-project-card">
            <h3>✔ Secure Login System</h3>
            <p>JWT, hashing, authentication security.</p>
          </div>

          <div className="cyber-project-card">
            <h3>✔ Penetration Testing Report</h3>
            <p>Analyze and document system vulnerabilities.</p>
          </div>
        </div>
      </section>

    
      <section className="cyber-section">
        <h2>💼 Career Opportunities</h2>
        <ul>
          <li>Cyber Security Analyst</li>
          <li>Ethical Hacker</li>
          <li>Penetration Tester</li>
          <li>Security Consultant</li>
          <li>Network Security Engineer</li>
        </ul>

        <h2>📅 Course Duration</h2>
        <p className="cyber-duration">3 Months – Fully Practical Training</p>
      </section>

    </div>
  );
}

export default CyberSecurity;
