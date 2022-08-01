import axios from 'axios';
import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const NavbarComponent = () => {
  const [message, setMessage] = useState("");
  const redirect = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(
        "http://localhost:8000/user/logout",
        { withCredentials: true }
      );
      redirect("/login");
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      }
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="fw-bold">MOVIEW.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav >
            <NavDropdown title="Create" id="basic-nav-dropdown">
              <NavDropdown.Item href="/createactor">Actor</NavDropdown.Item>
              <NavDropdown.Item href="/createdirector">
                Director
              </NavDropdown.Item>
              <NavDropdown.Item href="/createfilm">Film</NavDropdown.Item>
              <NavDropdown.Item href="/addgenre">Genre</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="me-auto">
            <NavDropdown title="List" id="basic-nav-dropdown">
              <NavDropdown.Item href="/listactor">Actor</NavDropdown.Item>
              <NavDropdown.Item href="/listdirector">
                Director
              </NavDropdown.Item>
              <NavDropdown.Item href="/listfilm">Film</NavDropdown.Item>
              <NavDropdown.Item href="/genre">Genre</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <div className="d-grid gap-2 d-md-block">
              <button className="btn btn-danger m-1 fw-bold" type="button" onClick={handleLogout}>
                <FaUserCircle className="text-black fs-5 me-2" />
                Logout
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent