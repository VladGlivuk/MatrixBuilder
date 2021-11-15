import { FC } from "react";
import { useDispatch } from "react-redux";
import { addRow } from "../../../store/matrixReducer/actions";
import styles from "./AddRow.module.scss";

const AddRow:FC = () => {
  const dispatch = useDispatch();

  const buttonClickHandler = () => {
    dispatch(addRow());
  };

  return (
    <div className={styles.addRow}>
      <button type="button" onClick={buttonClickHandler}>
        Add row
      </button>
    </div>
  );
}

export default AddRow;