import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate 
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import OpportunityList from './components/OpportunityList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/oportunidades" element={<OpportunityList />} />
      </Routes>
    </Router>
  );
}

export default App;
