import React from "react";
import Button from "./ForButton";
import Heading from "./Heading";
import withUser from "./withUser";

function NavBar({ name, setName }) {
  const handleResetClick = () => {
    localStorage.removeItem("name");
    setName("");
  };
  return (
    <div>
      <div className="flex flex-col text-yellow-300 items-center bg-indigo-500">
        <Heading>This is my website</Heading>
        {name && (
          <div className="flex flex-col items-center">
            <Heading>Hey {name}, Welcome back.....</Heading>
            <Button onClick={handleResetClick}>NEW USER</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default withUser(NavBar);
