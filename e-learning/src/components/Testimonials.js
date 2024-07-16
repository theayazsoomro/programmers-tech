import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const testimonials = [
  {
    text: "“This product has changed my life! The features are incredible and the customer service is top-notch.”",
    img: "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/testimonial/1.jpg",
    name: "John Doe",
    stars: 5,
  },
  {
    text: "“I couldn't be happier with my purchase. The quality is excellent and it performs beyond my expectations.”",
    img: "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/testimonial/2.jpg",
    name: "Jane Smith",
    stars: 4,
  },
  {
    text: "“Amazing experience! The product is reliable and the support team is very responsive.”",
    img: "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/testimonial/3.jpg",
    name: "Alice Brown",
    stars: 5,
  },
  {
    text: "“I couldn't be happier with my purchase. The quality is excellent and it performs beyond my expectations.”",
    img: "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/testimonial/2.jpg",
    name: "Jane Smith",
    stars: 3,
  },
];

const TestimonialComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

return (
    <Container fluid className='mt-5 bg-light testimonials'>
    <div className="testimonial-section py-5">
        <Container>
            <Row className="justify-content-center">
                <Col md={8} className="text-center">
                    <h2 className="mb-3">Check what our Customers are Saying</h2>
                    <h6 className="subtitle font-weight-normal">
                        You can rely on our amazing features list and also our customer services will be a great experience for you without a doubt.
                    </h6>
                </Col>
            </Row>
            <Row className="justify-content-center mt-4">
            <Col md={6}>
                    <div className="d-flex justify-content-between">
                            <button
                                    className="btn btn-link"
                                    onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)}
                            >
                                    <i className="fas fa-chevron-left"></i>
                            </button>
                            <Card className="card-shadow border-0">
                                <Card.Body>
                                    <h6 className="font-weight-light mb-3">{testimonials[currentIndex].text}</h6>
                                    <div className="d-flex align-items-center">
                                        <img src={testimonials[currentIndex].img} alt="testimonial" className="rounded-circle" style={{ width: '60px' }} />
                                        <div className="ml-3">
                                            <h6 className="mb-0 customer">{testimonials[currentIndex].name}</h6>
                                            <div className="font-10">
                                                {[...Array(5)].map((star, i) => (
                                                    <span key={i} className={i < testimonials[currentIndex].stars ? "text-success" : "text-muted"}>
                                                        ★
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <button
                                    className="btn btn-link"
                                    onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)}
                            >
                                    <i className="fas fa-chevron-right"></i>
                            </button>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    </Container>
);
};

export default TestimonialComponent;
