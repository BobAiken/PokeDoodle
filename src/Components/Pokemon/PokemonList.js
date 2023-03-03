import React, {useState} from "react"
import PokemonCard from "../PokemonCard/PokemonCard"
import { Link } from "react-router-dom"
import "./PokemonList.css"

function PokemonList({pokemonList,savedImages}){

  const [query, setQuery] = useState('')

  const handleChange = event => {
    event.preventDefault()
    setQuery(event.target.value)
  }

  const determineImage = (pokemon,id) => {
    let i = savedImages.findIndex(saveObject => saveObject.name === pokemon.name)
    if(i>-1){
      return {data: savedImages[i].saveData}
    }   
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  }


  const pokemonCards = pokemonList
  .filter((pokemon)=>{
    if(query === ""){
      return pokemonList
    } else {
      return pokemon.name.toLowerCase().includes(query)
    }
  })
  .map((pokemon) => {
    let id
    if(pokemon.url.length === 36) {
      id = pokemon.url.slice(-2,-1)
    } else if (pokemon.url.length === 37) {
      id = pokemon.url.slice(-3,-1)
    } else {
      id = pokemon.url.slice(-4,-1)
    }
    return(
      <Link to={pokemon.name} className="link-styling">
        <PokemonCard
        id={id}
        key={id}
        name={pokemon.name}
        img={determineImage(pokemon,id)}
        />
      </Link>
      )
    }
    )

  return (
    <>
      <div className="search-bar-container">
        <form>
          <input type="text" value={query} onChange={handleChange} placeholder="Search" className="search-bar"/>
        </form>
      </div>
    <div className="pokemon-container">
      {pokemonCards}
    </div>
    </>
  )
}

export default PokemonList