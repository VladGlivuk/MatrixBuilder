import Input from "../../../shared/components/Input/Index";
import "./SettingField.css";

const SettingField = ({ label, inputValue, inputChangeHandler }) => {
  return (
    <div className="main">
      {label}
      <Input value={inputValue} onChange={inputChangeHandler} />
    </div>
  );
};

export default SettingField;
