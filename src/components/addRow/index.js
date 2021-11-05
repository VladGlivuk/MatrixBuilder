import "./AddRow.css";
import { useSelector, useDispatch } from "react-redux";

function AddRow() {
  const dispatch = useDispatch();
  let rows = useSelector((state) => state.parameters.rows);

  return (
    <div className="add-row">
      <button type="button" onClick={() => console.log("s")}>
        Add row
      </button>
    </div>
  );
}

export default AddRow;
