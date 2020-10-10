import React, { useEffect, useState } from 'react';
import marvelService from '../../services/marvel.service';
import { Character } from '../../models/character';
import './CharacterPage.scss';
import CharacterItem from './CharacterItem/CharacterItem';
import Pagination from '../../shared/components/pagination/Pagination';
import { Paginate } from '../../models/paginate';

const CharactersPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [paginateResult, setPaginateResult] = useState<Paginate<Character>>(
    {} as Paginate<Character>
  );

  useEffect(() => {
    const getCharactersList = async () => {
      const response = await marvelService.getCharacters();
      console.log(response.data);
      setPaginateResult(response.data);
    };

    getCharactersList();
  }, []);

  const onChangePage = async (page: number) => {
    const offsetNumber = (page - 1) * paginateResult?.limit;
    const response = await marvelService.getCharacters(offsetNumber);
    console.log(response.data);
    setPaginateResult(response.data);
    setCurrentPage(page);
    scrollUp();
  };

  const scrollUp = () => {
    const containerElem = document.getElementById('main-content');
    containerElem?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <span className="page-title">Marvel Characters</span>

      <div className="characters-paginate">
        <Pagination
          totalItems={paginateResult?.total}
          pageSize={paginateResult?.limit}
          onChangePage={onChangePage}
          currentPage={currentPage}
        />
      </div>

      <div className="characters-items">
        {paginateResult?.results?.map((character, index) => (
          <CharacterItem key={index} character={character} />
        ))}
      </div>

      <div className="characters-paginate">
        <Pagination
          totalItems={paginateResult?.total}
          pageSize={paginateResult?.limit}
          onChangePage={onChangePage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default CharactersPage;
