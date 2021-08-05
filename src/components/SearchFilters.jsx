import React, { useState } from 'react';

export default function SearchFilters() {
  const [searchTerm, setSearchTerm] = useState();
  const [filterBy, setFilterBy] = useState();

  const changeEventMap = {
    search_term: setSearchTerm,
    filterBy: setFilterBy,
  };

  function handleChange({ target: { name, value } }) {
    changeEventMap[name](value);
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
          onChange={handleChange}
        />
        <fieldset>
          <label htmlFor="name">
            <input
              type="radio"
              name="filterBy"
              value="name"
              onChange={handleChange}
            />
            by name
          </label>
          <label htmlFor="description">
            <input
              type="radio"
              name="filterBy"
              value="description"
              onChange={handleChange}
            />
            by description
          </label>
          <label htmlFor="brewed_date">
            <input
              type="radio"
              name="filterBy"
              value="brewed_date"
              onChange={handleChange}
            />
            by brewed_date
          </label>
        </fieldset>
        <button
          type="button"
          disabled={!filterBy}
        >
          Search

        </button>
      </div>
    </>
  );
}
