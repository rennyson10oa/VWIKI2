import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Home.css';
import Background from '../../components/Extras/Wall'

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Background />
      <div className="flex flex-col items-center p-5 text-white text-4xl font-mono">
        <div className="relative mb-7 mt-10">
          <div className="absolute inset-0 bg-gray-500 transform skew-x-12 z-0 ml-6"></div>
          <div className="relative z-10 w-full max-w-screen-md">
            <h1 className="mt-11 text-5xl text-center text-white font-bold mb-5">BEM-VINDO AO VWIKI</h1>
            <h2 className="text-2xl pl-12 pr-7 text-center text-white font-semibold mb-12">SUA FONTE ATUALIZADA DE INFORMAÇÕES VALOROSAS</h2>
          </div>
          <div className="absolute inset-y-0 right-0 z-20" style={{ width: '20px' }}>
            <div className="absolute inset-0 bg-red-500 transform skew-x-12"></div>
          </div>
        </div>

        <div className="p-5 bg-[rgba(4,4,4,0.6)] border-[#00fff2] border-solid border rounded-md w-[800px] whitespace-normal transition-transform duration-300 cursor-pointer self-start ml-7 text-left hover:scale-105 hover:shadow-lg mb-1 text-xl">
          <h2>O QUE É A VWIKI?</h2>
          <h3>A VWIKI é uma plataforma que reúne informações detalhadas sobre diversos aspectos do jogo VALORANT. Tendo desde seus agentes e habilidades, até seus mapas e suas armas utilizáveis. Sempre atualizada, encontrará informações cruciais para melhorar seu jogo e lutar por cada vitória com garra!</h3>
        </div>
        <div className="p-5 bg-[rgba(4,4,4,0.6)] border-[#00fff2] border-solid border rounded-md w-[800px] whitespace-normal transition-transform duration-300 cursor-pointer self-end mr-7 text-right hover:scale-105 hover:shadow-lg text-xl">
          <h2>COMO A VWIKI PODE TE AJUDAR?</h2>
          <h3>Aprenda sobre os agentes e suas habilidades. Descubra os segredos dos mapas. Encontre informações sobre skins e armas.</h3>
        </div>
      </div>
      <Footer />
    </React.Fragment>

  );
};

export default Home;