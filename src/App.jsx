import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Agentes from './pages/Agents';
import AgentesDetalhes from './pages/Details';
import Mapas from './pages/Maps';
import Armas from './pages/Weapons';
import Skins from './pages/Skins';
import Page404 from './pages/Page404';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agentes" element={<Agentes />} />
        <Route path="/agentes/:uuid" element={<AgentesDetalhes />} />
        <Route path="/mapas" element={<Mapas />} />
        <Route path="/armas" element={<Armas />} />
        <Route path="/skins" element={<Skins />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;