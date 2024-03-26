import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image11 from "../img/image11.jpg"
import image12 from "../img/image12.jpg"
import image13 from "../img/image13.jpg"
import "../components/imageCarousel.css";

const ImageCarousel = () => {
  const divStyle = {
    position : "relative",
    height: "30vh",
    color:"white",
  };



  const imgStyle = {
    objectFit: 'cover',
    position:'relative'
  }
  return (
    <div style={divStyle}>
      <Carousel className="cat">
        <Carousel.Item>
          <img 
            className="d-block w-100 corimg"
            style={imgStyle }
            src={image11}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Imagination</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={imgStyle}
            className="d-block w-100 corimg"
            src={image12}            
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Creative</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={imgStyle}
            className="d-block w-100 corimg"
            src={image13}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Technology</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
