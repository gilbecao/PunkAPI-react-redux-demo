import { combineReducers } from 'redux';
import beers from './beersReducer';
import randomBeer from './randomBeerReducer';

export default combineReducers({
  beers,
  randomBeer,
});
