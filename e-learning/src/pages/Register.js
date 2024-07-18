import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');

    // Prepare user data
    const userData = { name, email, password };

    try {
      // Send data to the backend API using Axios
      const response = await axios.post('http://localhost:5001/api/users/register', userData);

      // Handle successful registration
      if (response.status === 200) {
        window.location.href = '/login';
      }
    } catch (err) {
      console.error('Error:', err);
      setError(err.response?.data?.message || 'An error occurred while registering');
    }
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Card style={{ width: '25rem' }} className="p-4 shadow border-0">
        <Card.Body>
          <h2 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#00000085' }}>Create Account</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="mt-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword" className="mt-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>

            {error && (
              <div className="text-danger text-center mt-3">
                {error}
              </div>
            )}

            <Button variant="primary" type="submit" className="mt-4 w-100">
              Sign up
            </Button>
          </Form>

          <div className="text-center mt-3">
            <Link to="/forgot-password" className="d-block">Forgot Password?</Link>
            <Link to="/login" className="d-block">Already have an account? Login</Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register;
