import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <Container fluid>
        <Row className="justify-content-center">Name: Musterman, Max</Row>
        <Row className="justify-content-center">E-Mail: max@super-hp.de</Row>
        <Row className="justify-content-center">Telephon: 01234567</Row>
        <Row className="justify-content-center">Beruf: Superheld</Row>
      </Container>
    </footer>
  );
};

export default Footer;
