import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../Style/Home.css";
import TrustedBrands from "../components/TrustedBrands";
import CategorySection from "../components/CategorySection";
import FindCourses from "../components/FindCourses";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <React.Fragment>
      <Container
        fluid
        className="home-banner d-flex align-items-center"
        style={{ height: "80vh" }}
      >
        <Container>
          <Row className="w-100">
            <Col
              md={6}
              className="d-flex flex-column justify-content-center align-items-start"
            >
              <h1>
                Change is the end result of all true{" "}
                <span className="text-success">Learning</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tristique at libero a gravida.
              </p>
              <div className="button-group">
                <Button variant="success" className="me-3">
                  Book Online
                </Button>
                <Button variant="outline-dark">Watch Video</Button>
              </div>
            </Col>
            <Col
              md={6}
              className="d-flex justify-content-lg-end justify-content-center align-items-center"
            >
              {/* <img src="https://kcballet.org/wp-content/uploads/2019/11/skyler-taylor.jpg" alt="Teacher" className="img-fluid clips" width={400} /> */}
              <div className="shape-outer parallelogram">
                <div className="shape-inner parallelogram"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      
      {/* Trusted Brands */}
      <TrustedBrands />

      {/* Category Section */}
      <CategorySection />

      {/* Find Courses */}
      <FindCourses />

      {/* Testimonials */}
      <Testimonials />
    </React.Fragment>
  );
};

export default Home;
