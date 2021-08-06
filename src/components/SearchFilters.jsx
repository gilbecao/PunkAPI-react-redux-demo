import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadBeers } from '../redux/actions/actionCreators';

export default function SearchFilters() {
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

  function handleSearchClick() {
    if (!filterBy || !searchTerm.trim()) return;
    dispatch(loadBeers(filterBy, searchTerm));
  }

  return (
    <>
      <h2>Search</h2>
      <div>
        <input
          type="text"
          name="search_term"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <fieldset>
          <label htmlFor="beer_name">
            <input
              id="beer_name"
              type="radio"
              name="filterBy"
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
          disabled={!(filterBy && searchTerm.trim())}
          onClick={handleSearchClick}
        >
          Search

        </button>
      </div>
    </>
  );
}
