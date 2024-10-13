"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const Text = () => {
  const text = `We are Cog Culture, where the best of minds come together to become
  cogs of a larger wheel and deliver awesomeness. While our design
  philosophy reflects the society at large, we prefer delivering work that
  matters. We can be sharks, and we can be sharks. We love to morph ourselves
  into whatever our consumers need us to be to create the wow experience. Hey!
  BTW, we are The Design Agency of the Year 2019 at ABBY's Goafest, India.
  And, we are also The Still Craft Agency of the Year 2019 at ABBY's Goafest,
  India.`;

  return (
    <div className="flex flex-col justify-center text-center items-center">
      <div className=" w-full sm:w-[80%] md:w-[60%] text-center justify-center items-center h-auto m-10">
        <div className="w-[60%] h-[100vh] items-center rounded-lg bg-white border border-red-900 p-10">
          <Typewriter
            className="text-center" // Center the text
            options={{
              strings: [text],
              autoStart: true,
              loop: true,
              delay: 50, // Adjust delay as needed
              cursor: "|", // Customize cursor character
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Text;
