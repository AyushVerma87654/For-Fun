import React, { useEffect, useState } from "react";
import CalculatorButton from "./CalculatorButton";
import Input from "./Input";

function OnScreenCalculator() {
  const [show, setShow] = useState("");
  const [total, setTotal] = useState(0);
  const [num, setNum] = useState([]);
  const [operator, setOperator] = useState([]);
  const handleInputChange = () => {};
  const handleButtonClick = (data) => {
    const newData = show + data;
    setShow(newData);
  };
  useEffect(() => {
    let i,
      numb = "";
    for (i = 0; i < show.length; i++) {
      if (
        show[i] == 1 ||
        show[i] == 2 ||
        show[i] == 3 ||
        show[i] == 4 ||
        show[i] == 5 ||
        show[i] == 6 ||
        show[i] == 7 ||
        show[i] == 8 ||
        show[i] == 9 ||
        show[i] == 0 ||
        show[i] == "."
      ) {
        console.log(show[i]);
        numb += show[i];
      } else if (
        show[i] == "+" ||
        show[i] == "-" ||
        show[i] == "*" ||
        show[i] == "/"
      ) {
        setOperator(show[i]);
        if (numb != "") {
          numb = "";
          setNum(numb);
        }
      } else if (show[i] == "C") {
        setShow("");
      }
    }
  }, [show]);
  console.log(show);
  console.log(operator);
  return (
    <div>
      <div className="border-2 border-black">
        <Input value={show} onChange={handleInputChange} />
        <div>
          <div className="flex items-center justify-center">
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick(7)}>
                7
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick(8)}>
                8
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick(9)}>
                9
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick("/")}>
                /
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick("C")}>
                C
              </CalculatorButton>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick(4)}>
                4
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick(5)}>
                5
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick(6)}>
                6
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick("*")}>
                *
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton
                onClick={() => handleButtonClick()}
              ></CalculatorButton>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick(1)}>
                1
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick(2)}>
                2
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick(3)}>
                3
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick("-")}>
                -
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton></CalculatorButton>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-10 w-14 p-2">
              <CalculatorButton></CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick(0)}>
                0
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick(".")}>
                .
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick("+")}>
                +
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick("=")}>
                =
              </CalculatorButton>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-10 w-14 p-2">
              <CalculatorButton></CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton></CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton></CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton></CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton></CalculatorButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnScreenCalculator;
