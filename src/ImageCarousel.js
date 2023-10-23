import React, { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css"; // Import Font Awesome CSS
import "./ImageCarousel.css";
import image1 from './IMAGE1.jpg';
import image2 from './IMAGE2.jpg';
import image3 from './IMAGE3.jpg';
import image4 from './IMAGE4.jpg';
import image5 from './IMAGE5.jpg';
import image6 from './IMAGE6.jpg';

const ImageCarousel = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change images automatically every 10 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="image-carousel">
      <button className="carousel-button left" onClick={previousImage}>
        <i className="fa fa-arrow-left" aria-hidden="true"></i> {/* Font Awesome Left Arrow */}
      </button>
      <img
        src={images[currentImage]}
        alt={`Image ${currentImage + 1}`}
        className="carousel-image"
      />
      <button className="carousel-button right" onClick={nextImage}>
        <i className="fa fa-arrow-right" aria-hidden="true"></i> {/* Font Awesome Right Arrow */}
      </button>
    </div>
  );
};

export default ImageCarousel;