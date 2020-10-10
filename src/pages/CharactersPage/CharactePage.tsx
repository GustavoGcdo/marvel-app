import React, { useEffect, useState } from 'react';
import marvelService from '../../services/marvel.service';
import { Character } from '../../models/character';
import './CharacterPage.scss';

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
      <div>this is a characters page</div>

      <div className="characters-grid">
        {charactersList.map((character) => (
          <div className="character">
            <div>{character.name}</div>
            <div>{character.description}</div>
            <img
              src={`${character.thumbnail.path}/portrait_fantastic.${character.thumbnail.extension}`}
              alt={character.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharactersPage;
