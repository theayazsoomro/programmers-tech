import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-5">
      <Container className="p-4">
        <Row>
          <Col lg={6} md={12} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">ProgrammersTech</h5>
            <p>
              Follow us on our social media channels to stay updated with the
              latest trends and offers.
            </p>
          </Col>
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Follow Us</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="https://twitter.com/theayazsoomro" className="text-dark" target="_blank" rel="noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com/theayazsoomro" className="text-dark" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/theayazsoomro" className="text-dark" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3 bg-dark text-white">
        © 2024 ProgrammersTech | Developed by&emsp;
        <a href="https://www.linkedin.com/in/theayazsoomro" className="text-white" target="_blank" rel="noreferrer">
            Mohammad Ayaz
        </a>
      </div>
    </footer>
  );
};

export default Footer;
