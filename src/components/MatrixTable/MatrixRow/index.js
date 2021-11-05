import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { deleteRow } from "../../../store/matrixReducer/actions";
import "./MatrixRow.css";

const MatrixRow = ({ row, index }) => {
  const dispatch = useDispatch();

  const sumRow = useMemo(
    () => row.reduce((acc, currentCell) => acc + currentCell.value, 0),
    [row]
  );

  const buttonClickHandler = () => {
    dispatch(deleteRow(index));
  };

  return (
    <div>
      {row.map((cell) => (
        <span key={cell.amount}>{cell.value}</span>
      ))}
      <span>{sumRow}</span>
      <button onClick={buttonClickHandler}>delete</button>
    </div>
  );
};

export default MatrixRow;
