import React, { useEffect, useState } from "react";
import Call from "./Call";
import { CalculatorContext } from "./Context";
import Operation from "./Operation";
import Add from "./Operations/Add";
import Divide from "./Operations/Divide";
import Multiply from "./Operations/Multiply";
import Substraction from "./Operations/Substraction";
import { call } from "./utilities/Call";

function CalculatorTotal({ number, oper, setTotal }) {
  // 12 + 43 - 12 * 2 / 4
  // [12 ,43 ,12  ,2,  4]
  //  0   1   2    3   4
  // [+,  -,  *,   /]
  const [num, setNum] = useState([]);
  const [operator, setOperator] = useState([]);
  const [react, setReact] = useState(0);
  const [result, setResult] = useState(0);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    setOperator(oper);
    setNum(number);
    setReact(0);
  }, [number, oper]);

  let k = num.length;
  console.log("react", react);
  // const symbols = ["/", "*", "-", "+"];
  useEffect(() => {
    // for (let i = 0; i < symbols.length; i++) {
    //   console.log(i);
    //   return (
    //     <Call
    //       symbol={symbols[i]}
    //       result={result}
    //       k={k}
    //       operator={operator}
    //       setReact={setReact}
    //       value={i + 1}
    //     />
    //   );
    // }
    // <Call />

    for (let i = 0; i < k; i++) {
      if (operator[i] == "/") {
        setReact(1);
        if (result == 1) {
          continue;
        } else {
          const timeout = setTimeout(3 * 1000);
          return () => clearTimeout(timeout);
        }
      }
    }
    for (let i = 0; i < k; i++) {
      if (operator[i] == "*") {
        setReact(2);
        if (result == 2) {
          continue;
        } else {
          const timeout = setTimeout(3 * 1000);
          return () => clearTimeout(timeout);
        }
      }
    }
    for (let i = 0; i < k; i++) {
      if (operator[i] == "-") {
        setReact(3);
        if (result == 3) {
          continue;
        } else {
          const timeout = setTimeout(3 * 1000);
          return () => clearTimeout(timeout);
        }
      }
    }
    for (let i = 0; i < k; i++) {
      if (operator[i] == "+") {
        setReact(4);
        if (result == 4) {
          continue;
        } else {
          const timeout = setTimeout(3 * 1000);
          return () => clearTimeout(timeout);
        }
      }
    }
    // useEffect(() => {
    if (num.length != 1 && operator.length != 0) {
      setReload(!reload);
    } else {
      setTotal(num);
    }
  }, [num, operator, result]);
  console.log("operator", operator);
  console.log("num", num);

  return (
    <div>
      <CalculatorContext.Provider
        value={{ num, setNum, operator, setOperator, react, setResult }}
      >
        <Operation value="1" />
        <Operation value="2" />
        <Operation value="3" />
        <Operation value="4" />
        {/* <Divide
        num={num}
        setNum={setNum}
        operator={operator}
        setOperator={setOperator}
        react={react}
        setResult={setResult}
      />
      <Multiply
        num={num}
        setNum={setNum}
        operator={operator}
        setOperator={setOperator}
        react={react}
        setResult={setResult}
      />
      <Add
        num={num}
        setNum={setNum}
        operator={operator}
        setOperator={setOperator}
        react={react}
        setResult={setResult}
      />
      <Substraction
        num={num}
        setNum={setNum}
        operator={operator}
        setOperator={setOperator}
        react={react}
        setResult={setResult}
      /> */}
      </CalculatorContext.Provider>
    </div>
  );
}

export default CalculatorTotal;
