import "./Matrix.css"
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";

function Matrix () {

  const cell = {
    id: nanoid(),
    amount: Math.floor(Math.random()*(999-100+1)+100)
  }

  const cells = useSelector(state => state.parameters.cells)
  const rows = useSelector(state => state.parameters.rows)
  const columns = useSelector(state => state.parameters.columns)  
  
  let matrix = [];

   for (let i = 0; i < rows+1; i++) {
    matrix = [...matrix, [<div className="matrix__cell"></div>]]
  } 
  console.log(matrix)

  for (let item of matrix) {
    for (let i = 0; i < columns+1; i++) {
     item.push(<span className="cell">{Math.floor(Math.random()*(999-100+1)+100)}</span>)
    }
  }
  
  console.log(matrix)
  return (
    <div style={columns > 3 ? {display: "inline-grid", gridTemplateColumns: `repeat(${columns+1}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr`, gap: "0 10%",
    width: "60%", margin: "10px 0 0 12px"} : columns === 3 ? {display: "inline-grid", gridTemplateColumns: `repeat(${columns+1}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr`, gap: "0 10%", width: "60%", margin: "10px 0 0 12px"} : columns === 2 ? {display: "inline-grid", gridTemplateColumns: `repeat(${columns+1}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr`, gap: "0 1", width: "50%", margin: "10px 0 0 12px"} : {display: "inline-grid", gridTemplateColumns: `repeat(${columns+1}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr`, gap: "0 10%",
    width: "30%", margin: "10px 0 0 12px"} }>
     {matrix}
   </div>
  ) 
} 

export default Matrix 