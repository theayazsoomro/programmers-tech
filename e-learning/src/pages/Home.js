import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
import "../Style/Home.css";
import TrustedBrands from "../components/TrustedBrands";
import CategorySection from "../components/CategorySection";
import FindCourses from "../components/FindCourses";
import Testimonials from "../components/Testimonials";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      {/* <Container
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
                <span className="text-primary">Learning</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tristique at libero a gravida.
              </p>
              <div className="button-group">
                <Link to="/course">
                  <Button variant="outline-primary">Explore Courses</Button>
                </Link>
              </div>
            </Col>
            <Col
              md={6}
              className="d-flex justify-content-lg-end justify-content-center align-items-center"
            >
              <div className="shape-outer parallelogram">
                <div className="shape-inner parallelogram"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container> */}
      
      <div className="service-40 py-5 wrap-feature40-box" style={{ backgroundImage: "url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/features/feature40/img1.jpg), url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/features/feature40/img2.jpg)" }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="card border-0 mb-4 shadow">
                        <div className="card-body"> <span className="badge badge-danger rounded-pill px-3 py-1 font-weight-light">Service 40</span>
                            <h3 className="my-3 text-uppercase">Awesome Extra Ordinary Flexibility</h3>
                            <p className="my-4">You can relay on our amazing features list and also our customer services will be great</p> 
                            <Link to="/course" className="btn btn-info-gradiant btn-md btn-rounded border-0 text-white" href="#f40"><span>Explore Courses</span></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6"> 
                  <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/features/feature40/img3.jpg" alt="wrapkit" className="img-fluid rounded shadow" /> 
                </div>
            </div>
        </div>
    </div>

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
