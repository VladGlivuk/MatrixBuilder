import { FC, useMemo } from "react";
import styles from "./PrecentCell.module.scss"

interface IPercentCellProps {
  sumRow: number;
  cellValue: number;
}

export const PercentCell: FC<IPercentCellProps> = ({
  sumRow,
  cellValue,
}) => {
  const percentBySum = useMemo(() => {
    return Math.floor((cellValue / sumRow) * 100);
  }, [sumRow, cellValue]);

  return (
    <div
      style={{
        background: `linear-gradient(white ${100 - percentBySum}%, red 100%)`,
      }}
      className={styles.cell}
    >
      {percentBySum}%
    </div>
  );
};