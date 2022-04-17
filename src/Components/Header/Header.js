import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" fixed="top" className="text-primary bg-white" variant="dark">
        <Container>
          <Navbar.Brand className="nav-color" as={Link} to="/">
            <span className="text-xl ">Photographer</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home" className="nav-color">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/blog" className="nav-color">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/aboutme" className="nav-color">
                About me
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="nav-color">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/register" className="nav-color">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
