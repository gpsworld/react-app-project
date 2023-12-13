import React from 'react';
import pict1 from './pict1.jpeg';
import pict2 from './pict2.jpeg';
import pict3 from './pict3.jpeg';



function ExampleCarouselImage() {
  // Define the JSX structure of your component
  return (
    <div className="carousel-image">
      <img  src={pict1} alt="Example" />

      <img  src={pict2} alt="eg1"/>

      <img   src={pict3} alt="eg2"/>
    </div>
  );
}

export default ExampleCarouselImage;
