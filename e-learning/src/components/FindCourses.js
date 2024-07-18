import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const FindCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/courses");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching the courses", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <Container className="findCourses my-5">
      <h2 className="text-center my-5">
        Find Your <span className="text-danger">Course</span>
      </h2>
      <Row>
        {courses.map((course, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4">
              <Card.Img variant="top" src={course.imgSrc} />
              <Card.Body className="d-flex justify-content-center flex-column px-4">
                <div className="badge badge-pill badge-success">
                  {course.category}
                </div>
                <Card.Title className="my-3">{course.title}</Card.Title>
                <Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="price">{course.price}</span>
                    <Button variant="primary">Enroll</Button>
                  </div>
                </Card.Text>
                <Card.Text className="text-muted d-flex align-items-center justify-content-between">
                  <div>
                    <FontAwesomeIcon icon={faBook} /> {course.lessons}
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faClock} /> {course.duration}
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faStar} /> Rating: {course.rating}
                  </div>
                </Card.Text>
                <Card.Text>
                  <h6 className="text-secondary">By: {course.instructor}</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FindCourses;
