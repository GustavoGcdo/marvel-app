import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import marvelService from '../../services/marvel.service';
import './CharacterInfoPage.scss';
import { Comic } from '../../models/comic';
import { Paginate } from '../../models/paginate';
import Loading from '../../shared/components/Loading/Loading';
import ComicItem from './ComicItem/ComicItem';
import { Character } from '../../models/character';
import NotResult from '../../shared/components/NotResult/NotResult';

const paginateInit = {} as Paginate<Comic>;
const characterInit = {} as Character;

const CharacterInfoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [characterActive, setCharacterActive] = useState(characterInit);
  const [paginateResult, setPaginateResult] = useState(paginateInit);
  const [isLoading, setIsLoading] = useState(false);

  const getCharacterAndComicsList = useCallback(async (characterId: string) => {
    setIsLoading(true);
    const characterResponse = await marvelService.getCharacterById(characterId);
    const [firstResult] = characterResponse.data.results;
    setCharacterActive(firstResult);

    const response = await marvelService.getCharactersComics(characterId);
    setPaginateResult(response.data);

    setIsLoading(false);
  }, []);

  const getDescriptionText = () => {
    const defaultText = 'No description informed';
    const hasDescription = characterActive?.description?.length > 0;
    return hasDescription ? characterActive.description : defaultText;
  };

  const hasResults = () => {
    return paginateResult.results?.length > 0;
  };

  useEffect(() => {
    getCharacterAndComicsList(id);
  }, [getCharacterAndComicsList, id]);

  return (
    <div>
      <div>
        <span className="page-title">Info Character</span>
      </div>
      <div className="character-info-container">
        <div className="character-info-image-container">
          <div
            className="character-info-image"
            style={{
              backgroundImage: `url('${characterActive?.thumbnail?.path}/portrait_uncanny.${characterActive?.thumbnail?.extension}')`,
            }}
          />
        </div>

        <div className="character-info-area">
          <div className="info-section">
            <span className="label">Name:</span>
            <span className="value">{characterActive.name}</span>
          </div>
          <div className="info-section">
            <span className="label">Description:</span>
            <span className="value">{getDescriptionText()}</span>
          </div>
        </div>
      </div>
      <div>
        <span className="page-title">Some Comics</span>
        <div className="character-comics-list">
          {hasResults() ? (
            paginateResult?.results?.map((comic) => <ComicItem comic={comic} />)
          ) : (
            <NotResult />
          )}
        </div>

        <Loading isLoading={isLoading} />
      </div>
    </div>
  );
};

export default CharacterInfoPage;
