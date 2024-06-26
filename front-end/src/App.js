import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import ChatPage from './ChatPage';
import ChatList from './ChatList'
import Matches from './Matches';
import Survey from './Survey';
import Profile from './Profile'
import EditProfile from './EditProfile';
import Retake from './Retake'
import OtherProfile from './OtherProfile';
import UserAnswers from './UserAnswers';
import ProtectedRoute from './ProtectedRoute';
import axios from 'axios'

axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/chatpage/:username" element={<ProtectedRoute><ChatPage /></ProtectedRoute>} />
        <Route path="/chatlist" element={<ProtectedRoute><ChatList /></ProtectedRoute>} />
        <Route path="/matches" element={<ProtectedRoute><Matches /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/editprofile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
        <Route path="/retake" element={<ProtectedRoute><Retake /></ProtectedRoute>} />
        <Route path="/otheruser" element={<ProtectedRoute><OtherProfile /></ProtectedRoute>} />
        <Route path="/useranswers" element={<ProtectedRoute><UserAnswers /></ProtectedRoute>} />
        {/* Redirect all other paths to "/login" */}
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
