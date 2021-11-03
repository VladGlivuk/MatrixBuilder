import { useDispatch, useSelector } from 'react-redux';
import { setIsTableVisible } from '../../reducers/tableReducer';
import "./AppHeader.css"
import { setCells, setColumns, setRows } from '../../reducers/parametersReducer';

function AppHeader () {

  let inputRows = 0;
  const columns = useSelector(state => state.parameters.columns)
  const rows = useSelector(state => state.parameters.rows)
  const cells = useSelector(state => state.parameters.cells)
  const dispatch = useDispatch()
  
  function handleColumns (e, inputColumns) {
    dispatch(setColumns(+e.target.value))
  } 

  function handleRows (e, inputRows) {
    dispatch(setRows(+e.target.value));
    inputRows = +e.target.value;
  } 

  function handleCells (e, inputCells) {
    dispatch(setCells(+e.target.value));
  } 

  function createMatrix () {
    dispatch(setIsTableVisible(true))
  }

  return (
    <div className="header">
      <div className="header__title">Matrix Builder</div>
      <div className="header__columns">Enter the number of columns<input type="number" min="1" max="99" name="columns" value={columns} onChange={handleColumns}></input></div>
      <div className="header__rows">Enter the number of rows<input type="number" min="1" max="99" value={+rows > +inputRows ? +rows : +inputRows} onChange={handleRows}></input></div>
      <div className="header__cells">Enter the number of cells<input type="number" min="1" max="99" name="cells" value={cells} onChange={handleCells}></input></div>
      <div className="header__button"><button className="btn btn-primary btn-lg" type="submit" onClick={createMatrix}>Create matrix</button></div>
    </div>
  )
}

export default AppHeader;