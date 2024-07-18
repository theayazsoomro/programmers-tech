import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
import "../Style/Home.css";
import TrustedBrands from "../components/TrustedBrands";
import CategorySection from "../components/CategorySection";
import FindCourses from "../components/FindCourses";
import Testimonials from "../components/Testimonials";
import { Link } from "react-router-dom";
import axios from 'axios';

const Home = () => {

  // Example function to fetch data from the backend
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/users');
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  // Call the fetchData function when needed
  fetchData();
  
  return (
    <React.Fragment>
      <div
        className="service-40 py-5 wrap-feature40-box"
        style={{
          backgroundImage:
            "url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/features/feature40/img1.jpg), url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/features/feature40/img2.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <div className="card border-0 mb-4 shadow">
                <div className="card-body">
                  {" "}
                  <span className="badge badge-danger rounded-pill px-3 py-1 font-weight-light">
                    Home
                  </span>
                  <h3 className="my-3 text-uppercase">
                    Unlock Your Potential with our E-Learning Platform
                  </h3>
                  <p className="my-4">
                    Empower your skills with our expert-led courses in Web Development, AI, DevOps, and more!
                  </p>
                  <Link
                    to="/course"
                    className="btn btn-info-gradiant btn-md btn-rounded border-0 text-white"
                    href="#f40"
                  >
                    <span>Explore Courses</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/features/feature40/img3.jpg"
                alt="wrapkit"
                className="img-fluid rounded shadow"
              />
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
