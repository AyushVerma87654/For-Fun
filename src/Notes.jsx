import React, { useState } from "react";
import Button from "./ForButton";
import Heading from "./Heading";

function Notes() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const handleInputChange = (event) => setInput(event.target.value);
  const handleButtonClick = () => setOpen(!open);
  const handleSaveClick = () => {
    let newInput = input.trim();
    if (newInput != "") {
      setData([...data, input]);
    }
    setInput("");
    setOpen(false);
  };
  const handleCancelClick = () => {
    setInput();
    setOpen(false);
  };
  console.log(data);
  return (
    <div className="py-4 h-auto text-rose-600 bg-lime-300">
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>

      {!open && (
        <div className="">
          <Heading>Click button to add notes</Heading>
          <div className="flex items-center justify-center mt-6">
            <Button onClick={handleButtonClick}>Add Notes</Button>
          </div>
        </div>
      )}
      {open && (
        <div>
          <div className="flex justify-between px-2 mb-2">
            <Button onClick={handleSaveClick}>Save</Button>
            <Button onClick={handleCancelClick}>Cancel</Button>
          </div>
          <div className="h-96 mt-6 px-2 flex justify-center items-center">
            <textarea
              className="border-2 border-blue-500 focus:outline-none focus:border-rose-600"
              value={input}
              onChange={handleInputChange}
              rows="15"
              cols="50"
            ></textarea>
          </div>
        </div>
      )}
      {!open &&
        data.map((item, index) => {
          return (
            <div key={item} className="px-2">
              <span className="text-black font-semibold">{index + 1}. </span>
              <span>{item}</span>
            </div>
          );
        })}
    </div>
  );
}

export default Notes;
