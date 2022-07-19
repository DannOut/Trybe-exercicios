import { Component } from 'react';
import Pokemon from './Pokemon';
import data from '../data';
import '../pokedex.css'


class Pokedex extends Component {
  render() {
    const allPokemonList = data.map((value) => {
      return (
          <Pokemon
            key={value.id}
            id={value.id}
            name={value.name}
            image={value.image}
            moreInfo={value.moreInfo}
            type={value.type}
          />
      );
    });

    return <div className='all-pokemons'>{allPokemonList}</div>;
  }
}

export default Pokedex;
