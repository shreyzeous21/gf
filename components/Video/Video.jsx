"use client";
import React from "react";

const Video = ({ videos }) => {
  return (
    <div className="flex flex-col items-center p-4">
      {videos.map((video, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-full sm:w-[80%] md:w-[60%] h-auto mb-3 p-4" // Full width on phones, 80% on small screens, 60% on medium and larger
        >
          <video
            className="w-full h-auto object-cover rounded-lg" // Responsive width and auto height
            autoPlay
            loop
            muted // Optional: Mute videos if needed for autoplay
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
};

export default Video;
