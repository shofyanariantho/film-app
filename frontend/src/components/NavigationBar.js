import { Navbar, Container, Nav } from "react-bootstrap"
import { FaUserCircle } from "react-icons/fa"
import '../style/Nav.css'


const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home" className="fw-bold">MOVIEW.</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#Home" className="">Home</Nav.Link>
        <Nav.Link href="#Trending" className="">Trending</Nav.Link>
        <Nav.Link href="#Horor" className="">Horor</Nav.Link>
        <Nav.Link href="#Action" className="">Action</Nav.Link>
      </Nav>
      <Nav>
      <div className="d-grid gap-2 d-md-block">
        <Nav.Link href="/login" className="btn btn-warning m-1 fw-bold text-black"> 
          <FaUserCircle className="text-black fs-5 me-2"/>
            Log In
        </Nav.Link>
      </div>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
    )
}

export default NavigationBar
