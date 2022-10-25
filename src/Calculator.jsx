import React, { useState } from "react";
import Calculate from "./Calculate";
import Button from "./ForButton";
import Heading from "./Heading";
import Input from "./Input";

function Calculator() {
  const [input, setInput] = useState(0);
  const [click, setClick] = useState(false);
  const [num, setNum] = useState(0);
  const handleChange = (event) => setInput(+event.target.value);
  const handleClick = () => {
    setNum(input);
    setClick(true);
  };

  return (
    <div className="pb-2 text-rose-600">
      {!click ? (
        <div>
          <Heading>What do you want to calculate?</Heading>
          <div className="flex flex-col items-center justify-center text-xl font-semibold">
            <div>Enter 1 For Addition</div>
            <div>Enter 2 For Substraction</div>
            <div>Enter 3 For Multiplication</div>
            <div>Enter 4 For Division</div>
            <div>Enter 5 For Percentage</div>
            <div>Enter 6 For Square</div>
            <div>Enter 7 For SquareRoot</div>
            <div>Enter 8 For Reverse</div>
            <div>Enter 9 For Exponents</div>
            <div>Enter 10 For Log</div>
            <div>Enter 11 For Ln</div>
            <div>Enter 12 For AntiLog</div>
            <div>Enter 13 For AntiLn</div>
            <div>Enter 14 For Modulus</div>
            <div>Enter 15 For Pie</div>
            <div>Enter 16 For (</div>
            <div>Enter 17 For )</div>
            <div>Enter 18 For Factorial</div>
            <div>Enter 19 For Decimal</div>
            <div>Enter 20 For Cancel</div>
            <div>Enter 21 For Equal</div>
            <div>Enter For </div>
            <div>Enter For </div>
            <div>Enter For </div>
            <div>Enter For </div>
            <div>Enter For </div>
            <div>Enter For </div>
            <div>Enter For </div>
            <div>Enter For </div>
            <div>Enter For </div>
            <div>Enter For </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="h-10 w-40">
              <Input value={input} onChange={handleChange} type="number" />
            </div>
            <div className="h-10 w-40">
              <Button onClick={handleClick}>Submit</Button>
            </div>
          </div>
        </div>
      ) : (
        <Calculate num={num} />
      )}
    </div>
  );
}

export default Calculator;
