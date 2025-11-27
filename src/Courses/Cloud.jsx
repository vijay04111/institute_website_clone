import React from "react";
import "./Cloud.css";

export default function CloudComputing() {
  return (
    <div className="cloud-container">

  
      <div className="cloud-header">
        <h1>Cloud Computing Course</h1>
        <p>Learn AWS, Azure, GCP, Virtualization, Containers & DevOps Tools.</p>
      </div>

   
      <div className="cloud-section">
        <h2>About the Course</h2>
        <p>
          This Cloud Computing course covers the core concepts of cloud services,
          virtualization, storage, networking, DevOps tools, and deployment models.
          You will learn practical skills across AWS, Microsoft Azure and Google Cloud Platform.
        </p>
      </div>

     
      <div className="cloud-section">
        <h2>What You Will Learn</h2>
        <ul>
          <li>AWS Cloud Fundamentals</li>
          <li>Azure & GCP Basics</li>
          <li>Virtual Machines & Containers</li>
          <li>Cloud Storage & Networking</li>
          <li>IAM Security & Monitoring</li>
          <li>Compute, Databases & Serverless Functions</li>
          <li>CI/CD, Docker, Kubernetes (Basics)</li>
          <li>Deploying Cloud Projects</li>
        </ul>
      </div>


      <div className="cloud-section">
        <h2>Course Syllabus</h2>
        <ol>
          <li>Introduction to Cloud Computing</li>
          <li>Types of Cloud Models (IaaS, PaaS, SaaS)</li>
          <li>Deployment Models (Public, Private, Hybrid)</li>
          <li>Virtualization & Containerization</li>
          <li>Amazon Web Services (AWS)</li>
          <li>Microsoft Azure</li>
          <li>Google Cloud Platform</li>
          <li>Cloud Networking & Storage</li>
          <li>Identity Access Management (IAM)</li>
          <li>Monitoring & Logging</li>
          <li>DevOps Tools: Docker, Kubernetes Basics</li>
        </ol>
      </div>

      <div className="cloud-section project-section">
        <h2>My Cloud Projects</h2>

        <div className="project-card">
          <h3>AWS EC2 Deployment</h3>
          <p>
            Deployed a web application using <strong>EC2, VPC, Security Groups & Load Balancer</strong>.
          </p>
        </div>

        <div className="project-card">
          <h3>Cloud Storage Backup System</h3>
          <p>
            Automated data backup using <strong>S3 Buckets + Lifecycle Rules</strong>.
          </p>
        </div>

        <div className="project-card">
          <h3>Docker Container App</h3>
          <p>
            Built and deployed a containerized app using <strong>Docker + DockerHub</strong>.
          </p>
        </div>

        <div className="project-card">
          <h3>Kubernetes Mini Cluster</h3>
          <p>
            Created a small cluster using <strong>Minikube & kubectl</strong>.
          </p>
        </div>

        
        <div className="project-card custom">
          <h3>Your Cloud Project</h3>
          <p>Add your cloud project details here…</p>
        </div>
      </div>

    </div>
  );
}
