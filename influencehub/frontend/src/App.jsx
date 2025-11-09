import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Influencers from './pages/Influencers';
import Campaigns from './pages/Campaigns';
import ContentCalendar from './pages/ContentCalendar';
import Analytics from './pages/Analytics';
import Payments from './pages/Payments';
import Contracts from './pages/Contracts';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/influencers" element={<Influencers />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/content-calendar" element={<ContentCalendar />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/contracts" element={<Contracts />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;