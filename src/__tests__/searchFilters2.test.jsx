/**
 * Given a search form
 * When is rendered for the first time
 *  Then show a search input
 *  Then show a radio search by name
 *  Then show a radio search by brewed before date
 *  Then show a search button
 * And no radio is selected
 *  Then search button is disabled
 * And value matches the "pattern"
 * And value doesnt match the "pattern"
 *  Then show an error message
 *  Then search button is disabled
 */

import React from 'react';
import preloadedStateMock from '../mocks/preloadedState.mock';
import { render, screen, fireEvent } from '../utils/test-utils';
import SearchFilters from '../components/SearchFilters';
import { loadBeers } from '../redux/actions/actionCreators';

jest.mock('../redux/actions/actionCreators');

describe('Given a search form', () => {
  beforeEach(() => {
    loadBeers.mockImplementation(() => ({
      type: 'LOAD_BEERS',
      beers: [],
    }));
    render(<SearchFilters />, preloadedStateMock);
  });

  describe('When is rendered for the first time', () => {
    test('Then show a search input', () => {
      expect(screen.getByTestId(/search_input/i)).toBeInTheDocument();
    });
  });
  describe('And value is empty trimmed', () => {
    describe('And filterby is undefined', () => {
      describe('And isSearchValid is false', () => {
        test('Then search button is disabled', () => {
          expect(screen.getByTestId(/search_button/i)).toHaveAttribute(
            'disabled'
          );
          expect(screen.getByTestId(/search_button/i)).toBeDisabled();
        });
      });
    });
  });
  describe('And value is valid', () => {
    beforeEach(() => {
      fireEvent.change(screen.getByTestId(/search_input/i), {
        target: { value: 'test' },
      });
    });
    describe('And filterby is defined', () => {
      beforeEach(() => {
        fireEvent.click(screen.getByTestId(/filterByName/i));
      });

      test('Then search button is enabled', () => {
        expect(screen.getByTestId(/search_button/i)).not.toBeDisabled();
      });
      describe('And button is clicked', () => {
        test('Then call loadBeers', () => {
          fireEvent.click(screen.getByTestId(/search_button/i));
          expect(loadBeers).toHaveBeenCalled();
        });
      });
    });
  });
});
