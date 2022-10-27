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
      <div className="flex flex-col text-yellow-300 items-center bg-indigo-500 h-full w-full">
        {!name && <Heading>This website is made only for fun...</Heading>}
        {name && (
          <div className="flex items-center">
            <div className="h-auto w-full pl-2 py-8">
              <Heading>Hey {name}, Welcome back.....</Heading>
            </div>
            <div className="h-auto w-auto mr-2">
              <Button onClick={handleResetClick}>NEW USER</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default withUser(NavBar);
