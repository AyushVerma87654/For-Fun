import React, { useEffect, useState } from "react";
import Call from "./Call";
import { CalculatorContext } from "./Context";
import Operation from "./Operation";
import Add from "./Operations/Add";
import Divide from "./Operations/Divide";
import Multiply from "./Operations/Multiply";
import Substraction from "./Operations/Substraction";
import SingleOperation from "./SingleOperation";
import { call } from "./utilities/Call";

function CalculatorTotal({ number, oper, setTotal }) {
  // add mainNum and setMainNum useState
  // add mainOperator and setMainOperator useState
  const [num, setNum] = useState([]);
  const [operator, setOperator] = useState([]);
  const [symbol, setSymbol] = useState("");
  const [react, setReact] = useState(0);
  const [result, setResult] = useState(0);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    // data will now be stored in mainNum and mainOperator instead of num and operator
    setOperator(oper);
    setNum(number);
    setReact(0);
  }, [number, oper]);

  // console.log("react", react);
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

    let k = operator.length;

    // for (let i = 0; i < k; i++) {
    //   if (operator[i] == "sq" || operator[i] == "%" || operator[i] == "sqrt") {
    //     console.log("i", i);
    //     console.log("operator", operator[i]);
    //   }
    // }

    for (let i = 0; i < k; i++) {
      let first, second;
      if (operator[i] == "(") {
        first = i;
      } else if (operator[i] == ")") {
        second = i;
      }
      // creation of newNum and newOperator
      setReact(11);
      // setNum(newNum)
      // setOperator(newOperator)
      if (result == 11) {
        // remove paranthesis from mainNum and mainOperator
        // setNum(mainNum)
        // setOperator(mainOperator)
        continue;
      } else {
        const timeout = setTimeout(3 * 1000);
        return () => clearTimeout(timeout);
      }
    }

    for (let i = 0; i < k; i++) {
      if (
        operator[i] == "sq" ||
        operator[i] == "%" ||
        operator[i] == "!" ||
        operator[i] == "sqrt"
      ) {
        const newReact = react + 1;
        setReact(newReact);
        setSymbol(operator[i]);
        if (result == 1) {
          continue;
        } else {
          const timeout = setTimeout(3 * 1000);
          return () => clearTimeout(timeout);
        }
      }
    }
    for (let i = 0; i < k; i++) {
      if (operator[i] == "/") {
        setReact(11);
        if (result == 11) {
          continue;
        } else {
          const timeout = setTimeout(3 * 1000);
          return () => clearTimeout(timeout);
        }
      }
    }
    for (let i = 0; i < k; i++) {
      if (operator[i] == "*") {
        setReact(12);
        if (result == 12) {
          continue;
        } else {
          const timeout = setTimeout(3 * 1000);
          return () => clearTimeout(timeout);
        }
      }
    }
    for (let i = 0; i < k; i++) {
      if (operator[i] == "-") {
        setReact(13);
        if (result == 13) {
          continue;
        } else {
          const timeout = setTimeout(3 * 1000);
          return () => clearTimeout(timeout);
        }
      }
    }
    for (let i = 0; i < k; i++) {
      if (operator[i] == "+") {
        setReact(14);
        if (result == 14) {
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
        value={{
          num,
          setReact,
          setNum,
          operator,
          setOperator,
          react,
          setResult,
        }}
      >
        <SingleOperation value="1" symbol={symbol} />
        <Operation value="11" />
        <Operation value="12" />
        <Operation value="13" />
        <Operation value="14" />
      </CalculatorContext.Provider>
    </div>
  );
}

export default CalculatorTotal;
