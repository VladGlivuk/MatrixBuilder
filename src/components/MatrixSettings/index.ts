import { useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { setMatrix } from "../../store/matrixReducer/actions";
import SettingField from "./SettingField";
import "./MatrixSettings.css";

const MatrixSettings = () => {
  const dispatch = useDispatch();

  const [rows, setRows] = useState('');
  const [columns, setColumns] = useState('');
  const [cells, setCells] = useState('');

  const settings = useMemo(() => {
    return { cells, rows, columns };
  }, [cells, rows, columns]);

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
      <div className="header__form">
        <SettingField
          label="Enter the number of columns"
          inputValue={columns}
          inputChangeHandler={handleColumns}
        />
        <SettingField
          label="Enter the number of rows"
          inputValue={rows}
          inputChangeHandler={handleRows}
        />
        <SettingField
          label="Enter the number of cells"
          inputValue={cells}
          inputChangeHandler={handleCells}
        />
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
