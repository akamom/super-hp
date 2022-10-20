import Card from "react-bootstrap/Card";
import React from "react";

const HeroSection = (props) => {
  const content = props.content;
  return (
    <Card className="text-center" text="light" id={props.id}>
      <Card.Body className="p-0 position-relative">
        <Card.Img className="rounded-0" src={content.image} />
        <Card.ImgOverlay className="position-absolute top-50 start-50 translate-middle">
          <Card.Title>{content.title}</Card.Title>
          <Card.Subtitle>{content.subtitle}</Card.Subtitle>
          <Card.Text className="d-none d-sm-block">
            {content.description}
          </Card.Text>
        </Card.ImgOverlay>
      </Card.Body>
    </Card>
  );
};

export default HeroSection;
