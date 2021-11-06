import "./AddRow.css";
import { useDispatch } from "react-redux";
import { addRow } from "../../store/matrixReducer/actions";

function AddRow() {
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
