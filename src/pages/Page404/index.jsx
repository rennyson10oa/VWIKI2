import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Page404.module.css';
import Background from '../../components/Extras/Wall'

const Page404 = () => {
    return (
        <div>
            <p></p>
            <Header />
            <div className="error-404">
            <Background />
                <h1>Erro 404</h1>
                <p>Essa página não existe</p>
            </div>
            <Footer />
        </div>
    );
};

export default Page404;