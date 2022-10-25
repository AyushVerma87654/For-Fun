import React from "react";
import { Link } from "react-router-dom";

function Pattern() {
  return (
    <div>
      <Link to="/numberpattern">Number Pattern</Link>
      <Link to="/starpattern">Star Pattern</Link>
    </div>
  );
}

export default Pattern;
