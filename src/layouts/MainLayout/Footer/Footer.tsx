import React from 'react';
import Copyright from '../Copyright/Copyright';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <Copyright />
      <span className="link-profile">
        <a
          href="https://github.com/GustavoGcdo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Gustavo
        </a>
      </span>
    </div>
  );
};

export default Footer;
