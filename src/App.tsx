import { FC } from "react";
import MatrixSettings from "./components/MatrixSettings";
import MatrixTable from "./components/MatrixTable";
import styles from "./App.module.scss";
import "./normalize.module.scss";

const App: FC = () => {
  return (
    <div className={styles.wrapper}>
      <MatrixSettings />
      <MatrixTable />
    </div>
  );
};

export default App;
