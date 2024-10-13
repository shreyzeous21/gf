"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Slider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Update the activeIndex every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Slide change interval (3000ms = 3 seconds)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images.length]);

  return (
    <div className="flex flex-col items-center p-4">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`${
            index === activeIndex ? "block" : "hidden" // Show only the active image
          } flex-shrink-0 w-full sm:w-[80%] md:w-[60%] h-auto mb-1 p-1`}
          initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
          animate={index === activeIndex ? { opacity: 1, x: 0 } : {}} // Animate to center when active
          exit={{ opacity: 0, x: -100 }} // Slide out to the left when not active
          transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth animation timing
        >
          <Image
            src={image.src}
            alt={`Slide ${index + 1}`}
            layout="responsive"
            width={800}
            height={600}
            className="w-full h-auto object-cover rounded-lg"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Slider;
