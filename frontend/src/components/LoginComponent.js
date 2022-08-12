import React, { useState } from "react";
import { Form, Button, Card, CardGroup, Image, Alert } from "react-bootstrap";
import LoginImages from "../assets/images/bg/login.jpg";
import useForm from "../utils/useForm";
import useAuth from "../utils/useAuth";

function LoginComponent() {
  const { values, handleChange } = useForm({
    initialValues: {
      user_email: "",
      user_password: "",
    },
  });

  const { loginUser, error } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    await loginUser(values);
  };

  return (
    <CardGroup>
      <div>
        <Image src={LoginImages} style={{ height: "100vh", width: "100vh" }} />
      </div>
      <Card className="justify-content-center p-5">
        <div className="mb-5">
          <a
            href="/"
            className="fw-bold h4 text-dark"
            style={{ textDecoration: "none" }}
          >
            MOVIEW.
          </a>
        </div>

        <div className="">
          {error ? <Alert variant="danger">{error}</Alert> : null}

          <Form onSubmit={handleLogin} className="form-container text-black-50">
            <Form.Group>
              <Form.Label className="d-block pb-1">Email</Form.Label>
              <Form.Control
                id="email"
                type="email"
                name={"user_email"}
                value={values.user_email}
                onChange={handleChange}
                placeholder="email@example.com"
                className="border-0 border-bottom w-100 mb-3"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Group>
                <Form.Label for="password" className="d-block pb-1">
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  name="user_password"
                  value={values.user_password}
                  onChange={handleChange}
                  className="border-0 border-bottom w-100 mb-3"
                  placeholder="Enter your password"
                  required
                />
              </Form.Group>
            </Form.Group>
            <Button
              type="submit"
              variant="warning"
              size="lg"
              className="w-100 my-4"
            >
              <b>Login</b>
            </Button>
          </Form>
          {/*
          <Button variant="link" className="p-0 text-black">
            Forgot Password?
          </Button>
          */}
          <p className="mt-0">
            Don't have an account?
            <a
              variant="link"
              className="pt-0 ps-1 text-info text-decoration-none"
              href="/register"
              hover
            >
              Register Here
            </a>
          </p>
        </div>
      </Card>
    </CardGroup>
  );
}

export default LoginComponent;
