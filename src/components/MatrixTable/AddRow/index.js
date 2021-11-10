import { useDispatch } from "react-redux";
import { addRow } from "../../../store/matrixReducer/actions";
import "./AddRow.css";

const AddRow = () => {
  const dispatch = useDispatch();

  const buttonClickHandler = () => {
    dispatch(addRow());
  };

  return (
    <div className="add-row">
      <button type="button" onClick={buttonClickHandler}>
        Add row
      </button>
    </div>
  );
}

export default AddRow;