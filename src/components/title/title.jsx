import React from "react";

function Title({ children }) {
  return (
    <h1 className="font-sans text-2xl font-bold mb-5 text-gray-300">{children}</h1>
  );
}

export default Title;
