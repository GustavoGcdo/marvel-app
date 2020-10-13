import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import CharacterInfoPage from './pages/CharacterInfoPage/CharacterInfoPage';
import CharactersPage from './pages/CharactersPage/CharactePage';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Redirect exact path="/" to="/characters" />
        <Switch>
          <Route component={CharactersPage} exact path="/characters" />
          <Route component={CharacterInfoPage} exact path="/characters/:id" />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
};

export default Routes;
