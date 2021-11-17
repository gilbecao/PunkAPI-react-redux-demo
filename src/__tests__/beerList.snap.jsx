import React from 'react';
import { render } from '@testing-library/react';
import BeerList from '../components/BeerList';
import beersMock from '../mocks/beers.mock';

test('BeerList should match snapshot', () => {
  const { container } = render(<BeerList beers={beersMock} />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <ul
        data-testid="beer-list"
      >
        <li>
          <h3
            data-testid="beer-name"
          >
            Punk IPA 2007 - 2010
          </h3>
          <div>
            <picture
              data-testid="beer-image-1"
            >
              <img
                alt="Punk IPA 2007 - 2010"
                src="https://images.punkapi.com/v2/192.png"
              />
            </picture>
            <p
              data-testid="beer-description"
            >
              Our flagship beer that kick started the craft beer revolution. This is James and Martin's original take on an American IPA, subverted with punchy New Zealand hops. Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <h3
            data-testid="beer-name"
          >
            Morag's Mojito - B-Sides
          </h3>
          <div>
            <picture
              data-testid="beer-image-2"
            >
              <img
                alt="Morag's Mojito - B-Sides"
                src="https://images.punkapi.com/v2/keg.png"
              />
            </picture>
            <p
              data-testid="beer-description"
            >
              A cunning cocktail blend of grapefruit hops, ginger spice and refreshing mint.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <h3
            data-testid="beer-name"
          >
            The End Of History
          </h3>
          <div>
            <picture
              data-testid="beer-image-3"
            >
              <img
                alt="The End Of History"
                src="https://images.punkapi.com/v2/24.png"
              />
            </picture>
            <p
              data-testid="beer-description"
            >
              The End of History: The name derives from the famous work of philosopher Francis Fukuyama, this is to beer what democracy is to history. Complexity defined. Floral, grapefruit, caramel and cloves are intensified by boozy heat.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <h3
            data-testid="beer-name"
          >
            No image beer
          </h3>
          <div>
            <picture
              data-testid="beer-image-4"
            >
              <img
                alt="No image beer"
                src="beer-placeholder.png"
              />
            </picture>
            <p
              data-testid="beer-description"
            >
              The no image beer
            </p>
          </div>
          <hr />
        </li>
      </ul>
      <span
        class="go-top-link"
        role="button"
        tabindex="0"
      >
        ^
        <br />
        Back to Top
      </span>
    </div>
  `);
});
