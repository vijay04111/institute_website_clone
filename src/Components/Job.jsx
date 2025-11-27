import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Jobs.css";

export default function Jobs() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const jobs = [
    {
      title: "Java Full Stack Developer",
      type: "Full Time",
      location: "Pune",
      desc: "Looking for strong Java + Spring Boot developer with hands-on project experience.",
    },
    {
      title: "Python Developer",
      type: "Full Time",
      location: "Mumbai",
      desc: "Experience in Django/Flask and APIs. Good knowledge of databases.",
    },
    {
      title: "Cloud AWS Engineer",
      type: "Full Time",
      location: "Hyderabad",
      desc: "Must know EC2, S3, IAM, Lambda. Certification preferred.",
    },
    {
      title: "Cyber Security Analyst",
      type: "Full Time",
      location: "Bangalore",
      desc: "Knowledge of ethical hacking, network security, tools & monitoring.",
    },
    {
      title: "Front-End Developer (React)",
      type: "Full Time",
      location: "Remote",
      desc: "Strong in React, Bootstrap, Hooks & API integration.",
    },
  ];

  return (
    <div className="jobs-page">
      <Container>
        <h1 className="text-center mb-5" data-aos="fade-down">
          Latest Job Openings
        </h1>

        <Row>
          {jobs.map((job, i) => (
            <Col md={4} key={i} data-aos="fade-up">
              <Card className="job-card">
                <Card.Body>
                  <h3>{job.title}</h3>
                  <span className="job-type">{job.type}</span>
                  <p className="job-location">📍 {job.location}</p>
                  <p className="job-desc">{job.desc}</p>
                  <Button className="apply-btn">Apply Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
