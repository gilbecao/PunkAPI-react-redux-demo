import React from 'react';
import { useSelector } from 'react-redux';
import BeerItem from './BeerItem';

export default function RandomBeer() {
  const beer = useSelector(({ randomBeer }) => randomBeer);

  return (
    <section>
      <BeerItem beer={beer} />
      <div>
        <button type="button">Another Beer</button>
        <button type="button">
          Random non
          <br />
          alcoholic Beer
        </button>
      </div>
    </section>
  );
}
