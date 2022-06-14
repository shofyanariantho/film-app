import { Navbar, Container, Nav } from "react-bootstrap"
import { FaUserCircle } from "react-icons/fa"
import '../style/Nav.css'


const NavigationBarDashboard = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home" className="fw-bold">MOVIEW.</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#Home" className="">Home</Nav.Link>
        <Nav.Link href="#Trending" className="">Add Rating and Film</Nav.Link>
        <Nav.Link href="#Horor" className="">Add Actor and Director</Nav.Link>
      </Nav>
      <Nav>
      <div className="d-grid gap-2 d-md-block">
        <button className="btn btn-danger m-1 fw-bold" type="button"> 
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
