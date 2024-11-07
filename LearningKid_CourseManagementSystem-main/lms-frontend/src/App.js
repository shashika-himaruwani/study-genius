import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
//import AdminPanel from './components/AdminPanel';
import UserPanel from './components/UserPanel';
import Dashboard from './components/Dashboard'
import AdminPanel from './components/AdminPanel';

const App = () => {
  const isAdmin = true; // Replace with your actual logic for checking admin status

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAdmin ? <Navigate to="/admin" /> : <Navigate to="/user" />}
        />

        <Route path="/admin" element={<Dashboard />} />
        <Route path="/user" element={<UserPanel />} />

        <Route path="/create" element={<AdminPanel />} />
        <Route path="/course" element={<UserPanel />} />

      </Routes>
    </Router>
  );
};

export default App;
