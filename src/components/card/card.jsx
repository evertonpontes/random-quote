import React from "react";

function Card({ children }) {
  return <div className="rounded-xl bg-cardBg px-5 py-3 m-2 max-w-2xl md:min-w-[600px] bg-black bg-opacity-60">{ children }</div>;
}

export default Card;