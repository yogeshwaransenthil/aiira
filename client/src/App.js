// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import ChatWindow from './components/ChatWindow';
import CompanyInfo from './components/CompanyInfo';
import DocHub from './components/DocHub';
import './styles/App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/chat" />}
        />
        <Route
          path="/chat"
          element={isAuthenticated ? <ChatWindow /> : <Navigate to="/login" />}
        />
        <Route
          path="/company-info"
          element={isAuthenticated ? <CompanyInfo /> : <Navigate to="/login" />}
        />
        <Route
          path="/doc-hub"
          element={isAuthenticated ? <DocHub /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Navigate to="/chat" />} />
      </Routes>
    </Router>
  );
};

export default App;
