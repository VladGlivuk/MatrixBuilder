import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteRow } from "../../../store/matrixReducer/actions";
import { DefaultCell, PercentCell } from "./MatrixCell/Renderers";
import "./MatrixRow.css";

const MatrixRow = ({ row, index }) => {
  const dispatch = useDispatch();
  const [isSumHover, setIsSumHover] = useState(false);

  const sumRow = useMemo(
    () => row.reduce((acc, currentCell) => acc + currentCell.value, 0),
    [row]
  );

  const buttonClickHandler = () => {
    dispatch(deleteRow(index));
  };

  return (
    <div className="row">
      <span>{index + 1}</span>
      {row.map((cell) =>
        isSumHover ? (
          <PercentCell key={cell.id} sumRow={sumRow} cellValue={cell.value} />
        ) : (
          <DefaultCell key={cell.id} cell={cell} />
        )
      )}
      <span
        onMouseEnter={() => setIsSumHover(true)}
        onMouseLeave={() => setIsSumHover(false)}
      >
        {sumRow}
      </span>
      <button onClick={buttonClickHandler}>delete</button>
    </div>
  );
};

export default MatrixRow;
