import React from 'react';
import { Link } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router';


class PokemonIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pokeName = this.props.pokemon.name;
    const pokeId = this.props.pokemon.id;
    const pokeImg = this.props.pokemon.image_url;
    return (
      <li >
        <Link to={`/pokemon/${pokeId}`}>
          {pokeId}
          <img className='poke-icon' src={pokeImg} />
          {pokeName}
        </Link>
      </li>
    );
  }
}

export default PokemonIndexItem;
