import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CharacterCarousel = ({ images }) => (
  <Carousel>
    {images.map((url, index) => (
      <div key={index}>
        <img src={url} alt={`Imagen ${index}`} />
      </div>
    ))}
  </Carousel>
);

export default CharacterCarousel;
