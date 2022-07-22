import { useAppContext } from '../contexts/app/appContext';

function Alert() {
  const { alertType, alertMessage } = useAppContext();
  return <div className={`alert alert-${alertType}`}>{alertMessage}</div>;
}
export default Alert;
