import React, { useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { setMatrix } from "../../store/matrixReducer/actions";
import SettingField from "./SettingField";
import "./MatrixSettings.css";

const MatrixSettings: React.FC = () => {
  const dispatch = useDispatch();

  const [rows, setRows] = useState<number>();
  const [columns, setColumns] = useState<number>();
  const [cells, setCells] = useState<number>();

  const settings = useMemo(() => {
    return { cells, rows, columns };
  }, [cells, rows, columns]);

  const handleColumns = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColumns(+event.target.value);
  };

  const handleRows = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRows(+event.target.value);
  };

  const handleCells = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCells(+event.target.value);
  };

  const buttonClickHandler = () => {
    dispatch(setMatrix(settings));
  };

  return (
    <div className="header">
      <div className="header__title">Matrix Builder</div>
      <div className="header__form">
        <SettingField
          label ="Enter the number of columns"
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
