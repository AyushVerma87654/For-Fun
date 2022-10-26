import React from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";

function Pattern() {
  return (
    <div className="bg-lime-500 text-rose-600">
      <Link to="/numberpattern">
        <Heading> Number Pattern</Heading>
      </Link>
      <Link to="/starpattern">
        <Heading>Star Pattern</Heading>
      </Link>
    </div>
  );
}

export default Pattern;
