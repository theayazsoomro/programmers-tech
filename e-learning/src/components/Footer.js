import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>About Us</h5>
            <p>
              We are a leading e-learning platform, offering a wide range of courses to help you learn and grow in your career.
            </p>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Contact</h5>
            <p>
              <strong>Email:</strong> ayazkhansoomro07@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +123 456 7890
            </p>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Follow Us</h5>
            <div className="social-icons mt-3">
              <a href="https://www.facebook.com/theayazsoomro" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} className="icon fa-2x me-2 " />
              </a>
              <a href="https://www.twitter.com/theayazsoomro" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="icon fa-2x mx-2 " />
              </a>
              <a href="https://www.instagram.com/theayazsoomro" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="icon fa-2x mx-2 " />
              </a>
              <a href="https://www.linkedin.com/in/theayazsoomro" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} className="icon fa-2x mx-2 " />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} All Rights Reserved | Developed by{" "}
              <a href="https://www.linkedin.com/in/theayazsoomro/" target="_blank" rel="noopener noreferrer">
                Mohammad Ayaz
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
