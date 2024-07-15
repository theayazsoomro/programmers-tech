import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faClock, faStar } from "@fortawesome/free-solid-svg-icons";
// import 'bootstrap/dist/css/bootstrap.min.css';

const courses = [
  {
    category: "Technology",
    title: "Expand your career opportunities with Python",
    price: "$55",
    lessons: "10 Lessons",
    duration: "5h 20m",
    rating: "4.5",
    instructor: "Linda Bacote",
    imgSrc:
      "https://www.learnfly.com/img/post_img/1335475250_1_5ev1xmjs2-sj4ddejfdnqa.png",
  },
  {
    category: "Business",
    title: "Effective business pages on social media",
    price: "$35",
    lessons: "13 Lessons",
    duration: "3h 15m",
    rating: "4.2",
    instructor: "Jane Cooper",
    imgSrc:
      "https://www.learnfly.com/img/post_img/1335475250_1_5ev1xmjs2-sj4ddejfdnqa.png",
  },
  {
    category: "Life Style",
    title: "How to increase your social media engagement",
    price: "$22",
    lessons: "8 Lessons",
    duration: "2h 17m",
    rating: "4.2",
    instructor: "Martin Scorsese",
    imgSrc:
      "https://www.learnfly.com/img/post_img/1335475250_1_5ev1xmjs2-sj4ddejfdnqa.png",
  },
];

const FindCourses = () => {
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
