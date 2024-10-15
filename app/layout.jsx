"use client";

import React, { useState, useEffect, useRef } from "react";
import { Afacad } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Loader from "@/components/Loader";
import Image from "next/image";

const font = Afacad({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollUp, setShowScrollUp] = useState(false); // Track which button to show
  const bottomRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToBottom = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
      setShowScrollUp(true); // Show Scroll Up after scrolling down
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowScrollUp(false); // Show Scroll Down after scrolling up
  };

  return (
    <html lang="en" className="scrollbar-custom scroll-smooth overflow-y-scroll h-64 bg-gray-100">
      <head>
        <title>Green Factor</title>
        <link rel="shortcut icon" href="/Gf-logo.png" type="image/x-icon" />
      </head>
      <body className={font.className}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Header />
            <div className="relative">
              {children}
              <div ref={bottomRef} /> {/* Reference for scrolling */}
            </div>
            <Footer />

            {/* Scroll Button Container */}
            <div className="hidden md:flex fixed right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
              {/* Scroll Down Button */}
              {!showScrollUp && (
                <div className="flex flex-col items-center" onClick={scrollToBottom}>
                  <div className="text-white py-2 px-4 transition-transform transform">
                    <h2 className="text-xs text-gray-500 font-semibold mx-10 transform rotate-90">
                      Scroll Down
                    </h2>
                  </div>
                  <Image
                    src="/slide.svg"
                    alt="scroll down"
                    fill
                    className="rotate-90 mx-5 animate-pulse"
                  />
                </div>
              )}

              {/* Scroll Up Button */}
              {showScrollUp && (
                <div className="flex flex-col items-center" onClick={scrollToTop}>
                  <div className="text-white py-2 px-4 transition-transform transform">
                    <h2 className="text-xs text-gray-500 font-semibold mx-10 transform -rotate-90">
                      Scroll Up
                    </h2>
                  </div>
                  <Image
                    src="/slide.svg"
                    alt="scroll up"
                    fill
                    className="-rotate-90 mx-5 animate-pulse"
                  />
                </div>
              )}
            </div>
          </>
        )}
      </body>
    </html>
  );
}
