import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './componentes/home/Home';
// import Bebidas from './componentes/menu/Bebidas';
import Carrinho from './componentes/carrinho/Carrinho';
import MontarAcai from './componentes/menu/MontarAcai';
import MilkShake from './componentes/menu/MilkShake'
import Combos from './componentes/menu/Combos';
function App() {
  const [itensSelecionados, setItensSelecionados] = useState([]);

  const adicionarItem = (item) => {
    setItensSelecionados([...itensSelecionados, item]);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home adicionarItem={adicionarItem} />} />
        {/* <Route path='/bebidas' element={<Bebidas adicionarItem={adicionarItem}/>} /> */}

        <Route path='/milk-shake' element={<MilkShake adicionarItem={adicionarItem}/>} />

        <Route path="/carrinho" element={<Carrinho itens={itensSelecionados} />} />

        <Route path='/montar_acai' element={<MontarAcai/>} />
        
        <Route path='/combos' element={<Combos/>} />
        
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
