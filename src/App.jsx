import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import ZippiaPage from './pages/ZippiaPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/test/jobs" />} />
      <Route path="/test/jobs" element={<ZippiaPage />} />
    </Routes>
  );
}

export default App;
