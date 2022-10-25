import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import NumberPattern from "./NumberPattern";
import Pattern from "./Pattern";
import StarPattern from "./StarPattern";
import Todo from "./Todo";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/todo" element={<Todo />} />
        <Route path="/patterns" element={<Pattern />} />
        <Route path="/numberpattern" element={<NumberPattern />} />
        <Route path="/starpattern" element={<StarPattern />} />
      </Routes>
    </div>
  );
}

export default App;
