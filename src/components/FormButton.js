function FormButton({ classes, type, disabled, labelText, onClick }) {
  return (
    <button className={`btn ${classes}`} type={type} disabled={disabled} onClick={onClick}>
      {disabled ? 'Cargando...' : labelText}
    </button>
  );
}
export default FormButton;
