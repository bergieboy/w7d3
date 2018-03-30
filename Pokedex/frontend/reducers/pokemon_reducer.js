import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = [], action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_SINGLE_POKEMON:
      const pokemonIdx = Object.keys(action.singlePokemon.pokemon)[0];
      newState[pokemonIdx] = action.singlePokemon.pokemon[pokemonIdx];
      return newState;
    default:
      return state;
  }
};

export default pokemonReducer;
