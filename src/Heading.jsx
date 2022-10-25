import React from "react";

function Heading({ children }) {
  return (
    <div className="flex items-center px-2 justify-center h-20 w-full mb-2 text-3xl font-bold">
      {children}
    </div>
  );
}

export default Heading;
