import Matrix from "../matrix/Matrix"
import { nanoid } from "nanoid"
import { useSelector } from "react-redux"
import "./Table.css"


function Table () {

  const cells = useSelector(state => state.parameters.cells)
  const rows = useSelector(state => state.parameters.rows)
  const columns = useSelector(state => state.parameters.columns)

  const topPanel = []
  const bottomPanel = []
  for (let i = 1; i <= columns; i++) {
    topPanel.push(<span key={nanoid()} style={columns > 3 ? {padding: "0 8%"} : columns === 3  ? {padding: " 0 7.85%"} : columns === 2  ? {padding: "0 67px"} : {padding: "0 8%"}}>{i}</span>)
   }

  for (let i = 1; i <= rows; i++) {
    bottomPanel.push(<span key={nanoid()}>{i}</span>)
  }

  return (
    <div className="table">
       <div className="table__symbol">№</div>
      <div className="table__columns-numbers">
        {topPanel} 
        <span style={columns > 8 ? {padding: "0 50px"} : columns > 3 ? {padding: "0 6%"} : columns === 3  ? {padding: " 0 7%"} : columns === 2  ? {padding: "0 35px"} : {padding: "0 2%"}}>Sum</span>
      </div>
      <div className="table__rows-numbers">
        {bottomPanel}
        <span>Avg</span>
      </div>
      <div className="table__inside">
        <Matrix/>
      </div>
    </div>
  )
}

export default Table