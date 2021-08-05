/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

export default function SeachResults(List) {
  function SearchResults(props) {
    return <List {...props} />;
  }

  const ListComponentName = List.displayName
    || List.name
    || 'Component';

  SearchResults.displayName = `SearchResults${ListComponentName}`;

  return SearchResults;
}
