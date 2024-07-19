import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top py-lg-3 navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand fs-4 fw-bold ms-lg-5" to="/">E-Learning</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3 fs-5">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item mx-3 fs-5">
              <Link className="nav-link" aria-current="page" to="/about">About</Link>
            </li>
            <li className="nav-item mx-3 fs-5">
              <Link className="nav-link" aria-current="page" to="/contact">Contact Us</Link>
            </li>
            
            {/* <li className="nav-item mx-3 fs-5">
              <Link className="nav-link" to="/register">Register</Link>
            </li> */}
            {/* <li className="nav-item mx-3 fs-5">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li> */} 
            <li className="nav-item mx-3 fs-5">
              <Link className="nav-link" to="/course">Courses</Link>
            </li>
            <li className="nav-item mx-3 fs-5">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            {/* <li className="nav-item mx-3 fs-5">
              <Link className="nav-link" to="/admin">Admin Dashboard</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
