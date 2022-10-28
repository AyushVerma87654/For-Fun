import React, { useState } from "react";
import { Link } from "react-router-dom";
import CalculatePattern from "./CalculatePattern";
import Button from "./Button";
import Heading from "./Heading";
import Input from "./Input";

function NumberPattern() {
  const [input, setInput] = useState(0);
  const [num, setNum] = useState(0);
  const handleChange = (event) => setInput(+event.target.value);
  const handleClick = () => {
    setNum(input);
  };
  return (
    <div className="py-2 text-orange-500">
      <div className="h-20">
        <Heading>Enter a number till where you want to see the pattern</Heading>
      </div>
      <div className="flex items-center justify-center mt-4 gap-4">
        <div className="h-10 w-40">
          <Input value={input} onChange={handleChange} type="number" />
        </div>
        <div className="h-10 w-40">
          <Button onClick={handleClick}>Submit</Button>
        </div>
      </div>
      <CalculatePattern num={num} key={num} value="1" />
    </div>
  );
}

export default NumberPattern;
