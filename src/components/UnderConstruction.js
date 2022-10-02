import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Ratio from "react-bootstrap/Ratio";
import "../styles/rotation.css";

const UnderConstruction = () => {


  return (
    <Container fluid className="vh-100 py-5 bg-dark" id="underConstruction">
      <Row className="justify-content-center">
        <Col className="col-2 px-5 ">
          <Ratio aspectRatio="1x1">
            <Image
              className="rotate"
              fluid
              src={"/img/logo_2_csbt.svg"}
            />
          </Ratio>
        </Col>
      </Row>
      <Row className=" pt-5 justify-content-center display-6 text-center text-muted text-bg-dark">
        Website im Aufbau.
      </Row>
    </Container>
  );
};

export default UnderConstruction;
