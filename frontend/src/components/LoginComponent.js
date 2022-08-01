import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Card, CardGroup, Image } from "react-bootstrap";
import LoginImages from "../assets/images/bg/login.jpg";
import { useNavigate } from "react-router-dom";

function LoginComponent() {
  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const redirect = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8000/user/login",
        {
          user_email,
          user_password,
        },
        { withCredentials: true }
      );
      redirect("/");
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      }
    }
  };

  return (
    <CardGroup>
      <div>
        <Image src={LoginImages} style={{height: '100vh', width:'100vh'}}/>
      </div>
      <Card className="justify-content-center p-5">
        <div>
          <h4 className="fw-bold mb-5">MOVIEW.</h4>
        </div>
        <div className="">
          <h5 className="login-title pb-2">Log in</h5>
          <Form onSubmit={Auth} className="form-container text-black-50">
            <Form.Group>
              <Form.Label className="d-block pb-1">Email</Form.Label>
              <Form.Control
                id="email"
                type="email"
                value={user_email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                className="border-0 border-bottom w-100 mb-3"
              />
            </Form.Group>
            <Form.Group>
              <Form.Group>
                <Form.Label for="password" className="d-block pb-1">
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  value={user_password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-0 border-bottom w-100 mb-3"
                  placeholder="Enter your password"
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
          <Button variant="link" className="p-0 text-black">
            Forgot Password?
          </Button>
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
