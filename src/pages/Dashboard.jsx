import React from 'react';
import { useSelector } from 'react-redux';
import SearchResults from '../components/SeachResults';
import BeerList from '../components/BeerList';
import RandomBeer from '../components/RandomBeer';
import SearchFilters from '../components/SearchFilters';

const BeerSearchResult = SearchResults(BeerList);

export default function Dashboard() {
  const filteredBeers = useSelector(
    ({ beers: { filtered } }) => filtered,
  );

  return (
    <>
      <h1>Punk API Demo</h1>
      <RandomBeer />
      <SearchFilters />
      <BeerSearchResult beers={filteredBeers} />
    </>
  );
}
