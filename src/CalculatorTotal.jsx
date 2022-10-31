import React, { useEffect, useState } from "react";
import { fcall, extract, setData } from "./Call";
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
  const [mainNum, setMainNum] = useState([]);
  const [mainOperator, setMainOperator] = useState([]);
  const [symbol, setSymbol] = useState("");
  const [react, setReact] = useState(0);
  const [result, setResult] = useState(0);
  const [mainResult, setMainResult] = useState(0);
  const [reload, setReload] = useState(false);
  // const [bracket, setBracket] = useState(false);

  let k;
  if (mainNum.length > mainOperator.length) {
    k = mainNum.length;
  } else if (mainNum.length <= mainOperator.length) {
    k = mainOperator.length;
  }

  console.log("Main", mainNum, mainOperator);
  console.log("Num", num, operator);
  console.log("mainResult", mainResult);

  useEffect(() => {
    // data will now be stored in mainNum and mainOperator instead of num and operator
    setMainOperator(oper);
    setMainNum(number);
    setReact(0);
    setNum([]);
    setOperator([]);
    // setBracket(false);
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
    // let localNum = [],
    //   localOperator = [],
    //   firstoperator,
    //   secondoperator,
    //   firstnum,
    //   secondnum;

    // for (let i = 0; i < k; i++) {
    //   if (mainOperator[i] == "(" || mainOperator[i] == ")") {
    //     if (mainOperator[i] == "(") {
    //       firstoperator = i + 1;
    //     } else if (mainOperator[i] == ")") {
    //       secondoperator = i - 1;
    //     }
    //     for (let z = firstoperator; z <= secondoperator; z++) {
    //       let newOperator = mainOperator[z];
    //       localOperator = [...localOperator, newOperator];
    //     }
    //     setOperator(localOperator);
    //     localOperator = [];
    //   }

    //   if (mainNum[i] == "(" || mainNum[i] == ")") {
    //     if (mainNum[i] == "(") {
    //       firstnum = i + 1;
    //     } else if (mainNum[i] == ")") {
    //       secondnum = i - 1;
    //     }
    //     for (let z = firstnum; z <= secondnum; z++) {
    //       let newNum = mainNum[z];
    //       localNum = [...localNum, newNum];
    //     }
    //     setNum(localNum);
    //     localNum = [];
    //   }
    // }

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

      // let token = 0;
      // for (let j = 0; j < k; j++) {
      //   if (
      //     mainOperator[j] == "(" ||
      //     mainOperator[j] == ")" ||
      //     mainNum[j] == "(" ||
      //     mainNum[j] == ")"
      //   ) {
      //     token = 1;
      //   }
      // }

      // if (token == 1) {
      //   // // setData();

      //   token = 0;
      //   for (let j = 0; j < mainOperator.length; j++) {
      //     if (mainOperator[j] == "(") {
      //       firstoperator = j;
      //     } else if (mainOperator[j] == ")") {
      //       secondoperator = j;
      //     }
      //   }
      //   for (let j = 0; j < firstoperator; j++) {
      //     const newOperator = mainOperator[j];
      //     localOperator = [...localOperator, newOperator];
      //   }
      //   for (let j = secondoperator + 1; j < mainOperator.length; j++) {
      //     const newOperator = mainOperator[j];
      //     localOperator = [...localOperator, newOperator];
      //   }
      //   console.log("localOperator", localOperator);
      //   setMainOperator(localOperator);
      //   // setOperator(localOperator);
      //   localOperator = [];

      //   for (let j = 0; j < mainNum.length; j++) {
      //     if (mainNum[j] == "(") {
      //       firstnum = j;
      //     } else if (mainNum[j] == ")") {
      //       secondnum = j;
      //     }
      //   }
      //   for (let j = 0; j < firstnum; j++) {
      //     const newNum = mainNum[j];
      //     localNum = [...localNum, newNum];
      //   }
      //   localNum[firstnum] = num[0];
      //   for (let j = secondnum + 1; j < mainNum.length; j++) {
      //     const newNum = mainNum[j];
      //     localNum = [...localNum, newNum];
      //   }
      //   console.log("localNum", localNum);
      //   setMainNum(localNum);
      //   // setNum(localNum);
      //   localNum = [];
      // }
    } else {
      const timeout = setTimeout(3 * 1000);
      return () => clearTimeout(timeout);
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
    if (num.length == 1 && operator.length == 0) {
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
