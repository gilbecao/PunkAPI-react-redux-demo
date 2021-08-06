import actionTypes from '../actions/actionTypes';

export default function beersReducer(beers = null, action) {
  let nextBeers = beers;

  switch (action.type) {
    case actionTypes.LOAD_BEERS:
    case actionTypes.FILTER_BEERS:
      nextBeers = action.beers;
      break;

    default:
      break;
  }

  return nextBeers;
}
