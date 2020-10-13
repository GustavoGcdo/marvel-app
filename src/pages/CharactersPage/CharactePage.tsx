import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { debounceEvent } from '../../helpers/debounce';
import { scrollUp } from '../../layouts/MainLayout/MainLayout';
import { Character } from '../../models/character';
import { Paginate } from '../../models/paginate';
import marvelService from '../../services/marvel.service';
import Loading from '../../shared/components/Loading/Loading';
import NotResult from '../../shared/components/NotResult/NotResult';
import Pagination from '../../shared/components/PaginationComponent/Pagination';
import CharacterItem from './CharacterItem/CharacterItem';
import './CharacterPage.scss';
import Search from './Search/Search';

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

  const hasResults = () => {
    return paginateResult.results?.length > 0;
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
        {hasResults() ? (
          paginateResult.results?.map((character, index) => (
            <CharacterItem
              key={index}
              character={character}
            />
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
