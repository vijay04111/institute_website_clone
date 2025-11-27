import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Testimonials.css";
import ch from '../assets/chotya.jpg'
import kk from '../assets/kiran.jpg'
import yg from '../assets/yogesh.jpg'
import sh from '../assets/shubham.jpg'
import my from '../assets/mayur.jpg'
import aa from '../assets/abhi.jpg'
import sp from '../assets/potdar.jpg'

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const reviews = [
    {
      name: "Vijay Khot",
      course: "MERN Stack Developer",
      text: "The training was excellent! Real-time projects helped me get placed in TCS.",
      img: ch
    },
    {
      name: "Kiran Khot",
      course: "Python Full Stack",
      text: "Best IT classes. Trainers are very supportive and explain concepts clearly.",
      img: kk
    },
    {
      name: "Yogesh Kole",
      course: "AWS Cloud",
      text: "Hands-on labs were very helpful. I cleared my AWS certification easily!",
      img: yg
    },
    {
      name: "Shubham Mane",
      course: "Cyber Security",
      text: "Great teaching style. Learned everything from basics to advanced topics.",
      img: sh
    },
    {
      name: "Mayur Patil",
      course: "Java Full Stack",
      text: "The training was excellent! Real-time projects helped me get placed in TCS.",
      img: my
    },
    {
      name: "Abhi Aarde",
      course: "Python Full Stack",
      text: "Best IT classes. Trainers are very supportive and explain concepts clearly.",
      img: aa
    },
    {
      name: "Shubham Potdar",
      course: "AWS Cloud",
      text: "Hands-on labs were very helpful. I cleared my AWS certification easily!",
      img: sp
    },
    {
      name: "Priya Shah",
      course: "Cyber Security",
      text: "Great teaching style. Learned everything from basics to advanced topics.",
      img: "https://i.pravatar.cc/150?img=14"
    }
  ];

  return (
    <div className="testimonial-page">
      <Container>
        <h1 className="text-center mb-5" data-aos="fade-down">
          What Our Students Say
        </h1>

      <Row>
  {reviews.map((r, i) => (
    <Col md={3} sm={6} key={i} data-aos="zoom-in" className="mb-4">
      <Card className="testimonial-card">
        <div className="image-container">
          <Card.Img variant="top" src={r.img} className="testimonial-img" />
        </div>

        <Card.Body>
          <h5>{r.name}</h5>
          <p className="course-name">{r.course}</p>
          <p className="review-text">"{r.text}"</p>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>


      </Container>
    </div>
  );
}
