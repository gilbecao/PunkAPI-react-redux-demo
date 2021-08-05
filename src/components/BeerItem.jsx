import React from 'react';
import { PropTypes } from 'prop-types';

export default function BeerItem({ beer }) {
  return (
    (beer?.name && beer?.description)
      ? (
        <li>
          <picture>
            <img src={beer?.image_url} alt={beer?.name} />
          </picture>
          <h3>{beer?.name}</h3>
          <p>{beer?.description}</p>
        </li>
      )
      : ''
  );
}

BeerItem.propTypes = {
  beer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
  }).isRequired,
};
