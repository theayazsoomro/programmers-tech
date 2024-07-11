import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../Style/Home.css';

const Home = () => {
  return (
    <Container fluid className="home-banner d-flex align-items-center">
      <Row className="w-100">
        <Col md={6} className="d-flex flex-column justify-content-center align-items-start">
          <h1>Change is the end result of all true <span className="text-success">Learning</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique at libero a gravida.</p>
          <div className="button-group">
            <Button variant="success" className="me-3">Book Online</Button>
            <Button variant="outline-dark">Watch Video</Button>
          </div>
        </Col>
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <img src="https://kcballet.org/wp-content/uploads/2019/11/skyler-taylor.jpg" alt="Teacher" className="img-fluid" width={400} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
