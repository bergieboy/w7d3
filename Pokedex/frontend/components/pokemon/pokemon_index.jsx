import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pokemon = this.props.pokemon;
    const pokemonIndexItems = pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);
    return (
      <ul>
        <Route path="/pokemon/:pokeId" component={PokemonDetailContainer}/>
        {pokemonIndexItems}
      </ul>
    );
  }
}

export default PokemonIndex;
