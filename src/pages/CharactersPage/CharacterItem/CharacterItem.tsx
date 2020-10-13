import React from 'react';
import { useHistory } from 'react-router-dom';
import { Character } from '../../../models/character';
import './CharacterItem.scss';

type CharacterProps = { character: Character };
type Props = CharacterProps & React.HTMLAttributes<HTMLDivElement>;

const CharacterItem: React.FC<Props> = ({ character, ...props }) => {
  const history = useHistory();
  
  const getDescriptionText = () => {
    const defaultText = 'No description informed';
    const hasDescription = character.description.length > 0;
    return hasDescription ? character.description : defaultText;
  };

  

  return (
    <div className="character" {...props}>
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
        <div className="actions">
          <button className="btn-action"  onClick={() => {
                history.push(`/characters/${character.id}`)
              }}>View more</button>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
