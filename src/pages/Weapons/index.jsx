import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Background from '../../components/Extras/Wall';


const WeaponsPage = () => {
  const [weapons, setWeapons] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchWeapons = async () => {
      try {
        const response = await axios.get('https://valorant-api.com/v1/weapons', {
          params: {
            language: 'pt-BR'
          }
        });
        setWeapons(response.data.data);
      } catch (error) {
        console.error('Erro ao buscar armas:', error);
      }
    };
    fetchWeapons();
  }, []);

  const handleNextWeapon = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex >= weapons.length - 1) {
      setCurrentIndex(0);
    }
  };

  const handlePreviousWeapon = () => {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex <= 0) {
      setCurrentIndex(weapons.length - 1);
    }
  };

  return (
    <div>
      <Header />
      <Background className="opacity-10" />
      <div className="container mx-auto px-2 py-8">
        {weapons.length > 0 && (
          <div className="bg-gray-700 bg-opacity-90 rounded-lg shadow-md p-8 h-[80vh]">
            <h1 className="text-3xl font-bold text-white mb-6">{weapons[currentIndex].displayName}</h1>
            <div className="flex items-center justify-center mb-6">
              <img
                src={weapons[currentIndex].displayIcon || 'https://via.placeholder.com/50'}
                alt={weapons[currentIndex].displayName}
                className="p-5 rounded-3xl object-cover bg-gray-600 border border-gray-600 bg-opacity-85"
              />
            </div>

            <div className="flex justify-between">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handlePreviousWeapon}>&#8592; Anterior</button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleNextWeapon}>Próximo &#8594;</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default WeaponsPage;
