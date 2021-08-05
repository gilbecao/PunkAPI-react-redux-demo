import axios from 'axios';
import actionTypes from './actionTypes';

export function loadBeers() {
  return async (dispatch) => {
    try {
      const { data } = await axios(process.env.REACT_APP_PUNK_API);

      dispatch({
        type: actionTypes.LOAD_BEERS,
        beers: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.API_ERROR,
      });
    }
  };
}

export function loadRandomBeer(isNonAlcoholic = false) {
  return async (dispatch) => {
    let url = `${process.env.REACT_APP_PUNK_API}/random`;
    let type = actionTypes.LOAD_RANDOM_BEER;

    if (isNonAlcoholic) {
      url += `?abv_lt=${process.env.REACT_APP_MAX_ABV}`;
      type = actionTypes.LOAD_RANDOM_NON_ALCOHOLIC_BEER;
    }

    try {
      const { data: [beer] } = await axios(url);

      dispatch({
        type,
        beer,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.API_ERROR,
      });
    }
  };
}
