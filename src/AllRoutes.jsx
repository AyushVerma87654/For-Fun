import React from "react";
import { Route, Routes } from "react-router-dom";
import Body from "./Body";
// import Calculate from "./Calculate";
import CalculatePattern from "./CalculatePattern";
// import Calculator from "./Calculator";
import NumberPattern from "./NumberPattern";
import OnScreenCalculator from "./OnScreenCalculator";
import Pattern from "./Pattern";
import StarPattern from "./StarPattern";
import Todo from "./Todo";
import User from "./User";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/body" element={<Body />}></Route>
        <Route path="/todo" element={<Todo />} />
        <Route path="/patterns" element={<Pattern />} />
        <Route path="/numberpattern" element={<NumberPattern />} />
        <Route path="/starpattern" element={<StarPattern />} />
        <Route path="/calculatepattern" element={<CalculatePattern />} />
        <Route path="/onscreencalculator" element={<OnScreenCalculator />} />
        {/* <Route path="/calculator" element={<Calculator />} />
        <Route path="/calculate" element={<Calculate />} /> */}

        <Route index element={<User />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
