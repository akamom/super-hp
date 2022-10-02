import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Ratio from "react-bootstrap/Ratio";

const AboutMe = () => {
 return (
    <Container fluid className="vh-100 py-5 bg-light" id="aboutme">
        <Row className="display-1 mb-5">
          <div className="text-center">About Me</div>
        </Row>
        <Row className="justify-content-evenly">
          <Col className="col-4 px-5 d-flex align-items-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            finibus tortor massa. Praesent fringilla, nisl pharetra semper
            ornare, metus sapien consectetur mi, eu porttitor massa mauris id
            mauris. Sed rutrum tincidunt nunc vel iaculis. Pellentesque faucibus
            cursus orci vitae viverra.
          </Col>
          <Col className="col-2 px-5">
            <Ratio aspectRatio="1x1">
              <Image fluid src={"/img/jumbotron.jpg"} roundedCircle />
            </Ratio>
          </Col>
          <Col className="col-4 px-5 d-flex align-items-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            finibus tortor massa. Praesent fringilla, nisl pharetra semper
            ornare, metus sapien consectetur mi, eu porttitor massa mauris id
            mauris. Sed rutrum tincidunt nunc vel iaculis. Pellentesque faucibus
            cursus orci vitae viverra.
          </Col>
        </Row>
        <Row>
          <Col className="p-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            finibus tortor massa. Praesent fringilla, nisl pharetra semper
            ornare, metus sapien consectetur mi, eu porttitor massa mauris id
            mauris. Sed rutrum tincidunt nunc vel iaculis. Pellentesque faucibus
            cursus orci vitae viverra.
          </Col>
        </Row>
      </Container>
 );
}

export default AboutMe;