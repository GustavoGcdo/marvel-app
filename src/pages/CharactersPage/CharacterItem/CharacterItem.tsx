import React from 'react';
import { Character } from '../../../models/character';
import './CharacterItem.scss';

type Props = { character: Character };

const CharacterItem: React.FC<Props> = ({ character }) => {
  const getDescriptionText = () => {
    const defaultText = 'No description informed';
    const hasDescription = character.description.length > 0;
    return hasDescription ? character.description : defaultText;
  };
  
  return (
    <div className="character">
      <div
        className="character-image"
        style={{
          backgroundImage: `url('${character.thumbnail.path}/landscape_incredible.${character.thumbnail.extension}')`,
        }}
      />

      <div className="character-info">
        <div className="character-name">{character.name}</div>
        <div className="character-description">
          <span className="label">Descrição:</span>
          <span className="value">{getDescriptionText()}</span>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
