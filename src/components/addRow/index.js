import "./AddRow.css";
import { useDispatch } from "react-redux";

function AddRow() {
  const dispatch = useDispatch();

  return (
    <div className="add-row">
      <button type="button" onClick={() => console.log("s")}>
        Add row
      </button>
    </div>
  );
}

export default AddRow;
