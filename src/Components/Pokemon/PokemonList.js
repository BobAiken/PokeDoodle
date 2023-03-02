import React, {useState,useEffect} from "react"
import PokemonCard from "../PokemonCard/PokemonCard"
import fetchPokemon from "../../apiCalls"
import "./PokemonList.css"

function PokemonList({pokemonList,filterPokemon}){

  const [query, setQuery] = useState('')

  const handleChange = event => {
    event.preventDefault()
    setQuery(event.target.value)
  }

  const pokemonCards = pokemonList
  .filter((pokemon)=>{
    if(query === ""){
      return pokemonList
    } else {
      return pokemon.name.toLowerCase().includes(query)
    }
  })
  .map((pokemon,index) => {
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
    <div className="pokemon-container">
      <div className="search-bar">
        <form>
          <input type="text" value={query} onChange={handleChange}/>
        </form>
      </div>
      {pokemonCards}
    </div>
  )
}

export default PokemonList