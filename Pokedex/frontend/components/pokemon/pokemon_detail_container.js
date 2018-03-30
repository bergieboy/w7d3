import {connect} from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import { selectSinglePokemon } from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => ({
  pokemonDetails: (id) => selectSinglePokemon(state, id)
});

const mapDispatchToProps = (dispatch) => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonDetail));
