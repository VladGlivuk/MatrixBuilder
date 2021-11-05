import { useSelector } from "react-redux";
import "./MatrixTable.css";

const MatrixTable = () => {
  const matrix = useSelector((store) => store.matrix.globalMatrix);
  // const cell = {
  //   id: nanoid(),
  //   amount: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  // };

  // const dispatch = useDispatch();
  // const cells = useSelector((state) => state.parameters.cells);
  // const rows = useSelector((state) => state.parameters.rows);
  // const columns = useSelector((state) => state.parameters.columns);

  // let matrix = [];

  // <div className="matrix__cell" key={nanoid()}></div>

  // for (let item of matrix) {
  //   for (let i = 0; i < columns + 1; i++) {
  //     item.push(
  //       <span className="cell" key={nanoid()}>
  //         {Math.floor(Math.random() * (999 - 100 + 1) + 100)}
  //       </span>
  //     );
  //   }
  // }

  // matrix.map((item, index) =>
  //   item.push(
  //     <button
  //       type="submit"
  //       key={nanoid()}
  //       id={index}
  //       className="btn__delete fa fa-trash btn-lg"
  //       onClick={onDeleteRow}
  //     ></button>
  //   )
  // );

  // function onDeleteRow() {
  //   matrix.forEach((item, index) => {
  //     console.log(index === item[item.length - 1].props.id);
  //     if (index === item[item.length - 1].props.id) {
  //       console.log(item[item.length - 1].props.id, index);
  //       console.log(matrix);
  //     }
  //   });
  // }
  if (!matrix.length) return <div>Please, at first create matrix</div>;
  return (
    <div
    //   style={
    //     columns > 3
    //       ? {
    //           display: "inline-grid",
    //           gridTemplateColumns: `repeat(${columns + 2}, 1fr)`,
    //           gridTemplateRows: `repeat(${rows}, 1fr`,
    //           gap: "0 10%",
    //           width: "60%",
    //           margin: "10px 0 0 12px",
    //         }
    //       : columns === 3
    //       ? {
    //           display: "inline-grid",
    //           gridTemplateColumns: `repeat(${columns + 2}, 1fr)`,
    //           gridTemplateRows: `repeat(${rows}, 1fr`,
    //           gap: "0 10%",
    //           width: "60%",
    //           margin: "10px 0 0 12px",
    //         }
    //       : columns === 2
    //       ? {
    //           display: "inline-grid",
    //           gridTemplateColumns: `repeat(${columns + 2}, 1fr)`,
    //           gridTemplateRows: `repeat(${rows}, 1fr`,
    //           gap: "0 1",
    //           width: "50%",
    //           margin: "10px 0 0 12px",
    //         }
    //       : {
    //           display: "inline-grid",
    //           gridTemplateColumns: `repeat(${columns + 2}, 1fr)`,
    //           gridTemplateRows: `repeat(${rows}, 1fr`,
    //           gap: "0 10%",
    //           width: "30%",
    //           margin: "10px 0 0 12px",
    //         }
    //   }
    >
      {matrix.map((row) => (
        <div>
          {row.map((cell) => (
            <span>{cell.value}</span>
          ))}
          <button>delete</button>
        </div>
      ))}
    </div>
  );
};

export default MatrixTable;
