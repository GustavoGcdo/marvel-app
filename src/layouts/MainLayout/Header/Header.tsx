import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import './Header.scss';

const Header: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  const showGoBack = () => {
    return location.pathname !== '/characters';
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <header className="header">
      {showGoBack() && (
        <div className="go-back">
          <i className="material-icons" onClick={goBack}>
            arrow_back
          </i>
        </div>
      )}
      <span className="title">Marvel App</span>
    </header>
  );
};

export default Header;
