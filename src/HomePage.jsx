import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Button from "./ForButton";
import Heading from "./Heading";
import Input from "./Input";

function HomePage() {
  const [input, setInput] = useState("");
  const savedName = localStorage.getItem("name") || "";
  const [name, setName] = useState(savedName);

  const handleInputChange = (event) => setInput(event.target.value);
  const handleButtonClick = () => {
    localStorage.setItem("name", input);
    setName(input);
    setInput("");
  };
  const handleResetClick = () => {
    localStorage.removeItem("name");
    setName("");
    setInput("");
  };
  return (
    <div className="h-screen">
      <div className="flex flex-col text-yellow-300 items-center bg-indigo-500">
        {!name && <Heading>Hey User, Enter Your Name To Continue.....</Heading>}
        {name && <Heading>Hey {name}, Welcome back.....</Heading>}

        {!name && (
          <div className="flex flex-col items-center">
            <div className="h-10 w-40">
              <Input
                placeholder="Your Name"
                value={input}
                onChange={handleInputChange}
              />
            </div>

            <Button onClick={handleButtonClick}>SUBMIT</Button>
          </div>
        )}
        {name && <Button onClick={handleResetClick}>NEW USER</Button>}
      </div>
      {name && (
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
      )}
      <Footer />
    </div>
  );
}

export default HomePage;
