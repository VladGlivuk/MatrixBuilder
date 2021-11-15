import { ChangeEvent, FC } from "react";
import styles from "./Input.module.scss";

interface InputProps {
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ value, onChange }) => {
  return (
    <input
      className={styles.main}
      type="number"
      min="1"
      max="99"
      name="columns"
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
