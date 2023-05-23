import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './componentes/home/Home';
import Bebidas from './componentes/menu/Bebidas';
import Carrinho from './componentes/carrinho/Carrinho';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/bebidas' element={<Bebidas />} />
        <Route path='/carrinho' element={<Carrinho />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
