import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import PrivateRoute from './routes/PrivateRoute';
import Header from './Components/Header';
import LoginForm from './Components/LoginForm';
import SignUpForm from './Components/SignUpForm';
import { TaskProvider } from './Context/TaskContext';
import TaskForm from './Components/TaskForm'; 
import TaskList from './Components/TaskList'; 
import './index.css';

const DashboardContent = () => (
  <div className="container mx-auto p-4 max-w-2xl bg-gray-50 min-h-screen rounded-lg shadow-xl my-8">
    <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8">
      My To-Do List
    </h1>
    <TaskProvider>
      <TaskForm />
      <TaskList />
    </TaskProvider>
  </div>
);

function App() {
  return (
   
    <AuthProvider>
      <Router>

        <Header />
        <main className="flex justify-center items-start min-h-[calc(100vh-64px)] py-8">
          <Routes>
            <Route path="/" element={<div className="page-content text-center text-xl font-semibold">Welcome to the To-Do App! Please Login or Sign Up.</div>} />

            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUpForm />} />

            <Route
              path="/Dashboard"
              element={
                <PrivateRoute>
                  <DashboardContent />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
      </Router>
    </AuthProvider>
  );
}

export default App;