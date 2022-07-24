function FormButton({ classes, type, disabled, labelText }) {
  return (
    <button className={`btn ${classes}`} type={type} disabled={disabled}>
      {disabled ? 'Cargando...' : labelText}
    </button>
  );
}
export default FormButton;
