import React from 'react';
import { useNavigate } from 'react-router-dom';
import favicon from '../../assets/vloreicon.png';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-gray-900 py-4 shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-4">
        <ul className="flex items-center space-x-6">
          <li>
            <img src={favicon} alt="VWIKI" className="w-10 h-10" />
          </li>
          <li>
            <span className="text-white text-xl font-bold">VWIKI</span>
          </li>
        </ul>
        <ul className="flex items-center space-x-4">
          <li>
            <button onClick={() => navigate('/')} className="text-white hover:text-gray-300 transition duration-300 px-3 py-3 mt-2 rounded-md bg-gray-700">Ver Página Inicial</button>
          </li>
          <li>
            <button onClick={() => navigate('/Agentes')} className="text-white hover:text-gray-300 transition duration-300 px-3 py-3 mt-2 rounded-md bg-gray-700">Ver Agentes</button>
          </li>
          <li>
            <button onClick={() => navigate('/Mapas')} className="text-white hover:text-gray-300 transition duration-300 px-3 py-3 mt-2 rounded-md bg-gray-700">Ver Mapas</button>
          </li>
          <li>
            <button onClick={() => navigate('/Armas')} className="text-white hover:text-gray-300 transition duration-300 px-3 py-3 mt-2 rounded-md bg-gray-700">Ver Armas</button>
          </li>
          <li>
            <button onClick={() => navigate('/Skins')} className="text-white hover:text-gray-300 transition duration-300 px-3 py-3 mt-2 rounded-md bg-gray-700">Ver Skins das Armas</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;