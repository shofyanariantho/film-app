import axios from "axios";
import React, { useContext, useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";

const NavbarComponent = () => {
  const [message, setMessage] = useState("");
  const redirect = useNavigate();
  const { user } = useContext(UserContext);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.delete("http://localhost:8000/user/logout", {
        withCredentials: true,
      });
      redirect("/login");
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      }
    }
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="py-3"
    >
      <Container>
        <Navbar.Brand href="/" className="fw-bold">
          MOVIEW.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {!user ? (
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/listfilm">Movies</Nav.Link>
              <Nav.Link href="/listactor">Actors</Nav.Link>
              <Nav.Link href="/listdirector">Directors</Nav.Link>
            </Nav>
            <Nav>
              <div className="d-grid gap-2 d-md-block">
                <a
                  className="btn btn-link mx-1 text-white"
                  href="/register"
                  style={{ textDecoration: "none" }}
                >
                  Register
                </a>
                <a className="btn btn-warning fw-bold " href="/login">
                  Login
                </a>
              </div>
            </Nav>
          </Navbar.Collapse>
        ) : (
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Create" id="basic-nav-dropdown">
                <NavDropdown.Item href="/createactor">Actor</NavDropdown.Item>
                <NavDropdown.Item href="/createdirector">
                  Director
                </NavDropdown.Item>
                <NavDropdown.Item href="/addgenre">Genre</NavDropdown.Item>
                <NavDropdown.Item href="/createfilm">Film</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="List" id="basic-nav-dropdown">
                <NavDropdown.Item href="/listactor">Actor</NavDropdown.Item>
                <NavDropdown.Item href="/listdirector">
                  Director
                </NavDropdown.Item>
                <NavDropdown.Item href="/genre">Genre</NavDropdown.Item>
                <NavDropdown.Item href="/listfilm">Film</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <div className="d-grid gap-2 d-md-block">
                <button
                  className="btn m-1 fw-bold btn-warning"
                  type="button"
                  onClick={handleLogout}
                >
                  <FaUserCircle className=" fs-5 me-2" />
                  Logout
                </button>
              </div>
            </Nav>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
