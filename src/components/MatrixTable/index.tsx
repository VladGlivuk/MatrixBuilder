import { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { ColumnsAverageRow } from "./ColumnsAverageRow/index";
import {  MatrixRow as MatrixRowType } from "../../store/matrixReducer/types"
import { IStore } from "../../store";
import MatrixRow from "./MatrixRow";
import AddRow from "./AddRow";
import styles from "./MatrixTable.module.scss";

const MatrixTable: FC = () => {
  const matrix: Array<MatrixRowType> = useSelector(
    (store: IStore) => store.matrix.globalMatrix
  );
  const columnsCount = useSelector(
    (store: IStore) => store.matrix.settings.columns
  );
  const matrixHead = useMemo(
    () =>
      new Array(columnsCount + 1)
        .fill(null)
        .map((_el, index) => (index === 0 ? "№" : index)),
    [columnsCount]
  );

  if (!matrix.length)
    return <div className={styles.emptyMatrix}>Please, at first create matrix</div>;

  return (
    <div className={styles.matrix}>
      <AddRow />
      <div className={styles.matrix__table}>
        <div className={styles.matrix__columnNumbers}>
          {matrixHead.map((el) => (
            <span key={el} className={styles.matrix__numbers}>
              {el}
            </span>
          ))}
          <span className={styles.matrix__numbers}>Sum</span>
        </div>
        <div>
          {matrix.map((row, index) => (
            <MatrixRow key={index} row={row} index={index} />
          ))}
        </div>

        <ColumnsAverageRow />
      </div>
    </div>
  );
};

export default MatrixTable;
