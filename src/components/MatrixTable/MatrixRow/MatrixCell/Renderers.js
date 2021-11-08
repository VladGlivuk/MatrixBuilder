import { useMemo } from "react";
import "./MatrixCell.css"

export const DefaultCell = ({ cell }) => {
  const { value, id } = cell;

  return <div className="cell">{value}</div>;
};

export const PercentCell = ({ sumRow, cellValue }) => {
  const percentBySum = useMemo(() => {
    return Math.floor(cellValue/sumRow*100);
  }, [sumRow, cellValue]);

  return (
    <div
      style={{ background: `linear-gradient(red ${percentBySum}%, white)` }}
      className="cell"
    >
      {percentBySum}%
    </div>
  );
};
