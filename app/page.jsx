"use client";
import React from "react";
import Video from "@/components/Video/Video";
import Service from "@/components/Service/Service";
import Image from "next/image";
import Text from "@/components/Text/Text";
import Slider from "@/components/Slider/Slider";

// Sample array of video sources
const videos = [
  { id: 1, src: "/video.mp4" }, // Replace with actual video sources
  { id: 2, src: "/video2.mp4" },
  { id: 3, src: "/video3.mp4" },
  { id: 4, src: "/video4.mp4" },
];
const images = [
  { id: 1, src: "/brand1.jpg" },
  { id: 2, src: "/brand2.jpg" },
  { id: 3, src: "/brand3.jpg" },
];

const Home = () => {
  return (
    <div className="bg-gray-100 h-full w-full flex relative">
      <div className="flex-1 overflow-y-scroll scroll-hidden">
        {/* <Text /> */}
        <Video videos={videos} />
        <Slider images={images} />
        <Video videos={videos} />
        {/* <Service /> */}
      </div>
      <div className="hidden md:flex flex-col items-center justify-center fixed right-4 top-1/2 transform -translate-y-1/2">
        <h2 className="text-xs text-gray-500 font-semibold transform rotate-90">
          Scroll Down{" "}
          <Image
            src={"/slide.svg"}
            width={30}
            height={10}
            alt="slide"
            className="text-gray-500"
          />
        </h2>
      </div>
    </div>
  );
};

export default Home;
