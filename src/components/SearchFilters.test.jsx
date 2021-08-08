import React from 'react';
import { fireEvent, render, screen } from '../utils/test-utils';
import beersMock from '../mocks/beers.mock';
import { loadBeers } from '../redux/actions/actionCreators';
import actionTypes from '../redux/actions/actionTypes';
import SearchFilters from './SearchFilters';

jest.mock('../redux/actions/actionCreators');

describe('Given SearchFilters component', () => {
  beforeEach(() => {
    loadBeers.mockReturnValue({
      type: actionTypes.LOAD_BEERS,
      beers: beersMock,
    });

    render(<SearchFilters />);
  });
  describe('When is rendered', () => {
    describe('And search input value is invalid', () => {
      test('Then display "Search term has invalid characters"', () => {
        const input = screen.getByTestId('search_input');
        fireEvent.change(input, { target: { value: '.' } });

        expect(screen.getByText('Search term has invalid characters')).toBeInTheDocument();
      });
    });

    describe('And search input value is valid', () => {
      beforeEach(() => {
        const input = screen.getByTestId('search_input');
        fireEvent.change(input, { target: { value: 'Leffe-Blonde' } });
      });
      test('Then should not display "Search term has invalid characters"', () => {
        expect(screen.queryByText('Search term has invalid characters')).toBeNull();
      });

      describe('And filterBy name is checked', () => {
        describe('And search_button is clicked', () => {
          test('Then loadBeers is be called', () => {
            const filterByName = screen.getByTestId('filterByName');
            fireEvent.click(filterByName);
            const searchButton = screen.getByTestId('search_button');
            fireEvent.click(searchButton);

            expect(loadBeers).toHaveBeenCalled();
          });
        });
      });
    });

    describe('And search input value is empty', () => {
      test('Then should not display "Search term has invalid characters"', () => {
        const input = screen.getByTestId('search_input');
        fireEvent.change(input, { target: { value: '.' } });
        fireEvent.change(input, { target: { value: '' } });

        expect(screen.queryByText('Search term has invalid characters')).toBeNull();
      });
    });
  });
});
