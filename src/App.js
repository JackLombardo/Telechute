import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SubmitFeedback from './pages/SubmitFeedback';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/submitfeedback" element={<SubmitFeedback />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        </Routes>
    </Router>
  );
}

export default App;
