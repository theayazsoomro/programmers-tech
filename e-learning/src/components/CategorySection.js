import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPaintBrush,
  faDatabase,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CategorySection = () => {
  return (
    <Container fluid className="categorySection my-lg-5 my-md-3 bg-light">
      <Container className="py-5">
      <h2 className="text-center">Featured <span style={{color: '#188ef4'}}>Category</span></h2>
        <Row className="my-5">
          <Col md={4}>
            <Card className="text-center my-2">
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                <div className="circle">
                  <FontAwesomeIcon icon={faCode} size="2x" />
                </div>
                <Card.Title className="mt-3">Programming</Card.Title>
                <Card.Text>
                  Learn to code with our programming courses
                </Card.Text>
                <Link to={`category/programming`}>
                  <Button variant="primary">
                    View Courses <FontAwesomeIcon icon={faArrowRight} />
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center my-2">
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
              <div className="circle">
                <FontAwesomeIcon icon={faPaintBrush} size="2x" />
                </div>
                <Card.Title className="mt-3">Design</Card.Title>
                <Card.Text>
                  Master design skills with our design courses
                </Card.Text>
                <Link to={`category/design`}>
                  <Button variant="primary">
                    View Courses <FontAwesomeIcon icon={faArrowRight} />
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center my-2">
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
              <div className="circle">
                <FontAwesomeIcon icon={faDatabase} size="2x" />
                </div>
                <Card.Title className="mt-3">Databases</Card.Title>
                <Card.Text>
                  Learn about databases with our database courses
                </Card.Text>
                <Link to={`category/database`}>
                  <Button variant="primary" href="/database">
                    View Courses <FontAwesomeIcon icon={faArrowRight} />
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default CategorySection;
