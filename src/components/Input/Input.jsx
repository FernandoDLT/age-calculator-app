import './Input.css';

function Input({ label, onChange }) {
  return (
    <div className="input">
      <label htmlFor={label}>{label}</label>
      <input
        type="number"
        name={label}
        id={label}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
}

export { Input };
