import React, { useEffect, useState } from 'react';
import marvelService from '../../services/marvel.service';
import { Character } from '../../models/character';
import './CharacterPage.scss';
import CharacterItem from './CharacterItem/CharacterItem';

const CharactersPage = () => {
  const [charactersList, setCharactersList] = useState<Character[]>([]);

  useEffect(() => {
    const getCharactersList = async () => {
      const response = await marvelService.getCharacters();
      console.log(response.data.results);
      setCharactersList(response.data.results);
    };

    getCharactersList();
  }, []);

  return (
    <div>
      <span className="page-title">Marvel Characters</span>

      <div className="characters-items">
        {charactersList.map((character, index) => (
          <CharacterItem key={index} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharactersPage;
