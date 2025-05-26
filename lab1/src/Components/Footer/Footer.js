import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: orchidstore@example.com</p>
            <p>Phone: 0123 456 789</p>
          </Col>
          <Col md={4}>
            <h5>Payment</h5>
            <p>Visa, MasterCard, PayPal</p>
            <a href="#payment-info">More info</a>
          </Col>
          <Col md={4}>
            <h5>Social Network</h5>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a><br />
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a><br />
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;