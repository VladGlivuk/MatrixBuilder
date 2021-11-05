import { useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { setMatrix } from "../../store/matrixReducer/actions";
import "./MatrixSettings.css";

const MatrixSettings = () => {
  const dispatch = useDispatch();

  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [cells, setCells] = useState(0);

  const settings = useMemo(() => {
    return { cells, rows, columns };
  }, [cells, rows, columns]);

  // change it to states
  // const columns = useSelector((state) => state.parameters.columns);
  // const rows = useSelector((state) => state.parameters.rows);
  // const cells = useSelector((state) => state.parameters.cells);

  const handleColumns = (e) => {
    setColumns(+e.target.value);
  };

  const handleRows = (e) => {
    setRows(+e.target.value);
  };

  const handleCells = (e) => {
    setCells(+e.target.value);
  };

  const buttonClickHandler = () => {
    dispatch(setMatrix(settings));
  };

  return (
    <div className="header">
      <div className="header__title">Matrix Builder</div>
      <div className="header__columns">
        Enter the number of columns
        <input
          type="number"
          min="1"
          max="99"
          name="columns"
          value={columns}
          onChange={handleColumns}
        ></input>
      </div>
      <div className="header__rows">
        Enter the number of rows
        <input
          type="number"
          min="1"
          max="99"
          value={rows}
          onChange={handleRows}
        ></input>
      </div>
      <div className="header__cells">
        Enter the number of cells
        <input
          type="number"
          min="1"
          max="99"
          name="cells"
          value={cells}
          onChange={handleCells}
        ></input>
      </div>
      <div className="header__button">
        <button
          className="btn btn-primary btn-lg"
          type="submit"
          onClick={buttonClickHandler}
        >
          Create matrix
        </button>
      </div>
    </div>
  );
};

export default MatrixSettings;
