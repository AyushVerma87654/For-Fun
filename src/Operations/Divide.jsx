import React, { useEffect } from "react";

function Divide({ num, setNum, operator, setOperator, react, setResult }) {
  let i,
    token,
    j,
    k = num.length,
    newNum = [],
    newOperator = [];
  useEffect(() => {
    if (react == 1) {
      for (i = 0; i < k; i++) {
        if (operator[i] == "/") {
          const result = num[i] / num[i + 1];

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
    setResult(1);
  }, [num, operator, react]);

  return <div></div>;
}

export default Divide;
