import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  findTheClosestCellByValue,
  increment,
  onMouseLeaveCell,
} from "../../../../store/matrixReducer/actions";

import { Cell } from "../../../../store/matrixReducer/types";
import { IStore } from "../../../../store";
import styles from "./DefaultCell.module.scss";

interface ICellProps {
  cell: Cell;
}

export const DefaultCell: FC<ICellProps> = ({ cell }) => {
  const dispatch = useDispatch();

  const [isCellHover, setIsCellHover] = useState(false);

  const closestCells = useSelector(
    (store: IStore) => store.matrix.closestCells
  );

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
      className={isCellHover ? styles.hoveredCell : styles.cell}
      onMouseEnter={handleEnterFindCellByValue}
      onMouseLeave={handleLeaveFindCellByValue}
      onClick={handleIncrement}
    >
      {value}
    </div>
  );
};


