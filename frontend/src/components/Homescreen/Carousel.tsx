import React, { useState, useEffect } from "react";
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';

interface Slide {
  id: number;
  image: string;
  text: string;
}

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  const slides: Slide[] = [
    { id: 1, image: image1, text: "Slide 1" },
    { id: 2, image: image2, text: "Slide 2" },
    { id: 3, image: image3, text: "Slide 3" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-screen-xl mx-auto mt-4">
      <div className="overflow-hidden rounded-lg shadow-lg h-[70vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.text}
              className="w-full h-full "
              style={{objectFit: 'fit'}}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            onClick={() => goToSlide(index)} 
            className={`cursor-pointer transition-all duration-300 ease-in-out ${
              index === currentIndex ? "w-8 h-2 bg-gray-300 rounded-full" : "w-3 h-2 bg-gray-200 rounded-full"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
