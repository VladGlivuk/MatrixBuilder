import { useSelector } from "react-redux";
import MatrixRow from "./MatrixRow";
import "./MatrixTable.css";

const MatrixTable = () => {
  const matrix = useSelector((store) => store.matrix.globalMatrix);

  if (!matrix.length) return <div>Please, at first create matrix</div>;
  return (
    /* style={
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
    <div>
      <button>Add row</button>
      {matrix.map((row, index) => (
        <MatrixRow key={index} row={row} index={index} />
      ))}
    </div>
  );
};

export default MatrixTable;
