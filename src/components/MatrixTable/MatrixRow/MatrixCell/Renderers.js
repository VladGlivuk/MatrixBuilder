import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { increment } from "../../../../store/matrixReducer/actions";
import "./MatrixCell.css";

export const DefaultCell = ({ cell }) => {
  const dispatch = useDispatch();

  const { value, id } = cell;

  const handleIncrement = () => {
    dispatch(increment(id));
  };

  return (
    <div className="cell" onClick={handleIncrement}>
      {value}
    </div>
  );
};

export const PercentCell = ({ sumRow, cellValue }) => {
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
