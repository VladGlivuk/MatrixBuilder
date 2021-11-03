import { useDispatch, useSelector } from 'react-redux';
import { setIsTableVisible } from '../../reducers/tableReducer';
import "./AppHeader.css"
import { setCells, setColumns, setRows } from '../../reducers/parametersReducer';
import { setInputRowValue } from '../../reducers/rowInputValueReducer';

function AppHeader () {

  const dispatch = useDispatch()
  let inputRowValue = useSelector(state => state.rowInputValueReducer.inputRowValue)

  function handleColumns (e) {
    dispatch(setColumns(+e.target.value))
  } 

  function handleRows (e) {
    dispatch(setRows(+e.target.value));
    dispatch(setInputRowValue(+e.target.value))
    console.log(inputRowValue)
    e.target.value = inputRowValue
  } 

  function handleCells (e) {
    dispatch(setCells(+e.target.value));
  } 

  function createMatrix () {
    dispatch(setIsTableVisible(true))
  }

  return (
    <div className="header">
      <div className="header__title">Matrix Builder</div>
      <div className="header__columns">Enter the number of columns<input type="number" min="1" max="99" name="columns" onChange={handleColumns}></input></div>
      <div className="header__rows">Enter the number of rows<input type="number" min="1" max="99" name="rows" onChange={handleRows}></input></div>
      <div className="header__cells">Enter the number of cells<input type="number" min="1" max="99" name="cells" onChange={handleCells}></input></div>
      <div className="header__button"><button className="btn btn-primary btn-lg" type="submit" onClick={createMatrix}>Create matrix</button></div>
    </div>
  )
}

export default AppHeader;