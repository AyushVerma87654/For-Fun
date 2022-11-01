import React from "react";

export function fcall({ symbol, value, k, setReact, operator }) {
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

export function extract({
  k,
  setNum,
  setOperator,
  mainNum,
  mainOperator,
  // setBracket,
}) {
  let localNum = [],
    localOperator = [],
    firstoperator,
    secondoperator,
    firstnum,
    secondnum;

  for (let i = 0; i < k; i++) {
    if (mainOperator[i] == "(" || mainOperator[i] == ")") {
      if (mainOperator[i] == "(") {
        firstoperator = i + 1;
      } else if (mainOperator[i] == ")") {
        secondoperator = i - 1;
      }
      for (let z = firstoperator; z <= secondoperator; z++) {
        let newOperator = mainOperator[z];
        localOperator = [...localOperator, newOperator];
      }
      setOperator(localOperator);
      localOperator = [];
    }

    if (mainNum[i] == "(" || mainNum[i] == ")") {
      if (mainNum[i] == "(") {
        firstnum = i + 1;
      } else if (mainNum[i] == ")") {
        secondnum = i - 1;
      }
      for (let z = firstnum; z <= secondnum; z++) {
        let newNum = mainNum[z];
        localNum = [...localNum, newNum];
      }
      setNum(localNum);
      localNum = [];
    }
  }
}

export function setData({
  mainOperator,
  mainNum,
  num,
  setMainOperator,
  setMainNum,
  k,
}) {
  let localNum = [],
    localOperator = [],
    firstoperator,
    secondoperator,
    firstnum,
    secondnum;
  let token = 0;
  for (let j = 0; j < k; j++) {
    if (
      mainOperator[j] == "(" ||
      mainOperator[j] == ")" ||
      mainNum[j] == "(" ||
      mainNum[j] == ")"
    ) {
      token = 1;
    }
  }

  if (token == 1) {
    token = 0;
    for (let j = 0; j < mainOperator.length; j++) {
      if (mainOperator[j] == "(") {
        firstoperator = j;
      } else if (mainOperator[j] == ")") {
        secondoperator = j;
      }
    }
    for (let j = 0; j < firstoperator; j++) {
      const newOperator = mainOperator[j];
      localOperator = [...localOperator, newOperator];
    }
    for (let j = secondoperator + 1; j < mainOperator.length; j++) {
      const newOperator = mainOperator[j];
      localOperator = [...localOperator, newOperator];
    }
    console.log("localOperator", localOperator);
    setMainOperator(localOperator);
    // setOperator(localOperator);
    localOperator = [];

    for (let j = 0; j < mainNum.length; j++) {
      if (mainNum[j] == "(") {
        firstnum = j;
      } else if (mainNum[j] == ")") {
        secondnum = j;
      }
    }
    for (let j = 0; j < firstnum; j++) {
      const newNum = mainNum[j];
      localNum = [...localNum, newNum];
    }
    localNum[firstnum] = num[0] || 0;
    for (let j = secondnum + 1; j < mainNum.length; j++) {
      const newNum = mainNum[j];
      localNum = [...localNum, newNum];
    }
    console.log("localNum", localNum);
    setMainNum(localNum);
    // setNum(localNum);
    localNum = [];
  }
}
