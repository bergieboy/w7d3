export const selectAllPokemon = (state) => (
  Object.keys(state.entities.pokemon).map((poke) => state.entities.pokemon[poke])
);

export const selectSinglePokemon = (state, id) => (
  state.entities.pokemon[id]
);
