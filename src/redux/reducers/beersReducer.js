import actionTypes from '../actions/actionTypes';

export default function beersReducer(beers = { data: [], filtered: null }, action) {
  let nextBeers = beers;

  switch (action.type) {
    case actionTypes.LOAD_BEERS:
      nextBeers = {
        data: action.beers,
        filtered: action.beers,
      };
      break;

    case actionTypes.FILTER_BEERS:
      nextBeers = {
        ...beers,
        filtered: beers.data.filter(
          ({ name }) => name.toLowerCase().includes(action.beerName.toLowerCase()),
        ),
      };
      break;

    default:
      break;
  }

  return nextBeers;
}
