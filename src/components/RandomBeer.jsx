import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import BeerItem from './BeerItem';
import { loadRandomBeer } from '../redux/actions/actionCreators';

export default function RandomBeer() {
  const beer = useSelector(({ randomBeer }) => randomBeer);
  const dispatch = useDispatch();

  const dispatchLoadRandom = (isNonAlcoholic) => {
    dispatch(loadRandomBeer(isNonAlcoholic));
  };

  useEffect(() => {
    dispatchLoadRandom();
  }, []);

  return (
    beer && (
    <section>
      <BeerItem beer={beer} />
      <div>
        <button
          type="button"
          onClick={() => dispatchLoadRandom()}
        >
          Another Beer
        </button>
        <button
          type="button"
          onClick={() => dispatchLoadRandom(true)}
        >
          Random non
          <br />
          alcoholic Beer
        </button>
      </div>
    </section>
    )
  );
}
