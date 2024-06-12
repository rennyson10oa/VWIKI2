import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Maps.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Background from '../../components/Extras/Wall'

const Mapas = () => {
  const [maps, setMaps] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchMaps = async () => {
      try {
        const response = await axios.get('https://valorant-api.com/v1/maps', {
          params: {
            language: 'pt-BR'
          }
        });
        setMaps(response.data.data.filter(map => map.displayName !== "The Range"));
        console.log(response.data.data);
      } catch (error) {
        console.error('Erro ao buscar mapas:', error);
      }
    };
    fetchMaps();
  }, []);

  const handleNextMap = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex >= maps.length - 1) {
      setCurrentIndex(0);
    }
  };

  const handlePreviousMap = () => {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex <= 0) {
      setCurrentIndex(maps.length - 1);
    }
  };

  return (
    <div className="">
      <Header />
      <div className="relative w-full">
        <Background />
        {maps.length > 0 && (
          <div className="bg-gray-700 bg-opacity-90 rounded-lg shadow-md p-8 h-[80vh]">
            <h1 className="text-3xl font-bold text-white mb-6">{maps[currentIndex].displayName}</h1>
            <div className="flex items-center justify-center mb-0">
              <img src={maps[currentIndex].displayIcon || 'https://via.placeholder.com/50'} alt={maps[currentIndex].displayName} className="w-96 h-96 rounded-full mr-4" />
            </div>
            <div className="flex justify-between">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handlePreviousMap}>&#8592; Anterior</button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleNextMap}>Próximo &#8594;</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Mapas;