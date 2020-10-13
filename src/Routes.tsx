import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import CharacterInfoPage from './pages/CharacterInfoPage/CharacterInfoPage';
import CharactersPage from './pages/CharactersPage/CharactePage';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Redirect exact path="/" to="/characters/1009718" />
      <Switch>
        <Route component={CharactersPage} exact path="/characters" />
        <Route component={CharacterInfoPage} exact path="/characters/:id" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
