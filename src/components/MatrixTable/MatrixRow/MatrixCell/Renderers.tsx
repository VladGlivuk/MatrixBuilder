import React, { useMemo, useState } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import {
  findTheClosestCellByValue,
  increment,
  onMouseLeaveCell,
} from "../../../../store/matrixReducer/actions";
import "./MatrixCell.css";

interface cellProps {
  value: number,
  id: string,
  cell:object
} 

export const DefaultCell: React.FC <cellProps> = ({ cell }) => {
  const dispatch: Dispatch<any>  = useDispatch();

  const [isCellHover, setIsCellHover] = useState(false);

  const closestCells = useSelector((store) => store.matrix.closestCells);

  const { value, id } = cell;
  let isClosest;

  if (closestCells) {
    isClosest = !!closestCells?.find((item) => item.id === id);
  }

  const handleIncrement = () => {
    dispatch(increment(id));
    handleEnterFindCellByValue();
  };

  const handleEnterFindCellByValue = () => {
    dispatch(findTheClosestCellByValue(cell));
    setIsCellHover(true);
  };

  const handleLeaveFindCellByValue = () => {
    dispatch(onMouseLeaveCell(cell));
    setIsCellHover(false);
  };

  return (
    <div
      style={isClosest ? { backgroundColor: "#E8FF00" } : undefined}
      className={isCellHover ? "hoveredCell" : "cell"}
      onMouseEnter={handleEnterFindCellByValue}
      onMouseLeave={handleLeaveFindCellByValue}
      onClick={handleIncrement}
    >
      {value}
    </div>
  );
};

interface percentCellProps {
  sumRow: number,
  cellValue:number
}

export const PercentCell: React.FC <percentCellProps> = ({ sumRow, cellValue }) => {
  const percentBySum = useMemo(() => {
    return Math.floor((cellValue / sumRow) * 100);
  }, [sumRow, cellValue]);

  return (
    <div
      style={{
        background: `linear-gradient(white ${100 - percentBySum}%, red 100%)`,
      }}
      className="cell"
    >
      {percentBySum}%
    </div>
  );
};
