import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/stores';
import initialState from './redux/stores/initialState';
import SearchResults from './components/SeachResults';
import BeerList from './components/BeerList';
import RandomBeer from './components/RandomBeer';
import SearchFilters from './components/SearchFilters';

const BeerSearchResult = SearchResults(BeerList);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore(initialState)}>
      <h1>Punk API Demo</h1>
      <RandomBeer />
      <SearchFilters />
      <BeerSearchResult />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
