import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "NJ's & NYC's #1 cleaning company",
          "Over 39 years of experience",
          "Same day and next day service available",
          "Fully licensed, insured and bonded",
          "Open 7 days a week",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  );
}

export default Type;

