import React, { useContext, useEffect } from "react";
import { CalculatorContext } from "./Context";

function SingleOperation({ value, symbol }) {
  let { num, setNum, setReact, operator, setOperator, react, setResult } =
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
        const number = +num[i];
        if (symbol == "sq") {
          result = number * number;
        } else if (symbol == "%") {
          result = number * 100;
        } else if (symbol == "sqrt") {
          result = Math.sqrt(number);
        } else if (symbol == "!") {
          result = 1;
          if (number != 0 || number != 1) {
            for (let t = 1; t <= number; t++) {
              result *= t;
            }
          }
        }

        result = JSON.stringify(result);

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
        setReact(0);
        token = 0;
        break;
      }
    }

    setResult(value);
  }, [react]);

  return <div></div>;
}

export default SingleOperation;
