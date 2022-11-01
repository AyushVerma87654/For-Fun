import React, { useEffect, useState } from "react";
import { fcall, extract, setData, change } from "./Call";
import { CalculatorContext } from "./Context";
import Operation from "./Operation";
import Add from "./Operations/Add";
import Divide from "./Operations/Divide";
import Multiply from "./Operations/Multiply";
import Substraction from "./Operations/Substraction";
import SingleOperation from "./SingleOperation";
import { call } from "./utilities/Call";

function CalculatorTotal({ number, oper, setTotal }) {
  const [num, setNum] = useState([]);
  const [operator, setOperator] = useState([]);
  const [mainNum, setMainNum] = useState([]);
  const [mainOperator, setMainOperator] = useState([]);
  const [symbol, setSymbol] = useState("");
  const [react, setReact] = useState(0);
  const [result, setResult] = useState(0);
  const [mainResult, setMainResult] = useState(0);
  const [reload, setReload] = useState(false);

  let k;
  if (mainNum.length > mainOperator.length) {
    k = mainNum.length;
  } else if (mainNum.length <= mainOperator.length) {
    k = mainOperator.length;
  }

  console.log("Main", mainNum, mainOperator);
  console.log("Num", num, operator);
  console.log("mainResult", mainResult);

  function da({ symbol, value, k, setReact, operator }) {
    for (let i = 0; i < k; i++) {
      if (operator[i] == symbol) {
        setReact(value);
        if (result == value) {
          continue;
        } else {
          const timeout = setTimeout(3 * 1000);
          return () => clearTimeout(timeout);
        }
      }
    }
  }

  useEffect(() => {
    setMainOperator(oper);
    setMainNum(number);
    setReact(0);
    setNum([]);
    setOperator([]);
  }, [number, oper]);
  useEffect(() => {
    let token = 0;
    for (let i = 0; i < k; i++) {
      if (mainNum[i] == "(" || mainNum[i] == ")") {
        token = 1;
        break;
      }
    }
    if (token == 0) {
      setNum(mainNum);
      setOperator(mainOperator);
    }
  }, [mainNum, mainOperator]);

  // console.log("react", react);
  // const symbols = ["/", "*", "-", "+"];
  // useEffect(() => {
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

  // console.log("k", k);

  // for (let i = 0; i < k; i++) {
  //   if (operator[i] == "sq" || operator[i] == "%" || operator[i] == "sqrt") {
  //     console.log("i", i);
  //     console.log("operator", operator[i]);
  //   }
  // }

  useEffect(() => {
    extract({
      k,
      setNum,
      setOperator,
      mainNum,
      mainOperator,
    });

    if (mainResult == 2) {
      setMainResult(0);

      setData({
        mainOperator,
        mainNum,
        num,
        setMainOperator,
        setMainNum,
        k,
      });
    }
  }, [mainNum, mainOperator, mainResult]);

  useEffect(() => {
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

    change({ num, operator, setNum, setOperator });

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
    // changeNum();

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
    if (num.length == 1 && operator.length == 0 && num[0] != "-") {
      setTotal(num[0]);
      setMainResult(2);
    } else {
      setReload(!reload);
    }
  }, [num, operator, result]);
  // console.log("operator", operator);
  // console.log("num", num);
  // console.log("react", react);

  return (
    <div>
      <CalculatorContext.Provider
        value={{
          num,
          k,
          setReact,
          setNum,
          operator,
          setOperator,
          react,
          result,
          setResult,
          mainNum,
          setMainNum,
          mainOperator,
          setMainOperator,
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
