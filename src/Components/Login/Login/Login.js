import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
    console.log("email", event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
    console.log("password", event.target.value);
  };
  const handleSubmit = (event) => {};

  const handleLogin = (event) => {
    event.preventDefault();
  };
  const handleForgotPassword = (event) => {};

  return (
    <section className="py-48">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="w-50 mx-auto">
              <h2 className="text-center py-3">Login</h2>
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    className="w-100 input-filled"
                    onBlur={handleEmail}
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3 " controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    className="w-100 input-filled"
                    onBlur={handlePassword}
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>
                <div>
                  <button
                    className="link-btn underline py-2 w-6/12 text-xs"
                    onClick={handleForgotPassword}
                  >
                    Forgot Your Password ?
                  </button>
                  <button className="link-btn py-2 w-6/12 text-xs">
                    Don't have an account yet?{" "}
                    <Link to="/register" className="font-semibold text-indigo-700">
                      Sign up for free
                    </Link>
                  </button>
                </div>
                <Button
                  className="mx-auto my-4 d-block w-75 service-btn btn"
                  onBlur={handleSubmit}
                  variant="primary"
                  type="submit"
                >
                  Login
                </Button>
              </Form>
              <SocialLogin/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
