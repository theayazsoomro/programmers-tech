import React from "react";
import CourseCard from "../components/CourseCard";

const Home = () => {
  const sampleCourse = {
    image: "https://via.placeholder.com/150",
    title: "React for Beginners",
    category: "Web Development",
    price: 49.99,
    teacher: "John Doe",
    teacherImage: 'https://via.placeholder.com/30', 
    rating: 4,
  };

  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to the E-Learning Platform</h1>
        <p className="lead">Your gateway to quality online education.</p>
        <hr className="my-4" />
        <p>
          Explore our courses and enhance your skills with our comprehensive
          learning materials.
        </p>
        <a className="btn btn-primary btn-lg" href="/register" role="button">
          Get Started
        </a>
      </div>

      <div className="container mt-5">
        <h1 className="text-center">Our Courses</h1>
        <div className="row">
          <div className="col-md-4">
            <CourseCard {...sampleCourse} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
