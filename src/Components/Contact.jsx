import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="contact-page">
      <Container>
        <h1 className="text-center mb-5" data-aos="fade-down">
          Contact Us
        </h1>

        <Row>
          
          <Col md={5} data-aos="fade-right">
            <div className="contact-info-card">
              <h3>Get in Touch</h3>
              <p>
                We’re here to help! Reach out to us for any course-related
                doubts, admissions, or enquiries.
              </p>

              <h5>📍 Address</h5>
              <p>123 IT Training Center, Pune, Maharashtra</p>

              <h5>📞 Phone</h5>
              <p>+91 98765 43210</p>

              <h5>📧 Email</h5>
              <p>support@itclasses.com</p>
            </div>
          </Col>

          
          <Col md={7} data-aos="fade-left">
            <div className="contact-form-card">
              <h3>Send Us a Message</h3>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Write your message..."
                  />
                </Form.Group>

                <Button className="w-100" variant="primary">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
