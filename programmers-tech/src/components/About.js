import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../App.css';

const About = () => {
    return (
        <section id="about">
            <Container className="mt-5">
                <Row>
                    <Col>
                        <h2>About Us</h2>
                        <p>
                            Welcome to ProgrammersTech! We are a team of dedicated professionals who are passionate about technology and innovation. Our mission is to provide top-notch technology solutions that cater to the needs of our diverse clientele. With years of experience in the tech industry, we have the expertise and knowledge to tackle any challenge and deliver exceptional results.
                        </p>
                        <p>
                            Our team is comprised of skilled developers, designers, and project managers who work collaboratively to ensure that our clients receive the best possible service. We believe in continuous learning and improvement, and we strive to stay ahead of the curve by embracing the latest technologies and methodologies.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col md={4}>
                        <Image src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHRlY2h8ZW58MHx8fDE2NzQ4Mzk3OTI&ixlib=rb-1.2.1&q=80&w=400" rounded fluid />
                        <h5 className="mt-2">Our Mission</h5>
                        <p>
                            To provide innovative and reliable technology solutions that drive success and growth for our clients.
                        </p>
                    </Col>
                    <Col md={4}>
                        <Image src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHRlY2h8ZW58MHx8fDE2NzQ4Mzk3OTI&ixlib=rb-1.2.1&q=80&w=400" rounded fluid />
                        <h5 className="mt-2">Our Vision</h5>
                        <p>
                            To be a leading technology company recognized for excellence and innovation in the tech industry.
                        </p>
                    </Col>
                    <Col md={4}>
                        <Image src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHRlY2h8ZW58MHx8fDE2NzQ4Mzk3OTI&ixlib=rb-1.2.1&q=80&w=400" rounded fluid />
                        <h5 className="mt-2">Our Values</h5>
                        <p>
                            Integrity, Innovation, Excellence, and Customer Focus. We are committed to delivering the best possible solutions with honesty and dedication.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;