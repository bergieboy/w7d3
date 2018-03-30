import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';
import pokemonItemsReducer from './pokemon_items_reducer';

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer,
  pokemonItems: pokemonItemsReducer
});

export default entitiesReducer;
