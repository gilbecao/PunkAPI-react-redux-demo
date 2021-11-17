/**
 * Given a list of beers
 *  When first renders
 *   Then it should render the list of beers
 *   Then beer name is rendered
 *   Then beer description is rendered
 *   Then beer image is rendered
 */

import React from 'react';
import { render } from '@testing-library/react';
import BeerList from '../components/BeerList';
import beerMock from '../mocks/beers.mock';

describe('Given a list of beers', () => {
  describe('When first renders', () => {
    let container = null;
    beforeEach(() => {
      container = render(<BeerList beers={beerMock} />);
    });

    afterEach(() => {
      container = null;
    });

    it('Then it should render the list of beers', () => {
      const { queryByTestId } = container;
      const beerList = queryByTestId(/beer-list/i);

      expect(beerList).toBeInTheDocument();
    });

    it('Then beer name "Punk IPA 2007 - 2010" is rendered', () => {
      const { getByText } = container;
      const beerName = getByText(/Punk IPA 2007 - 2010/i);

      expect(beerName).toBeInTheDocument();
    });

    it('Then beer description is rendered container "this is to beer what democracy is to history."', () => {
      const { getByText } = container;
      const beerDescription = getByText(
        /this is to beer what democracy is to history./i
      );

      expect(beerDescription).toBeInTheDocument();
    });

    it('Then beer image is rendered', () => {
      const { getByTestId } = container;
      const beerImage = getByTestId(/beer-image-1/i);

      expect(beerImage).toBeInTheDocument();
    });
  });
});
