import "./AddRow.css"
import { useSelector, useDispatch } from "react-redux"
import { setRows } from "../../reducers/parametersReducer"

function AddRow () {

  const dispatch = useDispatch()
  let rows = useSelector(state => state.parameters.rows)  

  function handleAddRow () {
    dispatch(setRows(rows += 1));
  }

  return (
    <div className="add-row">
      <button type="button" onClick={handleAddRow}>
        Add row
      </button>
    </div>
  )
}

export default AddRow