import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Landing, Error, Register } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<div>Dashboard</div>} />
        <Route path="/registro" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
