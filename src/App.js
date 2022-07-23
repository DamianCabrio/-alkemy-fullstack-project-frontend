import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Landing, Error, Register, ProtectedRoute } from './pages';
import {
  AddTransaction,
  AllTransactions,
  Profile,
  Stats,
  DashboardLayout,
} from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="operaciones" element={<AllTransactions />} />
          <Route path="agregar" element={<AddTransaction />} />
          <Route path="perfil" element={<Profile />} />
        </Route>
        <Route path="/registro" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
