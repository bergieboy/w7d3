import * as APIUtils from '../util/api_util';
export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_SINGLE_POKEMON = 'RECEIVE_SINGLE_POKEMON';

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receiveSinglePokemon = (singlePokemon) => ({
  type: RECEIVE_SINGLE_POKEMON,
  singlePokemon
});


export const requestAllPokemon = () => (dispatch) => (
  APIUtils.fetchAllPokemon()
          .then((pokemon) => dispatch(receiveAllPokemon(pokemon)))
);

export const requestSinglePokemon = (id) => (dispatch) => (
  APIUtils.fetchSinglePokemon(id)
          .then((singlePokemon) => dispatch(receiveSinglePokemon(singlePokemon)))
);
