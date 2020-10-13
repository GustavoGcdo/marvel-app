import React from 'react';
import './MainLayout.scss';
import Header from './Header/Header';
import Copyright from './Copyright/Copyright';
import Footer from './Footer/Footer';

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
