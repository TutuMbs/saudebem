import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Login from './pages/login';
import Cad from './pages/cadastro';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = () => {
    setShowLogin(false);
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={showLogin ? <Cad onLogin={handleLogin} /> : <Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
