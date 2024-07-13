import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TrustedBrands = () => {
  return (
    <Container className="trusted-brands text-center py-5 my-5 rounded">
      <h2 className="mb-4">Trusted by Leading Brands</h2>
      <Row className="justify-content-center align-items-center">
        <Col xs={6} sm={4} md={2} className="my-3">
          <i className="fab fa-microsoft fa-3x"></i>
        </Col>
        <Col xs={6} sm={4} md={2} className="my-3">
          <i className="fab fa-google fa-3x"></i>
        </Col>
        <Col xs={6} sm={4} md={2} className="my-3">
          <i className="fab fa-apple fa-3x"></i>
        </Col>
        <Col xs={6} sm={4} md={2} className="my-3">
          <i className="fab fa-amazon fa-3x"></i>
        </Col>
        <Col xs={6} sm={4} md={2} className="my-3">
          <i className="fab fa-facebook fa-3x"></i>
        </Col>
      </Row>
    </Container>
  );
};

export default TrustedBrands;
