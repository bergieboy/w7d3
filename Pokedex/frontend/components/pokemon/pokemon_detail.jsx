import React from 'react';


class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokeId: this.props.match.params.pokeId };
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  componentWillMount() {
    this.props.requestSinglePokemon(this.state.pokeId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.pokeId !== this.props.match.params.pokeId) {
      this.props.requestSinglePokemon(newProps.match.params.pokeId);
      this.setState({ pokeId: newProps.match.params.pokeId});
    }
  }

  render() {
    const poke = this.props.pokemonDetails(this.state.pokeId);
    const pokeImg = poke.image_url;
    let pokeMoves = "";
    let pokeItems = [];
    if (poke.moves) pokeMoves = poke.moves.join(', ');
    if (poke.item_ids.length !== 0) {
      pokeItems = poke.item_ids;
    }

    console.log(pokeItems);
    return (
      <section className='pokemon-detail'>
        <figure>
          <img src={pokeImg} />
        </figure>
        <ul>
          <li><h2>{poke.name}</h2></li>
          <li>Type: {poke.poke_type}</li>
          <li>Attack: {poke.attack}</li>
          <li>Defense: {poke.defense}</li>
          <li>Moves: {pokeMoves}</li>
        </ul>
        <section>
          <ul>
            {pokeItems.map((id) => <li>{id}</li>)}
          </ul>
        </section>

      </section>
    );
  }
}

export default PokemonDetail;
