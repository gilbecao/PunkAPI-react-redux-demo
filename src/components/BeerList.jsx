/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { PropTypes } from 'prop-types';
import BeerItem from './BeerItem';

export default function BeerList({ beers }) {
  return (
    <ul>
      {beers.map((beer) => <BeerItem beer={beer} />)}
    </ul>
  );
}

BeerList.propTypes = {
  beers: PropTypes.shape([]).isRequired,
};
