import "./Input.css";

const Input = ({ value, onChange }) => {
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
