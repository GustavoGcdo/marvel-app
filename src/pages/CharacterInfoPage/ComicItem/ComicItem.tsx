import React from 'react';
import './ComicItem.scss';
import { Comic } from '../../../models/comic';

type CharacterProps = { comic: Comic };
type Props = CharacterProps & React.HTMLAttributes<HTMLDivElement>;

const ComicItem: React.FC<Props> = ({ comic }) => {
  return (
    <div className="comic-item-container">
      <div
        className="comic-image"
        style={{
          backgroundImage: `url('${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}')`,
        }}
      />
      <div className="comic-info">
        <span className="comict-title">{comic.title}</span>
      </div>
    </div>
  );
};

export default ComicItem;
