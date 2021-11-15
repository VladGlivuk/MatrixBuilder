import { ChangeEvent, FC } from "react";
import Input from "../../../shared/components/Input/Index";
import styles from "./SettingField.module.scss";

interface inputFormProps {
  label: string,
  inputValue: number,
  inputChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

const SettingField: FC <inputFormProps> = ({ label, inputValue, inputChangeHandler }) => {
  return (
    <div className={styles.main}>
      {label}
      <Input value={inputValue} onChange={inputChangeHandler} />
    </div>
  );
};

export default SettingField;
