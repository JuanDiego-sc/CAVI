import React from 'react';
import { Header, Footer } from './components/layout';
import { Hero, About, Services, Reviews, Contact } from './components/sections';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
