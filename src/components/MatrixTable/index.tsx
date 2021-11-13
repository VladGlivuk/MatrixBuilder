import { useMemo } from "react";
import { useSelector } from "react-redux";
import MatrixRow from "./MatrixRow";
import AddRow from "./AddRow/index.jsx";
import { ColumnsAverageRow } from "./ColumnsAverageRow/index";

import "./MatrixTable.css";

const MatrixTable: React.FC = () => {
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
        <div>
          {matrix.map((row, index) => (
            <MatrixRow key={index} row={row} index={index} />
          ))}
        </div>

        <ColumnsAverageRow />
      </div>
    </div>
  );
};

export default MatrixTable;