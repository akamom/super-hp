import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Blocksection(props) {
  return (
    <Card
      className="min-vh-100 mx-auto d-flex align-items-md-center justify-content-md-center border-0 rounded-0"
      bg={props.bg}
      text={props.bg === "light" ? "dark" : "white"}
      id={props.id}
    >
      <Container>
        <Row className="my-5 mb-100 mt-md-auto">
          <Col
            className={`h-10 d-inline-block col-md-6 col-12 ${
              props.imgAllignment === "left" ? "order-last order-md-first" : "order-last"
            }`}
          >
            <Card.Img className="rounded-0 img-thumbnail" src={"/img/blog-index.jpg"} />
          </Col>
          <Col className="col-md-6 col-12">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.Some quick example text to build on the
                card title and make up the bulk of the card's content.Some quick
                example text to build on the card title and make up the bulk of
                the card's content.Some quick example text to build on the card
                title and make up the bulk of the card's content.Some quick
                example text to build on the card title and make up the bulk of
                the card's content.Some quick example text to build on the card
                title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

export default Blocksection;
