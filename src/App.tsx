import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/index';
import Toast from './pages/Home-Logado-Toast/index';
import  './global.css';


const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/toast" element={<Toast />} />
        </Routes>
    </Router>
  );
};

export default App;
