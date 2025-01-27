import React, { useState, useEffect } from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
// import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';

const MultiImageSlider = () => {
  const images = [image1, image2, image4, image5, image6,image1, image2, image4, image5, image6];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle the image shift for infinite scroll
  const shiftImages = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Auto scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(shiftImages, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="relative w-full w-4/6 mx-auto overflow-hidden rounded-xl shadow-2xl">
      {/* Image Wrapper */}
      <div
        className="flex transition-transform duration-1000 ease-in-out w-1/3 "
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Move images based on currentIndex
        }}
      >
        {images.concat(images).map((image, index) => (  // Duplicating images for infinite loop effect
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiImageSlider;
