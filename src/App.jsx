import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Provider from './context/provider';
import ZippiaPage from './pages/ZippiaPage';

function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<Navigate to="/test/jobs" />} />
        <Route path="/test/jobs" element={<ZippiaPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
