import './App.css';
import "./normalize.css"
import AppHeader from "../appHeader/AppHeader"
import Table from '../table/Table';
import AddRow from '../addRow/AddRow';
import { useSelector } from 'react-redux';

function App() {

  const isTableVisible = useSelector(state => state.table.isTableVisible)
  
  return (
    <div className="wrapper">
     <AppHeader />
     <AddRow />
    {isTableVisible ? <Table /> : ""}
    </div>
  );
}

export default App;
