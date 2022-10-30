import React, { useContext, useEffect } from "react";
import { CalculatorContext } from "./Context";

function SingleOperation({ value, symbol }) {
  let { num, setNum, operator, setOperator, react, setResult } =
    useContext(CalculatorContext);

  let i,
    token,
    j,
    k = operator.length,
    newNum = [],
    newOperator = [];

  useEffect(() => {
    for (i = 0; i < k; i++) {
      let result;
      if (operator[i] == symbol) {
        if (symbol == "sq") {
          result = num[i] * num[i];
        } else if (symbol == "%") {
          result = num[i] * 100;
        } else if (symbol == "sqrt") {
          result = Math.sqrt(num[i]);
        }
        console.log("result", result);
        console.log(i);

        for (j = 0; j < i; j++) {
          token = 1;
          newNum = [...newNum, +num[j]];
          newOperator = [...newOperator, operator[j]];
        }
        newNum[i] = result;
        token = 1;
        for (j = i + 1; j < k; j++) {
          token = 1;
          newNum = [...newNum, +num[j]];
          newOperator = [...newOperator, operator[j]];
        }
      }

      if (token == 1) {
        setNum(newNum);
        setOperator(newOperator);
        token = 0;
        break;
      }
    }

    setResult(value);
  }, [react]);

  return <div></div>;
}

export default SingleOperation;
