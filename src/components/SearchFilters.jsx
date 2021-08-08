import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadBeers } from '../redux/actions/actionCreators';
import SEARCH_REGEX from '../constants/searchRegex';

export default function SearchFilters() {
  const [isSearchValid, setIsSearchValid] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState();
  const dispatch = useDispatch();

  const changeEventMap = {
    search_term: setSearchTerm,
    filterBy: setFilterBy,
  };

  function handleInputChange({ target: { name, value } }) {
    changeEventMap[name](value);
  }

  function handleSearchChange({ target: { value } }) {
    const isValid = value
      ? SEARCH_REGEX.test(value)
      : true;

    setIsSearchValid(isValid);
    setSearchTerm(value);
  }

  function handleSearchClick() {
    dispatch(loadBeers(filterBy, searchTerm));
  }

  return (
    <section className="search-area">
      <h2 data-testid="search-subtitle">Search</h2>
      <div>
        <div className="d-flex flex-column">
          <input
            type="text"
            name="search_term"
            className="search_term"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            data-testid="search_input"
          />

          {
          isSearchValid === false
          && (
          <p className="text-danger">
            Search term has invalid characters
          </p>
          )
        }
        </div>

        <fieldset>
          <label htmlFor="beer_name">
            <input
              id="beer_name"
              type="radio"
              name="filterBy"
              data-testid="filterByName"
              value="beer_name"
              onChange={handleInputChange}
            />
            by name
          </label>
          <label htmlFor="brewed_before">
            <input
              id="brewed_before"
              type="radio"
              name="filterBy"
              value="brewed_before"
              onChange={handleInputChange}
            />
            by brewed_date
          </label>
        </fieldset>
        <button
          type="button"
          className="btn btn-warning"
          disabled={!(filterBy && searchTerm.trim() && isSearchValid)}
          onClick={handleSearchClick}
          data-testid="search_button"
        >
          Search
        </button>
      </div>
    </section>
  );
}
