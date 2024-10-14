"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const MediaSlider = ({ videos = [], images = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change images every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div className="flex flex-col items-center p-4">
      {/* Static Video Display */}
      {videos.map((video, index) => (
        <div
          key={`video-${index}`}
          className="flex-shrink-0 w-full sm:w-[80%] md:w-[65%] h-auto mb-3 p-4" // Full width on phones, 80% on small screens, 60% on medium and larger
        >
          <video
            className="w-full h-auto object-cover rounded-lg"
            autoPlay
            loop
            muted
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}

      {/* Image Slider */}
      {images.map((image, index) => (
        <div
          key={`image-${index}`}
          className={`flex-shrink-0 w-full sm:w-[80%] md:w-[65%] h-auto mb-3 p-4 ${
            index === activeIndex ? "block" : "hidden" // Show only the active image
          }`}
        >
          <Image
            src={image.src}
            alt={`Slide ${index + 1}`}
            layout="responsive"
            width={800}
            height={600}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default MediaSlider;
