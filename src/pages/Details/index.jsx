import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Background from '../../components/Extras/Wall';
import './Detailsagents.css'

const AgentesDetalhes = () => {
    const { uuid } = useParams();
    const [agent, setAgent] = useState(null);

    useEffect(() => {
        const fetchAgentDetails = async () => {
            try {
                const response = await axios.get(`https://valorant-api.com/v1/agents/${uuid}`, {
                    params: {
                      language: 'pt-BR'
                    }
                  });
                setAgent(response.data.data);
            } catch (error) {
                console.error('Erro ao buscar os detalhes dos agentes:', error);
            }
        };

        fetchAgentDetails();
    }, [uuid]);

    if (!agent) return <div>Carregando...</div>;

    return (
        <div>
            <Header />
            <Background />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-md p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">{agent.displayName}</h1>
                    <div className="flex items-center mb-6">
                        <img src={agent.fullPortrait} alt={agent.displayName} className="w-52 h-52 rounded-full mr-4" />
                        <div>
                            <h2 className="text-xl font-semibold text-gray-700 mb-2">Role: {agent.role.displayName}</h2>
                            <p className="text-lg text-gray-700">{agent.role.description}</p>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700 mb-6">{agent.description}</p>
                    <h3 className="text-2xl font-semibold text-gray-700 mb-4">Habilidades:</h3>
                    <ul className="list-disc list-inside">
                        {agent.abilities.map((ability) => (
                            <li key={ability.slot} className="mb-4">
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">{ability.displayName}</h4>
                                <img src={ability.displayIcon} alt={ability.displayName} className="w-12 h-12 rounded-full mb-2 bg-slate-500" />
                                <p className="text-base text-gray-700">{ability.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AgentesDetalhes;
