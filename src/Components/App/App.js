import './App.css';
import React, {useEffect, useState} from "react"
import fetchPokemon from '../../apiCalls';
import PokemonList from '../Pokemon/PokemonList';
import { Route, Routes, useParams } from "react-router-dom"
import Header from '../Header/Header';
import SinglePokemon from '../SinglePokemon/SinglePokemon';

function App() {

  const [pokemonList, setPokemonList] = useState([])
  
  useEffect(()=>{
    fetchPokemon('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    .then(data => {setPokemonList(data.results)})
    },[])

  return (
   <main>
    <Header/>
    <Routes>
      <Route exact path="/" element={<PokemonList pokemonList={pokemonList}/>}/>
      <Route exact path=":pokemonName" element={<SinglePokemon/>}/>
    </Routes>
   </main>
  );
}

export default App;
