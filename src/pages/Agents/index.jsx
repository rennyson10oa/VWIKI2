import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Background from '../../components/Extras/Wall';
import './Agents.css';

const Agentes = () => {
  const [agents, setAgents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await axios.get('https://valorant-api.com/v1/agents', {
          params: {
            language: 'pt-BR'
          }
        });
        const playableAgents = response.data.data.filter(agent => agent.isPlayableCharacter);
        setAgents(playableAgents);
      } catch (error) {
        console.error('Erro ao buscar os Agentes:', error);
      }
    };
    fetchAgents();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header />
      <Background />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-8">Agentes do Valorant</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {agents.map(agent => (
            <div
              key={agent.uuid}
              className="bg-gray-800 rounded-lg p-4 flex flex-col items-center cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-gray-700"
              onClick={() => navigate(`/agentes/${agent.uuid}`)}
            >
              <img src={agent.displayIcon} alt={agent.displayName} className="w-24 h-24 mb-4" />
              <span className="m-2 text-xl font-semibold">{agent.displayName}</span>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Agentes;
