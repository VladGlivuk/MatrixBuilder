import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { MatrixRow as MatrixRowType } from "../../../store/matrixReducer/types";
import { deleteRow } from "../../../store/matrixReducer/actions";
import { DefaultCell } from "./MatrixCell/DefaultCell";
import { PercentCell } from "./MatrixCell/PrecentCell";
import styles from "./MatrixRow.module.scss";

interface MatrixRowProps {
  row: MatrixRowType;
  index: number;
}

const MatrixRow: FC<MatrixRowProps> = ({ row, index }) => {
  const dispatch = useDispatch();
  const [isSumHover, setIsSumHover] = useState(false);

  const buttonClickHandler = () => {
    dispatch(deleteRow(index));
  };

  return (
    <div className={styles.row}>
      <span className={styles.row__rowNumbers}>{index + 1}</span>
      {row.records.map((cell) =>
        isSumHover ? (
          <PercentCell key={cell.id} sumRow={row.sum} cellValue={cell.value} />
        ) : (
          <DefaultCell key={cell.id} cell={cell} />
        )
      )}
      <span
        className={styles.row__sum}
        onMouseEnter={() => setIsSumHover(true)}
        onMouseLeave={() => setIsSumHover(false)}
      >
        {row.sum}
      </span>
      <button
        onClick={buttonClickHandler}
        className={`fa fa-trash btn-light ${styles.row__btnDelete}`}
      />
    </div>
  );
};

export default MatrixRow;
