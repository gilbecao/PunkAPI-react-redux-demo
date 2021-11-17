/**
 * Given a random beer component
 *  When is rendered for the first time
 *   Then show the beer name
 *   Then beer name is not empty
 *   Then show the beer description
 *   Then beer description is not empty
 *   Then show the beer image
 *   Then show a button to display a random beer
 */

import React from 'react';
import RandomBeer from '../components/RandomBeer';
import { render, screen, fireEvent } from '../utils/test-utils';
import preloadedState from '../mocks/preloadedState.mock';
import { loadRandomBeer } from '../redux/actions/actionCreators';

jest.mock('../redux/actions/actionCreators');

describe('Given a random beer component', () => {
  describe('When is rendered for the first time', () => {
    describe('And beer name is defined', () => {
      beforeEach(() => {
        loadRandomBeer.mockReturnValue({
          type: '',
          beer: {},
        });
        render(<RandomBeer />, { preloadedState });
      });

      it('Then show the beer name "Punk IPA 2007 - 2010"', () => {
        expect(screen.getByText(/Punk IPA 2007 - 2010/i)).toBeInTheDocument();
      });

      /* it('Then show the beer description', () => {
        expect(1).toBe(1);
      });

      it('Then show the beer image', () => {
      expect(1).toBe(1);
      });

      it('Then show a button to display a random beer', () => {
        expect(1).toBe(1);
      }); */
    });

    describe('And beer name is empty', () => {
      beforeEach(() => {
        loadRandomBeer.mockReturnValue({
          type: '',
          beer: {},
        });
        render(<RandomBeer />, {
          preloadedState: {
            ...preloadedState,
            randomBeer: { id: 1, name: '', description: '', image: '' },
          },
        });
      });

      describe('And "Another Beer" button is clicked', () => {
        beforeEach(() => {
          fireEvent.click(screen.getByText(/Another Beer/i));
        });
        it('Then call loadRandomBeer 2 times', () => {
          expect(loadRandomBeer).toHaveBeenCalledTimes(2);
        });
      });
      describe('And "Another Beer" button is clicked', () => {
        beforeEach(() => {
          fireEvent.click(screen.getByText(/Random non/i));
        });
        it('Then call loadRandomBeer 2 times', () => {
          expect(loadRandomBeer).toHaveBeenCalledTimes(2);
        });
      });

      /* it('Then beer description is not empty', () => {
        expect(1).toBe(1);
      }); */
    });
  });
});
