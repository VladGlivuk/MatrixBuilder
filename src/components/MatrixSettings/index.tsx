import { useState, useMemo, FC, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { setMatrix } from "../../store/matrixReducer/actions";
import SettingField from "./SettingField";
import { Settings } from "../../store/matrixReducer/types";
import styles from "./MatrixSettings.module.scss";

const MatrixSettings: FC = () => {
  const dispatch = useDispatch();

  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [cells, setCells] = useState(0);

  const settings: Settings = useMemo(
    () => ({ cells, rows, columns }),
    [cells, rows, columns]
  );

  const handleColumns = (event: ChangeEvent<HTMLInputElement>) => {
    setColumns(+event.target.value);
  };

  const handleRows = (event: ChangeEvent<HTMLInputElement>) => {
    setRows(+event.target.value);
  };

  const handleCells = (event: ChangeEvent<HTMLInputElement>) => {
    setCells(+event.target.value);
  };

  const buttonClickHandler = () => {
    dispatch(setMatrix(settings));
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__title}>Matrix Builder</div>
      <div className={styles.header__form}>
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

      <div className={styles.header__button}>
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
