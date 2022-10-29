import React, { useState } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Button from "./Button";
import Heading from "./Heading";

function Notes() {
  const newDataString = localStorage.getItem("data") || "[]";
  const local = JSON.parse(newDataString);
  const [data, setData] = useState(local);

  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const handleInputChange = (event) => setInput(event.target.value);
  const handleButtonClick = () => setOpen(!open);
  const handleSaveClick = () => {
    let newInput = input.trim();
    if (newInput != "") {
      const newData = [...data, input];
      const newDataString = JSON.stringify(newData);
      localStorage.setItem("data", newDataString);
      setData(newData);
    }
    setInput("");
    setOpen(false);
  };

  const handleDelete = (id) => {
    console.log(id);
    const newData = data.filter((item, index) => {
      console.log(item);
      console.log(index);
      return index !== id;
    });
    const newDataString = JSON.stringify(newData);
    localStorage.setItem("data", newDataString);
    setData(newData);
  };
  const handleCancelClick = () => {
    setInput();
    setOpen(false);
  };
  console.log(data);
  return (
    <div className="py-4 text-rose-600 font-semibold bg-lime-300">
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      {!open && (
        <div className="flex flex-col items-center justify-center">
          <Heading>Click button to add notes</Heading>
          <div className="w-32 h-10 mt-6">
            <Button onClick={handleButtonClick}>ADD NOTES</Button>
          </div>
        </div>
      )}
      {open && (
        <div>
          <div className="flex justify-center space-x-16 mb-2">
            <div className="w-32 h-10 mt-6">
              <Button onClick={handleSaveClick}>SAVE</Button>
            </div>
            <div className="w-32 h-10 mt-6">
              <Button onClick={handleCancelClick}>CANCEL</Button>
            </div>
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
      <div className=""></div>
      <div className="py-4">
        {!open && data.length == 0 && (
          <div className="space-y-4">
            <Heading>Nothing has been added yet.</Heading>
            <Heading>Add something to see them here.</Heading>
          </div>
        )}
        {!open &&
          data.map((item, index) => {
            return (
              <div
                key={item}
                className="px-2 my-2 flex items-center justify-between"
              >
                <div className="font-semibold">
                  <span className="text-black font-semibold">
                    {index + 1}.{" "}
                  </span>
                  <span>{item}</span>
                </div>
                <div className="text-xl text-blue-500">
                  <RiDeleteBin2Fill onClick={() => handleDelete(index)} />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Notes;
