import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  // const handleForgotPassword = (event) => {};

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate("/home");
  }

  let errorElement;

  if (error) {
    errorElement = <p className="text-danger"> Error {error?.message}</p>;
  } else {
    errorElement = "";
  }

  return (
    <section className="py-48">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="w-50 mx-auto">
              <h2 className="text-center py-3">Login</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    className="w-100 input-filled"
                    ref={emailRef}
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3 " controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    className="w-100 input-filled"
                    ref={passwordRef}
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>
                <div>
                  <button
                    className="link-btn underline py-2 w-6/12 text-xs"
                    // onClick={handleForgotPassword}
                  >
                    Forgot Your Password ?
                  </button>
                  <button className="link-btn py-2 w-6/12 text-xs">
                    Don't have an account yet?{" "}
                    <Link
                      to="/register"
                      className="font-semibold text-indigo-700"
                    >
                      Sign up for free
                    </Link>
                  </button>
                </div>
                <Button
                  className="mx-auto my-4 d-block w-75 service-btn btn"
                  // onBlur={handleSubmit}
                  variant="primary"
                  type="submit"
                >
                  Login
                </Button>
              </Form>
              <p className="py-3 text-center">{errorElement}</p>
              <div className="flex items-center w-full py-5">
                <div className="divider"></div>
                <p className="text">Or Log-in-with</p>
                <div className="divider"></div>
              </div>
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
