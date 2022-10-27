import React, { useContext, useEffect } from "react";
import { CalculatorContext } from "./Context";

function Operation({ value }) {
  let { num, setNum, operator, setOperator, react, setResult } =
    useContext(CalculatorContext);
  let i,
    token,
    j,
    k = num.length,
    newNum = [],
    symbol,
    newOperator = [];
  useEffect(() => {
    for (i = 0; i < k; i++) {
      let result;
      if (react == +value) {
        if (react == 1) {
          symbol = "/";
          result = num[i] / num[i + 1];
        } else if (react == 2) {
          symbol = "*";
          result = num[i] * num[i + 1];
        } else if (react == 3) {
          symbol = "-";
          result = num[i] - num[i + 1];
        } else if (react == 4) {
          symbol = "+";
          result = num[i] + num[i + 1];
        }
        console.log("result", result);
        if (operator[i] == symbol) {
          for (j = 0; j < i; j++) {
            token = 1;
            newNum = [...newNum, +num[j]];
            newOperator = [...newOperator, operator[j]];
          }
          newNum[i] = result;
          token = 1;
          for (j = i + 2; j < k; j++) {
            token = 1;
            newNum = [...newNum, +num[j]];
            newOperator = [...newOperator, operator[j - 1]];
          }
        }

        if (token == 1) {
          setNum(newNum);
          console.log(newNum);
          setOperator(newOperator);
          token = 0;
          break;
        }
      }
    }
    setResult(value);
  }, [num, operator, react]);

  return <div></div>;
}

export default Operation;
