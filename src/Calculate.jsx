import React, { useState } from "react";
import Button from "./ForButton";
import Heading from "./Heading";
import Input from "./Input";

function Calculate({ num }) {
  const [input, setInput] = useState(0);
  const [data, setData] = useState([]);
  const handleChange = (event) => setInput(+event.target.value);
  const handleClick = () => {
    if (input != 0) {
      const newData = [...data, input];
      setData(newData);
    } else {
      return 0;
    }
  };
  console.log(data);

  return (
    <div>
      <Heading>Enter all numbers and enter 0 for exit</Heading>
      <div className="flex items-center justify-center gap-4">
        <div className="h-10 w-40">
          <Input value={input} onChange={handleChange} type="number" />
        </div>
        <div className="h-10 w-40">
          <Button onClick={handleClick}>Submit</Button>
        </div>
      </div>
    </div>
  );
}

export default Calculate;
