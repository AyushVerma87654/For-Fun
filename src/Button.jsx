import React from "react";

function Button({ onClick, data, type, children }) {
  return (
    <button
      className="bg-green-500 text-yellow-300 flex items-center justify-center rounded-md text-lg w-full h-full"
      onClick={onClick}
      type={type}
    >
      {data}
      {children}
    </button>
  );
}

export default Button;
