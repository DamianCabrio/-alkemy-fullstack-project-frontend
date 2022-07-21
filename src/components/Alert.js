import { useAppContext } from '../contexts/appContext';

function Alert() {
  const { alertType, alertMessage } = useAppContext();
  return <div className={`alert alert-${alertType}`}>{alertMessage}</div>;
}
export default Alert;
