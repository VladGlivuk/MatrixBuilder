import { useMemo } from "react";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import "./ColumnsAverageRow.css";

export const ColumnsAverageRow = () => {
  const globalMatrix = useSelector((store) => store.matrix.globalMatrix);
  const columns = useSelector((store) => store.matrix.settings.columns);

  const avg = useMemo(() => {
    const avgArr = [];

    for (let i = 0; i < columns; i++) {
      const columnAvg = [];

      for (let j = 0; j < globalMatrix.length; j++) {
        columnAvg.push(globalMatrix[j].records[i]);
      }

      avgArr.push(
        columnAvg.reduce((acc, curr) => acc + curr.value, 0) /
          globalMatrix.length
      );
    }
    return avgArr.map((el) => Math.floor(el));
  }, [globalMatrix, columns]);

  const avgSum = useMemo(() => {
    const avgSumArr = [];
    const columnAvgSumValue = Math.floor(
      globalMatrix.map((row) => row.sum).reduce((acc, curr) => acc + curr, 0) /
        globalMatrix.length
    );
    avgSumArr.push(columnAvgSumValue);
    return avgSumArr;
  }, [globalMatrix]);

  return (
    <div className="avg">
      <span className="avg-symbol">Avg</span>
      {avg?.map((value) => (
        <span key={nanoid()} className="avgCell">
          {value}
        </span>
      ))}

      <span className="avgCell">
        {avgSum?.map((value) => (
          <span key={nanoid()} className="avgCell">
            {value}
          </span>
        ))}
      </span>
    </div>
  );
};
