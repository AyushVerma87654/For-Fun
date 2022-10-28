import React from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";

function Pattern() {
  return (
    <div className="bg-lime-500 text-rose-600 h-64">
      <Link to="/numberpattern">
        <div className="h-20">
          <Heading> Number Pattern</Heading>
        </div>
      </Link>
      <Link to="/starpattern">
        <div className="h-20">
          <Heading>Star Pattern</Heading>
        </div>
      </Link>
    </div>
  );
}

export default Pattern;
