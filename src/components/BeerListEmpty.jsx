import React from 'react';
import noBeer from '../assets/no-beer-placeholder.png';

export default function BeerListEmpty() {
  return (
    <img
      src={noBeer}
      alt="Nothing to see here."
      data-testid="beer-list-empty"
    />
  );
}
