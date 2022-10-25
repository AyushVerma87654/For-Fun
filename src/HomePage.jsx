import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./ForButton";

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
        {!name && (
          <div className="flex items-center justify-center h-20 w-full mb-2 text-3xl font-bold">
            Hey User, Enter Your Name To Continue.....
          </div>
        )}
        {name && (
          <div className="flex items-center justify-center h-20 w-full mb-2 text-3xl font-bold">
            Hey {name}, Welcome back.....
          </div>
        )}

        {!name && (
          <div className="flex flex-col items-center">
            <input
              className="h-10 p-2 w-40 mb-2 border-4 border-blue-500 focus:outline-none focus:border-red-500"
              placeholder="Your Name"
              value={input}
              onChange={handleInputChange}
            />

            <Button onClick={handleButtonClick}>SUBMIT</Button>
          </div>
        )}
        {name && <Button onClick={handleResetClick}>NEW USER</Button>}
      </div>
      {name && (
        <div className="flex flex-col items-center space-y-3 text-rose-600 justify-center font-semibold text-xl bg-lime-500 py-2 mt-2">
          <div className="flex items-center justify-center h-20 w-full mb-2 text-3xl font-bold">
            Here are the list of the provided functions
          </div>
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
    </div>
  );
}

export default HomePage;
