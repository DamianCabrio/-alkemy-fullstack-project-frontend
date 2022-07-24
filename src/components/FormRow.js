function FormRow({type, name, value, handleChange, labelText, disabled, min, step}) {
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
        min={min}
        step={step}
      />
    </div>
  );
}
export default FormRow;
