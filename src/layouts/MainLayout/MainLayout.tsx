import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './MainLayout.scss';

export const scrollUp = () => {
  const containerElem = document.getElementById('main-content');
  containerElem?.scrollTo({ top: 0, behavior: 'smooth' });
};

const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="main-container">
      <Header />
      <main id="main-content" className="main-content">
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default MainLayout;
