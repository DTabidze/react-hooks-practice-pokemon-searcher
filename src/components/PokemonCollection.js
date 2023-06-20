import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonDB}) {


  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemonDB.map(pokemon => <PokemonCard 
          key={pokemon.id} 
          name={pokemon.name}
          sprites={pokemon.sprites}
          //spritesBack={pokemon.sprites}
          hp={pokemon.hp}/>)}
    </Card.Group>
  );
}

export default PokemonCollection;
