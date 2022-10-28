import React, { useState } from "react";
import Button from "./Button";
import Heading from "./Heading";
import Input from "./Input";

function StopWatch() {
  const [time, setTime] = useState(0);
  const [showTime, setShowTime] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [input, setInput] = useState(0);

  const timerr = (t) => {
    setTime(t);
    setShowTime(true);

    if (t > 0) {
      const timeoutt = setTimeout(() => timerr(t - 1), 1 * 1000);
      return () => clearTimeout(timeoutt);
    } else {
      setTime();
      setShowInput(false);
      setShowTime(false);
      setInput(0);
    }
  };

  const handleInputChange = (event) => setInput(event.target.value);

  const handleSubmitButton = () => {
    timerr(input);
    setShowTime(true);
  };

  const handleButtonClick = () => {
    setShowInput(!showInput);
  };

  return (
    <div className="text-rose-600 bg-lime-500 p-2 h-96 ">
      <div className="h-20">
        <Heading>Stop Watch Page</Heading>
      </div>
      <div className="flex items-center justify-center m-4">
        {!showInput && (
          <div className="w-32 h-10">
            <Button onClick={handleButtonClick}>Set Stop Watch</Button>
          </div>
        )}
      </div>
      {showInput && !showTime && (
        <div>
          <div className="flex items-center justify-center m-4 space-x-10">
            <div className="h-10 w-20">
              <Input type="number" value={input} onChange={handleInputChange} />
            </div>
            <div className="h-10 w-20">
              <Button onClick={handleSubmitButton}>SUBMIT</Button>
            </div>
          </div>
        </div>
      )}
      {time > 0 && (
        <div className="flex items-center justify-center m-12 text-9xl font-bold">
          {time}
        </div>
      )}
      <div></div>
      <div></div>
    </div>
  );
}

export default StopWatch;
