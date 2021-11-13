import Input from "../../../shared/components/Input/Index";
import "./SettingField.css";

interface inputFormProps {
  label: string,
  inputValue: number,
  inputChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SettingField: React.FC <inputFormProps> = ({ label, inputValue, inputChangeHandler }) => {
  return (
    <div className="main">
      {label}
      <Input value={inputValue} onChange={inputChangeHandler} />
    </div>
  );
};

export default SettingField;
