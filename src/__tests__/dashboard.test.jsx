import React from 'react';
import Dashboard from '../pages/Dashboard';
import { render, screen } from '../utils/test-utils';
import preloadedState from '../mocks/preloadedState.mock';

describe('Given a Dashboard component', () => {
  describe('When is rendered', () => {
    beforeEach(() => {
      render(<Dashboard />);
    });
    test("Then 'Punk API Demo' title should be in the document", () => {
      expect(screen.getByText('Punk API Demo')).toBeInTheDocument();
    });

    test("Then 'Search' subtitle should be in the document", () => {
      expect(screen.getByTestId('search-subtitle')).toBeInTheDocument();
    });

    test("Then 'Search Results' subtitle should not be in the document", () => {
      expect(screen.queryByTestId('search-results-subtitle')).toBeNull();
    });

    describe('And there are beers', () => {
      test("Then 'Search Results' subtitle should be in the document", () => {
        render(<Dashboard />, { preloadedState });
        expect(
          screen.getByTestId('search-results-subtitle')
        ).toBeInTheDocument();
      });
    });
    describe('And there are no beers', () => {
      test("Then show 'BeerListEmpty' component", () => {
        render(<Dashboard />, { preloadedState: { beers: [] } });
        expect(screen.getByTestId('beer-list-empty')).toBeInTheDocument();
      });
    });
  });
});
