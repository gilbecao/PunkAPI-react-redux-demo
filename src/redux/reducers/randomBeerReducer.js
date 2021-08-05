import actionTypes from '../actions/actionTypes';

export default function randomBeerReducer(beer = {}, action) {
  let nextBeer = beer;

  switch (action.type) {
    case actionTypes.LOAD_RANDOM_BEER:
    case actionTypes.LOAD_RANDOM_NON_ALCOHOLIC_BEER:
      nextBeer = action.beer;
      break;

    default:
      break;
  }

  return nextBeer;
}
