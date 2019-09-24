import React from "react";
import rick1 from "../img/rick1.png";
import rick2 from "../img/rick2.jpg";
import rick3 from "../img/rick3.png";
import rick4 from "../img/rick4.jpg";
import rick5 from "../img/rick5.jpg";
import rick6 from "../img/rick6.png";
import Carousel from "react-bootstrap/Carousel";

export const Slides: React.FC = () => {
  return (
    <div className="slides">
    <Carousel >

      <Carousel.Item >
        <img className="d-block w-100" src={rick1} alt="First slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={rick2} alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={rick3} alt="Third slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={rick4} alt="Fourth slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={rick5} alt="Fifth slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={rick6} alt="Sixth slide" />
      </Carousel.Item>

    </Carousel>
    </div>
  );
};
