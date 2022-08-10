import "./Login.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Form, Alert } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GoogleButton from "react-google-button";

import { useUserAuth } from "../../context/userAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
    <Container fluid id="loginLanding">
      <Row className="position-absolute top-50 start-50 translate-middle">
        <Col>
          <div className="p-4 box loginBox">
            <h2 className="mb-3 text-center">Daily Dash</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <div className="d-grid gap-2">
                <Button variant="primary" type="Submit">
                  Log In
                </Button>
              </div>
            </Form>
            <hr />
            <div>
              <GoogleButton
                className="g-btn"
                type="dark"
                onClick={handleGoogleSignIn}
              />
            </div>
            <div className="p-1 mt-4 text-center">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Login;




      {/* <div className="text-center">
      {'© Copyright '}
      <a color="inherit" href="https://davidvllgs.com/">
        David Villegas
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </div> */}