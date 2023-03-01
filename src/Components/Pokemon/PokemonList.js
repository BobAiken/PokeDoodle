import React, {useState,useEffect} from "react"
import PokemonCard from "../PokemonCard/PokemonCard"
import fetchPokemon from "../../apiCalls"

function PokemonList({pokemonList}){

  const pokemonCards = pokemonList.map((pokemon,index) => {
      return(
        <PokemonCard
          id={index+1}
          key={index+1}
          name={pokemon.name}
          img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png`}
        />
      )
    }
  )

  return (
    <>
    {pokemonCards}
    </>
  )
}

export default PokemonList