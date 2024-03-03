import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Homepage } from './pages/Homepage';
import { Routes, Route } from 'react-router-dom';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
