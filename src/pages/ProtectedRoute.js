import { useAppContext } from '../contexts/app/appContext';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const { user } = useAppContext();

  if (!user) {
    return <Navigate to="/registro" />;
  }

  return children;
}
export default ProtectedRoute;
