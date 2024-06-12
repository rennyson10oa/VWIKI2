import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Background from '../../components/Extras/Wall';
import { excludedImageUrls } from '../../components/Extras/Trash';
import './Skins.css';

const Skins = () => {
  const [skins, setSkins] = useState([]); 
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetchSkins = async () => {
      try {
        const response = await axios.get('https://valorant-api.com/v1/weapons/skins', {
          params: {
            language: 'pt-BR'
          }
        });
        setSkins(response.data.data);
      } catch (error) {
        console.error('Erro ao buscar skins:', error);
      }
    };
    fetchSkins();
  }, []);

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredSkins = skins.filter((skin) => {
    return (
      skin.displayName.toLowerCase().includes(searchValue.toLowerCase()) &&
      !excludedImageUrls.includes(skin.displayIcon)
    );
  });

  return (
    <div>
      <Header />
      <Background />
      <div className="container mx-auto px-4 py-8">
        <input
          type="search"
          value={searchValue}
          onChange={handleSearch}
          placeholder="Buscar skin pelo nome"
          className="w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 text-gray-900"
        />
        {filteredSkins.length > 0 && (
          <div className="bg-gray-200 rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">{filteredSkins[0].displayName}</h1>
            <img
              src={filteredSkins[0].displayIcon}
              alt={filteredSkins[0].displayName}
              className="rounded-full mx-auto mb-6"
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Skins;
