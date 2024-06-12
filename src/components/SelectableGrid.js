import React, { useState } from "react";

const SelectableGrid = ({ columns = 10, rows = 10 }) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [selectedBoxes, setSelectedBoxes] = useState([]);
  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseDown = (index) => {
    setIsMouseDown(true);
    setSelectedBoxes([index]);
  };

  const handleMouseEnter = (index) => {
    if (isMouseDown) {
      const startBox = selectedBoxes[0];
      const endBox = index;
      const startRow = Math.floor((startBox - 1) / columns);
      const startColumn = (startBox - 1) % columns;
      const endRow = Math.floor((endBox - 1) / columns);
      const endColumn = (endBox - 1) % columns;
      const minRow = Math.min(startRow, endRow);
      const maxRow = Math.max(startRow, endRow);
      const minColumn = Math.min(startColumn, endColumn);
      const maxColumn = Math.max(startColumn, endColumn);

      const selected = [];
      for (let i = minRow; i <= maxRow; i++) {
        for (let j = minColumn; j <= maxColumn; j++) {
          selected.push(i * columns + j + 1);
        }
      }
      setSelectedBoxes(selected);
    }
  };

  const selectedBoxesSet = new Set(selectedBoxes);

  return (
    <div
      className="grid"
      style={{ "--rows": rows, "--columns": columns }}
      onMouseUp={handleMouseUp}
    >
      {[...Array(columns * rows)].map((_, i) => (
        <div
          onMouseDown={() => handleMouseDown(i + 1)}
          onMouseEnter={() => handleMouseEnter(i + 1)}
          className={`box ${
            selectedBoxesSet.has(i + 1) ? "selected-grid" : ""
          }`}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
};

export default SelectableGrid;
