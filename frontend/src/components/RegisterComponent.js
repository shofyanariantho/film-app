import React, { useState } from "react";
import { Button, Form, Image, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LoginImages from "../assets/images/bg/login.jpg";
import useForm from "../utils/useForm";
import useAuth from "../utils/useAuth";

function RegisterComponent() {
  const { values, handleChange } = useForm({
    initialValues: {
      user_name: "",
      user_email: "",
      user_password: "",
      confirm_password: "",
    },
  });

  const { registerUser, error } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    await registerUser(values);
  };

  return (
    <div className="contanier-fluid vh-100">
      <div className="row align-items-center">
        <div className="col-md-6">
          <Image
            src={LoginImages}
            className="img-fluid"
            style={{ height: "100vh", width: "100vh" }}
          />
        </div>
        <div className="col-md-6 h-100 justify-content-center p-5">
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
            <h5 className="login-title pb-2">Register</h5>
            {error ? <Alert variant="danger">{error}</Alert> : null}
            <Form
              onSubmit={handleRegister}
              className="form-container text-black-50"
            >
              <Form.Group>
                <Form.Label for="name" className="d-block pb-1">
                  Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="user_name"
                  id="user_name"
                  value={values.user_name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="border-0 border-bottom w-100 mb-3"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label for="email" className="d-block pb-1">
                  Email
                </Form.Label>
                <Form.Control
                  type="email"
                  name="user_email"
                  id="user_email"
                  value={values.user_email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  className="border-0 border-bottom w-100 mb-3"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label for="password" className="d-block pb-1">
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  name="user_password"
                  id="user_password"
                  value={values.user_password}
                  onChange={handleChange}
                  placeholder="Enter your passsword"
                  className="border-0 border-bottom w-100 mb-3"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label for="password2" className="d-block pb-1">
                  Confirm Password
                </Form.Label>
                <Form.Control
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  placeholder="Enter your passsword"
                  className="border-0 border-bottom w-100 mb-3"
                  required
                />
              </Form.Group>
              <Button
                variant="warning"
                size="lg"
                className="w-100 text-dark mb-2"
                type="submit"
              >
                <b>Create Your Account</b>
              </Button>
            </Form>
            <p className="mt-3">
              Already have an account?
              <a
                variant="link"
                className="pt-0 ps-1 text-info text-decoration-none"
                href="/login"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterComponent;
