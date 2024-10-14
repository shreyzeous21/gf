"use client";

import React, { useState, useEffect, useRef } from "react";
import { Afacad } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Loader from "@/components/Loader"; // Import the loader component
import Image from "next/image";

const font = Afacad({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const bottomRef = useRef(null); // Reference to the bottom of the page

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop loading after 2 seconds
    }, 1000);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  // Function to scroll to the bottom section
  const scrollToBottom = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <html
      lang="en"
      className="scrollbar-custom scroll-smooth overflow-y-scroll h-64"
    >
      <head>
        <title>Green Factor</title>
        <link rel="shortcut icon" href="/Gf-logo.png" type="image/x-icon" />
      </head>
      <body c className={font.className}>
        {isLoading ? (
          <Loader /> // Display loader while isLoading is true
        ) : (
          <>
            <Header />
            <div className="relative">
              {children}
              <div ref={bottomRef} /> {/* Reference for scrolling */}
            </div>
            <Footer />
            {/* Scroll Down Button */}
            <div className="hidden md:flex fixed right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
              <div
                className="flex flex-col items-center"
                onClick={scrollToBottom}
              >
                <div className="text-white py-2 px-4 transition-transform transform">
                  <h2 className="text-xs text-gray-500 font-semibold mx-10 transform rotate-90">
                    Scroll Down
                  </h2>
                </div>
                <Image
                  src="/slide.svg"
                  alt="slide"
                  fill
                  className="rotate-90 mx-5 animate-pulse"
                />
              </div>
            </div>
          </>
        )}
      </body>
    </html>
  );
}
