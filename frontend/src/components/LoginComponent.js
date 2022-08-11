import React, { useState } from "react";
// import axios from "axios";
import { Form, Button, Card, CardGroup, Image, Alert } from "react-bootstrap";
import LoginImages from "../assets/images/bg/login.jpg";
// import { useNavigate } from "react-router-dom";
import useForm from "../utils/useForm";
import useAuth from "../utils/useAuth";

function LoginComponent() {
  // const [user_email, setEmail] = useState("");
  // const [user_password, setPassword] = useState("");
  // const [error, setError] = useState();
  // const redirect = useNavigate();

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

  // const Auth = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8000/user/login",
  //       {
  //         user_email,
  //         user_password,
  //       },
  //       { withCredentials: true }
  //     );
  //     localStorage.setItem("auth", response.data.accessToken);
  //     redirect("/");
  //   } catch (error) {
  //     if (error.response) {
  //       // setError("Invalid Email or Password!");
  //     }
  //   }
  // };

  return (
    <CardGroup>
      <div>
        <Image src={LoginImages} style={{ height: "100vh", width: "100vh" }} />
      </div>
      <Card className="justify-content-center p-5">
        <div>
          <h4 className="fw-bold mb-5">MOVIEW.</h4>
        </div>
        <div className="">
          <h5 className="login-title pb-2">Log in</h5>
          {error ? <Alert variant="danger">{error}</Alert> : null}

          <Form onSubmit={handleLogin} className="form-container text-black-50">
            <Form.Group>
              <Form.Label className="d-block pb-1">Email</Form.Label>
              <Form.Control
                id="email"
                type="email"
                name={"user_email"}
                value={values.user_email}
                // onChange={(e) => setEmail(e.target.value)}
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
                  // onChange={(e) => setPassword(e.target.value)}
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
              className="w-100 text-white mb-2"
            >
              LOGIN
            </Button>
          </Form>
          {/*
          <Button variant="link" className="p-0 text-black">
            Forgot Password?
          </Button>
          */}
          <p className="mt-5">
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
