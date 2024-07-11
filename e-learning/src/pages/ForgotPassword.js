import React from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Card style={{ width: '25rem' }} className="p-4 shadow border-0">
        <Card.Body>
          <h2 className="text-center mb-4">Forgot Password</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4 w-100">
              Submit
            </Button>
          </Form>

          <div className="text-center mt-3">
            <Link to="/login" className="d-block">Already have an account? Login</Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ForgotPassword;
