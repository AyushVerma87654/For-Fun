import React from "react";
import { Link, Navigate } from "react-router-dom";
import Heading from "./Heading";
import withUser from "./withUser";

function Body({ name }) {
  if (!name) {
    return <Navigate to="/" />;
  }
  return (
    <div className="h-full">
      <div className="flex flex-col items-center space-y-3 text-rose-600 justify-center font-semibold text-xl bg-lime-500 py-2">
        <Heading>Here are the list of the provided functions</Heading>
        <Link to="/todo">To Do App</Link>
        <Link to="/patterns">Various Patterns</Link>
        {/* <Link to="/todo">To Do App</Link>
          <Link to="/todo">To Do App</Link>
          <Link to="/todo">To Do App</Link>
          <Link to="/todo">To Do App</Link>
          <Link to="/todo">To Do App</Link>
          <Link to="/todo">To Do App</Link> */}
      </div>
    </div>
  );
}

export default withUser(Body);
