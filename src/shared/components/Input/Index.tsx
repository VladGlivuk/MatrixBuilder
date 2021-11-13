import "./Input.css";

interface InputProps {
  value: number,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC <InputProps>  = ({ value, onChange }) => {
  return (
    <input
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
