import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeContent from '../components/HomeContent';
import About from '../components/About';

const Home = () => {
    return (
        <div>
            <Header />
            <HomeContent />
            <About />
            <Footer />
        </div>
    );
};

export default Home;
