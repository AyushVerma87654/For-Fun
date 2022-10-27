import React from "react";

function Heading({ children }) {
  return (
    <div className="flex items-center px-2 justify-center h-full w-full text-3xl font-bold">
      {children}
    </div>
  );
}

export default Heading;
