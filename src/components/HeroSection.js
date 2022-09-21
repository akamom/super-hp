import Card from "react-bootstrap/Card";
import React from "react";

const HeroSection = (props) => {
  return (
    <Card className="text-center" text="light" id={props.id}>
      <Card.Body className="p-0 position-relative">
        <Card.Img className="rounded-0" src={"/img/cup-of-coffee.jpg"} />
        <Card.ImgOverlay className="position-absolute top-50 start-50 translate-middle">
          <Card.Title>Super HP</Card.Title>
          <Card.Subtitle>Ich bin ein Subtitle.</Card.Subtitle>
          <Card.Text className="d-none d-sm-block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            finibus tortor massa. Praesent fringilla, nisl pharetra semper
            ornare, metus sapien consectetur mi, eu porttitor massa mauris id
            mauris. Sed rutrum tincidunt nunc vel iaculis. Pellentesque faucibus
            cursus orci vitae viverra.
          </Card.Text>
        </Card.ImgOverlay>
      </Card.Body>
    </Card>
  );
};

export default HeroSection;
