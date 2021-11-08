import { useMemo } from "react";
import { useSelector } from "react-redux";
import MatrixRow from "./MatrixRow";
import AddRow from "../addRow/index";

import "./MatrixTable.css";

const MatrixTable = () => {
  const matrix = useSelector((store) => store.matrix.globalMatrix);
  const columnsCount = useSelector((store) => store.matrix.settings.columns);
  const matrixHead = useMemo(
    () =>
      new Array(columnsCount + 1)
        .fill(null)
        .map((_el, index) => (index === 0 ? "№" : index)),
    [columnsCount]
  );

  if (!matrix.length)
    return <div className="empty-matrix">Please, at first create matrix</div>;

  return (
    <div className="matrix">
      <AddRow />
      <div className="matrix__table">
        <div className="matrix__column-numbers">
          {matrixHead.map((el) => (
            <span key={el} className="matrix__numbers">
              {el}
            </span>
          ))}
          <span className="matrix__numbers">Sum</span>
        </div>
        {matrix.map((row, index) => (
          <MatrixRow key={index} row={row} index={index} />
        ))}
      </div>
    </div>
  );
};

export default MatrixTable;

/* JOKE:  style={
        columns > 3
          ? {
              display: "inline-grid",
              gridTemplateColumns: `repeat(${columns + 2}, 1fr)`,
              gridTemplateRows: `repeat(${rows}, 1fr`,
              gap: "0 10%",
              width: "60%",
              margin: "10px 0 0 12px",
            }
          : columns === 3
          ? {
              display: "inline-grid",
              gridTemplateColumns: `repeat(${columns + 2}, 1fr)`,
              gridTemplateRows: `repeat(${rows}, 1fr`,
              gap: "0 10%",
              width: "60%",
              margin: "10px 0 0 12px",
            }
          : columns === 2
          ? {
              display: "inline-grid",
              gridTemplateColumns: `repeat(${columns + 2}, 1fr)`,
              gridTemplateRows: `repeat(${rows}, 1fr`,
              gap: "0 1",
              width: "50%",
              margin: "10px 0 0 12px",
            }
          : {
              display: "inline-grid",
              gridTemplateColumns: `repeat(${columns + 2}, 1fr)`,
              gridTemplateRows: `repeat(${rows}, 1fr`,
              gap: "0 10%",
              width: "30%",
              margin: "10px 0 0 12px",
            }
      }
    >
    */
