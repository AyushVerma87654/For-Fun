import React from "react";

function Button({ children, onClick }) {
  return (
    <button
      className="bg-green-500 mb-2 rounded-md h-10 w-28 text-xl font-semibold"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
