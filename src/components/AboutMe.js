import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Ratio from "react-bootstrap/Ratio";

const AboutMe = (props) => {
  const content = props.content;
  return (
    <Container fluid className="vh-100 py-5 bg-light" id="aboutme">
      <Row className="display-1 mb-5">
        <div className="text-center">About Me</div>
      </Row>
      <Row className="justify-content-evenly">
        <Col className="col-4 px-5 d-flex align-items-center">
          {content.textlinks}
        </Col>
        <Col className="col-2 px-5">
          <Ratio aspectRatio="1x1">
            <Image fluid src={content.image} roundedCircle />
          </Ratio>
        </Col>
        <Col className="col-4 px-5 d-flex align-items-center">
          {content.textrechts}
        </Col>
      </Row>
      <Row>
        <Col className="p-5">{content.textunten}</Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
