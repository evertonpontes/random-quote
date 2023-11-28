import React from "react";

function Card({ children }) {
  return <div className="rounded-xl bg-cardBg border border-cardBorder text-textColor px-5 py-3 m-2">{ children }</div>;
}

export default Card;