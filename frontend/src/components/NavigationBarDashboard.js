import { Navbar, Container, Nav } from "react-bootstrap"
import { FaUserCircle } from "react-icons/fa"
import '../style/Nav.css'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import React, { useState } from "react"


const NavigationBarDashboard = () => {
  const [message, setMessage] = useState("");
  const redirect = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(
        "http://localhost:8000/user/logout",
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
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/Dashboard" className="fw-bold">MOVIEW.</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/Dashboard" className="">Home</Nav.Link>
        <Nav.Link href="/AddFilm" className="">Add Rating and Film</Nav.Link>
        <Nav.Link href="#Horor" className="">Add Actor and Director</Nav.Link>
        <Nav.Link href="/Genre" className="">Add Genre</Nav.Link>
      </Nav>
      <Nav>
      <div className="d-grid gap-2 d-md-block">
        <button className="btn btn-danger m-1 fw-bold" type="button" onClick={handleLogout}> 
          <FaUserCircle className="text-white fs-5 me-2"/>
            log out
        </button>
      </div>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
    )
}

export default NavigationBarDashboard
