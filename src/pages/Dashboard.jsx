import React from 'react';
import { useSelector } from 'react-redux';

import RandomBeer from '../components/RandomBeer';
import SearchFilters from '../components/SearchFilters';
import SeachResultsContainer from '../components/SeachResultsContainer';

import './dashboard.scss';

export default function Dashboard() {
  const loadedBeers = useSelector(
    ({ beers }) => beers,
  );

  return (
    <div className="container">
      <h1>Punk API Demo</h1>
      <RandomBeer />
      <SearchFilters />
      <SeachResultsContainer loadedBeers={loadedBeers} />
    </div>
  );
}
