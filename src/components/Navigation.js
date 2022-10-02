import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <Navbar id="navigation" expand="md" fixed="top" bg="light">
      <Container fluid>
          <Navbar.Brand href="#home" className="p-0 me-0 me-lg-2">
            <img
              alt=""
              src={"/img/logo_2.svg"}
              width="32"
              height="32"
              className="d-inline-block align-top"
            />{' '}
            CSBT
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Item>
              <Nav.Link href="#aboutme">About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#card1">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#card2">Coaching</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#card3">Supervision</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
