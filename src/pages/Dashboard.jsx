import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchResults from '../components/SeachResults';
import BeerList from '../components/BeerList';
import RandomBeer from '../components/RandomBeer';
import SearchFilters from '../components/SearchFilters';

import { loadBeers } from '../redux/actions/actionCreators';

const BeerSearchResult = SearchResults(BeerList);

export default function Dashboard() {
  const filteredBeers = useSelector(
    ({ beers: { filtered } }) => filtered,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBeers());
  }, []);

  return (
    <>
      <h1>Punk API Demo</h1>
      <RandomBeer />
      <SearchFilters />
      <h2>Search Results</h2>
      {filteredBeers && <BeerSearchResult beers={filteredBeers} />}
    </>
  );
}
