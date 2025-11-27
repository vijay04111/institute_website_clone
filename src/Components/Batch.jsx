import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Batches.css";

export default function Batches() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const batches = [
    {
      name: "Java Full Stack",
      timing: "Mon–Fri | 8:00 AM – 10:00 AM",
      trainer: "Mr. Rahul Patil",
      seats: "30 Seats",
    },
    {
      name: "Python Programming",
      timing: "Mon–Fri | 10:30 AM – 12:00 PM",
      trainer: "Ms. Namrata Rao",
      seats: "25 Seats",
    },
    {
      name: "Web Development",
      timing: "Mon–Fri | 2:00 PM – 4:00 PM",
      trainer: "Mr. Ajay Singh",
      seats: "35 Seats",
    },
    {
      name: "Cloud Computing",
      timing: "Mon–Fri | 5:00 PM – 7:00 PM",
      trainer: "Mr. Sameer Desai",
      seats: "20 Seats",
    },
  ];

  return (
    <div className="batches-page">
      <Container>
        <h1 className="text-center mb-5" data-aos="fade-up">
          Our Running Batches
        </h1>

        <Row>
          {batches.map((b, i) => (
            <Col md={4} className="mb-4" key={i}>
              <Card className="batch-card" data-aos="zoom-in">
                <Card.Body>
                  <h3>{b.name}</h3>
                  <p><strong>Timing:</strong> {b.timing}</p>
                  <p><strong>Trainer:</strong> {b.trainer}</p>
                  <p><strong>Seats:</strong> {b.seats}</p>
                  <Button variant="primary" className="w-100">Join Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
