import React from "react";

function CalculatePattern({ num, value }) {
  let s = [];

  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      if (value == 1) {
        s.push(j);
      } else {
        s.push("*");
      }
    }
    s.push(0);
  }

  return (
    <div className="flex flex-col my-4 px-20 justify-center text-xl text-rose-600 font-semibold">
      {s.map((item) => {
        if (item != 0) {
          return item;
        } else {
          return <div></div>;
        }
      })}
    </div>
  );
}

export default CalculatePattern;
