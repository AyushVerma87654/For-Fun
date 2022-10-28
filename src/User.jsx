import React, { useState } from "react";
import { Navigate } from "react-router";
import Body from "./Body";
import Button from "./Button";
import Heading from "./Heading";
import Input from "./Input";
import withUser from "./withUser";

function User({ name, setName }) {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => setInput(event.target.value);
  const handleButtonClick = () => {
    localStorage.setItem("name", input);
    setName(input);
    setInput("");
  };

  if (name) {
    return <Navigate to="/body" />;
  }
  return (
    <div>
      <div className="flex flex-col py-8 space-y-4 h-auto text-yellow-300 items-center bg-lime-500">
        <Heading>Hey User, Enter Your Name To Continue.....</Heading>

        <div className="flex flex-col items-center space-y-2 pb-2">
          <div className="h-10 w-40">
            <Input
              placeholder="Your Name"
              value={input}
              onChange={handleInputChange}
            />
          </div>
          <Button onClick={handleButtonClick}>SUBMIT</Button>
        </div>
      </div>
    </div>
  );
}

export default withUser(User);
