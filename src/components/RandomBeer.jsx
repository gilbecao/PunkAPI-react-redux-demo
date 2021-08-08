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
      <section className="beer-item">
        <BeerItem beer={beer} />
        <div className="beer-item__buttons">
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => dispatchLoadRandom()}
          >
            Another Beer
          </button>
          <button
            type="button"
            className="btn btn-warning"
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
