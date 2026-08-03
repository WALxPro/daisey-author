import React from "react";

const Heading = ({ text, highlight }) => {
  return (
    <h2
      className="
        my-5
        font-serif
        text-2xl
        leading-tight
        text-ink
        md:text-5xl
      "
    >
      {text}
      {highlight && <span className="shimmer"> {highlight}</span>}
    </h2>
  );
};

export default Heading;