import React from 'react';
import ReactDOM from 'react-dom';
import { requestAllPokemon } from './actions/pokemon_actions';
import { requestSinglePokemon } from './actions/pokemon_actions';
import configureStore from './store/store';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';
import { fetchSinglePokemon } from './util/api_util';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.requestSinglePokemon = requestSinglePokemon;
  window.fetchSinglePokemon = fetchSinglePokemon;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);

});
