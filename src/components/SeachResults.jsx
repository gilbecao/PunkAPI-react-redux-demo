import React from 'react';
import { useSelector } from 'react-redux';

export default (List) => () => {
  const filteredBeers = useSelector(({ beers: { filtered } }) => filtered);

  return (
    <>
      <h2>Search Results</h2>
      <List beers={filteredBeers} />
    </>
  );
};
