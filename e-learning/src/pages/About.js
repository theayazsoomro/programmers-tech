import React from 'react';

const About = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to the About Us Page</h1>
        <p className="lead">Your gateway to quality online education.</p>
        <hr className="my-4" />
        <p>Explore our courses and enhance your skills with our comprehensive learning materials.</p>
        <a className="btn btn-primary btn-lg" href="/register" role="button">Get Started</a>
      </div>
    </div>
  );
};

export default About;
