import "./App.css";
import "./normalize.css";
import MatrixSettings from "./components/MatrixSettings";
import MatrixTable from "./components/MatrixTable";

const App = () => {
  return (
    <div className="wrapper">
      <MatrixSettings />
      <MatrixTable />
    </div>
  );
};

export default App;
