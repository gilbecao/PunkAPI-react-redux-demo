import React from 'react';
import { PropTypes } from 'prop-types';

import BeerList from './BeerList';
import BeerListEmpty from './BeerListEmpty';
import SearchResults from './SeachResults';

export default function SeachResultsContainer({ loadedBeers }) {
  const BeerSearchResult = SearchResults(BeerList);
  const BeerSearchEmpty = SearchResults(BeerListEmpty);

  return loadedBeers && (
    <>
      <h2>Search Results</h2>
      {
        loadedBeers.length
          ? <BeerSearchResult beers={loadedBeers} />
          : <BeerSearchEmpty />
      }
    </>
  );
}

SeachResultsContainer.propTypes = {
  loadedBeers: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
};

SeachResultsContainer.defaultProps = {
  loadedBeers: null,
};
