import React from 'react';
import { PropTypes } from 'prop-types';
import BeerItem from './BeerItem';
import goTop from '../utils/go-top';

export default function BeerList({ beers }) {
  return (
    <>
      <ul data-testid="beer-list">
        {beers.map((beer) => (
          <BeerItem beer={beer} key={beer.id} />
        ))}
      </ul>
      <span
        className="go-top-link"
        onClick={goTop}
        onKeyPress={goTop}
        role="button"
        tabIndex="0"
      >
        ^
        <br />
        Back to Top
      </span>
    </>
  );
}

BeerList.propTypes = {
  beers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
