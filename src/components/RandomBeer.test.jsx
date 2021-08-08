import React from 'react';
import RandomBeer from './RandomBeer';
import { fireEvent, render, screen } from '../utils/test-utils';
import { loadRandomBeer } from '../redux/actions/actionCreators';
import preloadedState from '../mocks/preloadedState.mock';
import beersMock from '../mocks/beers.mock';
import actionTypes from '../redux/actions/actionTypes';

jest.mock('../redux/actions/actionCreators');

describe('Given a RandomBeer component', () => {
  describe('When is rendered', () => {
    beforeEach(() => {
      loadRandomBeer
        .mockImplementationOnce(() => ({
          type: actionTypes.LOAD_RANDOM_NON_ALCOHOLIC_BEER,
          beer: beersMock[0],
        }));
      render(<RandomBeer />, { preloadedState });
    });

    test('Then display the beer title', () => {
      expect(screen.getByTestId('beer-name')).toBeInTheDocument();
    });

    test('Then display the beer image', () => {
      expect(screen.getByTestId('beer-image')).toBeInTheDocument();
    });

    test('Then display the beer description', () => {
      expect(screen.getByTestId('beer-description')).toBeInTheDocument();
    });

    describe('And Another beer button is clicked', () => {
      test('Then beer title is "Morag\'s Mojito - B-Sides"', async () => {
        loadRandomBeer
          .mockImplementationOnce(() => ({
            type: actionTypes.LOAD_RANDOM_NON_ALCOHOLIC_BEER,
            beer: beersMock[1],
          }));
        const button = screen.getByTestId('random-beer-button');
        fireEvent.click(button);

        const { textContent } = await screen.getByTestId('beer-name');
        expect(textContent).toBe('Morag\'s Mojito - B-Sides');
      });
    });

    describe('And Random non alcoholic beer button is clicked', () => {
      test('Then beer title is "The End Of History"', async () => {
        loadRandomBeer
          .mockImplementationOnce(() => ({
            type: actionTypes.LOAD_RANDOM_NON_ALCOHOLIC_BEER,
            beer: beersMock[2],
          }));

        const button = screen.getByTestId('non-alcoholic-beer-button');
        fireEvent.click(button);

        const { textContent } = await screen.getByTestId('beer-name');
        expect(textContent).toBe('The End Of History');
      });
    });
  });
});
