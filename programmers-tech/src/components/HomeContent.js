import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import '../App.css';

const HomeContent = () => {
    return (
        <main>
            <Container className="mt-4">
                <div className="jumbotron bg-primary text-white p-5 rounded">
                    <h1 className="display-4">Welcome to ProgrammersTech!</h1>
                    <p className="lead">Your one-stop solution for all tech needs.</p>
                    <hr className="my-4" />
                    <p>Explore our services and get the best deals today.</p>
                    <a className="btn btn-light btn-lg" href="#order" role="button">Order Now</a>
                </div>
                <Row className="mt-5">
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1593642532400-2682810df593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHRlY2h8ZW58ZW58MHx8fDE2NzQ4Mzk3OTI&ixlib=rb-1.2.1&q=80&w=400" alt="Tech Image 1" />
                            <Card.Body>
                                <Card.Title>Innovative Solutions</Card.Title>
                                <Card.Text>
                                    We provide cutting-edge technology solutions tailored to your needs.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1593642532400-2682810df593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHRlY2h8ZW58ZW58MHx8fDE2NzQ4Mzk3OTI&ixlib=rb-1.2.1&q=80&w=400" alt="Tech Image 2" />
                            <Card.Body>
                                <Card.Title>Expert Team</Card.Title>
                                <Card.Text>
                                    Our team of experts is dedicated to delivering top-notch services.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1593642532400-2682810df593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHRlY2h8ZW58ZW58MHx8fDE2NzQ4Mzk3OTI&ixlib=rb-1.2.1&q=80&w=400" alt="Tech Image 3" />
                            <Card.Body>
                                <Card.Title>Customer Focused</Card.Title>
                                <Card.Text>
                                    We prioritize your needs and ensure complete satisfaction.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default HomeContent;
