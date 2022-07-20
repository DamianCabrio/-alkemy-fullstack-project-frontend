import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Landing } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<div>Dashboard</div>} />
        <Route path="/registrarse" element={<div>Registrarse</div>} />
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
