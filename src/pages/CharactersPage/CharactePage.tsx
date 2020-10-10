import React, { useCallback, useEffect, useState } from 'react';
import marvelService from '../../services/marvel.service';
import { Character } from '../../models/character';
import './CharacterPage.scss';
import CharacterItem from './CharacterItem/CharacterItem';
import Pagination from '../../shared/components/pagination/Pagination';
import { Paginate } from '../../models/paginate';
import Search from './Search/Search';
import { scrollUp } from '../../layouts/MainLayout/MainLayout';
import { debounceEvent } from '../../helpers/debounce';
import Loading from '../../shared/components/Loading/Loading';
import NotResult from '../../shared/components/NotResult/NotResult';

const paginateInit = {} as Paginate<Character>;

const CharactersPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filteredName, setFilteredName] = useState<string>();
  const [paginateResult, setPaginateResult] = useState(paginateInit);
  const [isLoading, setIsLoading] = useState(false);

  const getCharactersList = useCallback(
    async (offset?: number, name?: string) => {
      setIsLoading(true);
      const response = await marvelService.getCharacters(offset, name);
      setPaginateResult(response.data);
      setIsLoading(false);
    },
    []
  );

  useEffect(() => {
    getCharactersList();
  }, [getCharactersList]);

  const onChangePage = async (page: number) => {
    const offsetNumber = (page - 1) * paginateResult?.limit;
    await getCharactersList(offsetNumber, filteredName);
    setCurrentPage(page);
    scrollUp();
  };

  const searchCharacters = async (name: string) => {
    await getCharactersList(0, name);
    setFilteredName(name);
    setCurrentPage(1);
  };

  return (
    <div>
      <span className="page-title">Marvel Characters</span>

      <Search onChange={debounceEvent(searchCharacters, 1000)} />

      <div className="characters-paginate">
        <Pagination
          totalItems={paginateResult?.total}
          pageSize={paginateResult?.limit}
          onChangePage={onChangePage}
          currentPage={currentPage}
        />
      </div>

      <div className="characters-items">
        {paginateResult.results?.length > 0 ? (
          paginateResult.results?.map((character, index) => (
            <CharacterItem key={index} character={character} />
          ))
        ) : (
          <NotResult />
        )}
      </div>

      <div className="characters-paginate">
        <Pagination
          totalItems={paginateResult?.total}
          pageSize={paginateResult?.limit}
          onChangePage={onChangePage}
          currentPage={currentPage}
        />
      </div>
      <Loading isLoading={isLoading} />
    </div>
  );
};

export default CharactersPage;
