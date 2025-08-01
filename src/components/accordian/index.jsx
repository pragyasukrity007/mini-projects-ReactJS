//single selection
//multiple selection

import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selectedId, setSelectedId] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multipleSelectedId, setMultipleSelectedId] = useState([]);

  const handleSingleSelection = (index) => {
    setSelectedId(index === selectedId ? null : index);
  };

  const handleMultiSelection = (index) => {
    let newMultipleSelectedId = [...multipleSelectedId];
    const findIndexOfCurrentId = newMultipleSelectedId.indexOf(index);
    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) {
      newMultipleSelectedId.push(index);
    } else {
     newMultipleSelectedId.splice(findIndexOfCurrentId, 1);
    }
    setMultipleSelectedId(newMultipleSelectedId);
    console.log(setMultipleSelectedId);
  };

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
                className="title"
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multipleSelectedId.indexOf(item.id) !== -1 && (
                    <div className="content">{item.answer} </div>
                  )
                : selectedId === item.id && (
                    <div className="content">{item.answer} </div>
                  )}
            </div>
          ))
        ) : (
          <div> No Data found! </div>
        )}
      </div>
    </div>
  );
}
