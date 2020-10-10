import React from 'react';
import './MainLayout.scss';
import Header from './Header/Header';

const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="main-container">
      <Header />
      <main id="main-content" className="main-content">{children}</main>
    </div>
  );
};

export default MainLayout;
