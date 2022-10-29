import React from "react";
import { ImCross } from "react-icons/im";

function Display({ data, onAdd, show, checked, readOnly, removeDone }) {
  return (
    <div className="my-2 space-y-2">
      <div className="flex space-x-2 items-center">
        <input
          readOnly={readOnly}
          checked={checked}
          className="-mb-1"
          type="checkbox"
          onClick={() => onAdd(data)}
        />
        <p>{data}</p>
        {show && (
          <ImCross className="w-2 text-end" onClick={() => removeDone(data)} />
        )}
      </div>
    </div>
  );
}

export default Display;
