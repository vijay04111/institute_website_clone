import React, { useEffect } from "react";
import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import pic from '../assets/image1.jpg'
import pic1 from '../assets/image2.jpg'
import pic2 from '../assets/image3.jpg'

export default function Home() {

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="home">

   
      <Carousel fade className="hero-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={pic}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Start Your IT Career Today</h1>
            <p>Learn skills that make you job ready</p>
            <Button className="carousel-btn">Explore Courses</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={pic1}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1>Expert Trainers</h1>
            <p>Learn from Industry Professionals</p>
            <Button className="carousel-btn">Join Now</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={pic2}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1>Hands-On Live Projects</h1>
            <p>Build Real IT Experience</p>
            <Button className="carousel-btn">Start Learning</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6} data-aos="fade-right">
              <h1 className="hero-title">
                Master Modern <span>IT Skills</span> With Expert Training
              </h1>
              <p className="hero-subtext">
                Become job-ready with our Industry-Certified IT Courses,
                Real-Time Projects & Placement Support.
              </p>
              <Button className="hero-btn">Explore Courses</Button>
            </Col>

            <Col md={6} data-aos="fade-left" className="text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2886/2886665.png"
                className="hero-img floating"
                alt="IT Learning"
              />
            </Col>
          </Row>
        </Container>
      </section>

    
      <section className="stats-section">
        <Container>
          <Row>
            {[
              { n: "10,000+", t: "Students Trained" },
              { n: "35+", t: "Expert Trainers" },
              { n: "1200+", t: "Placement Partners" },
              { n: "95%", t: "Placement Rate" },
            ].map((s, i) => (
              <Col md={3} key={i} data-aos="zoom-in" className="text-center">
                <h2 className="stat-number">{s.n}</h2>
                <p className="stat-text">{s.t}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

     
      <section className="courses-section">
        <Container data-aos="zoom-in">
          <h2 className="section-title">Popular Courses</h2>

          <Row className="mt-4">
            {[
              { t: "Java Full Stack", desc: "Core Java | Spring Boot | Hibernate" },
              { t: "Python Full Stack", desc: "Python | Django | APIs" },
              { t: "Cloud Computing AWS", desc: "EC2 | S3 | Lambda | IAM" },
              { t: "Cyber Security", desc: "Ethical Hacking | Networking" },
              { t: "Angular Development", desc: "Frontend SPA Development" },
              { t: "Power BI", desc: "Data Cleaning | Dashboarding" },
            ].map((c, i) => (
              <Col md={4} key={i} className="mb-4">
                <Card className="course-card" data-aos="fade-up">
                  <Card.Body>
                    <h4>{c.t}</h4>
                    <p>{c.desc}</p>
                    <Button className="course-btn">View Details</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      
      <section className="why-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6} data-aos="fade-right">
              <img
                className="why-img"
                src="https://cdn-icons-png.flaticon.com/512/906/906334.png"
                alt="IT"
              />
            </Col>

            <Col md={6} data-aos="fade-left">
              <h2 className="section-title">Why Choose Us?</h2>
              <ul className="why-list">
                <li>✔ Industry-Expert Trainers</li>
                <li>✔ Hands-On Live Projects</li>
                <li>✔ 100% Placement Support</li>
                <li>✔ Updated Course Curriculum</li>
              </ul>
              <Button className="why-btn">Learn More</Button>
            </Col>
          </Row>
        </Container>
      </section>

      
      <footer className="footer text-center py-3">
        © {new Date().getFullYear()} IT Classes — All Rights Reserved
      </footer>
    </div>
  );
}
