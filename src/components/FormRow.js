function FormRow({type, name, value, handleChange, labelText, disabled}) {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type || 'text'}
        id={name}
        name={name}
        className="form-input"
        onChange={handleChange}
        value={value}
        disabled={disabled}
      />
    </div>
  );
}
export default FormRow;
