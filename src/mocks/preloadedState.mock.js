import beersMock from './beers.mock';

const [randomBeer, ...data] = beersMock;

export default {
  beers: {
    data,
    filtered: data,
  },
  randomBeer,
};
