import { useMemo } from "react";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import "./AverageCell.css";

export const AverageCell = () => {
  const globalMatrix = useSelector((store) => store.matrix.globalMatrix);
  const columns = useSelector((store) => store.matrix.settings.columns);

  const avg = useMemo(() => {
    const avgArr = [];
    for (let i = 0; i < columns; i++) {
      const columnAvgValue =
        globalMatrix
          .map((row) => row.records[i])
          .map((cell) => cell.value)
          .reduce((acc, current) => acc + current, 0) /
        globalMatrix[i].records.length;

      avgArr.push(Math.floor(columnAvgValue));
    }
    return avgArr;
  }, [globalMatrix, columns]);

  return (
    <div className="avg">
      <span className="avg-symbol">Avg</span>
      {avg.map((value) => (
        <span key={nanoid()} className="avgCell">
          {value}
        </span>
      ))}
      {
        <span className="avgCell">
          {Math.floor(
            globalMatrix
              .map((row) => row.sum)
              .reduce((acc, curr) => acc + curr, 0) / globalMatrix.length
          )}
        </span>
      }
    </div>
  );
};
