import './App.css';
import React, {useEffect, useState} from "react"
import fetchPokemon from '../../apiCalls';
import PokemonList from '../Pokemon/PokemonList';
import { Route, Routes } from "react-router-dom"
import Header from '../Header/Header';
import SinglePokemon from '../SinglePokemon/SinglePokemon';
import Error from '../Error/Error';

function App() {

  const [pokemonList, setPokemonList] = useState([])
  const [savedImages, setSavedImages] = useState([])

  const addToSavedImages = (imageObjectToAdd) => {
    const index = savedImages.findIndex(saveObject => saveObject.name === imageObjectToAdd.name)
    if(index > -1){
      let newSavedImages = savedImages
      newSavedImages[index].saveData = imageObjectToAdd.saveData
      setSavedImages(newSavedImages)
    } else {
      setSavedImages([...savedImages, imageObjectToAdd])
    }
  }
  
  useEffect(()=>{
    fetchPokemon('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    .then(data => {setPokemonList(data.results)})
    },[])

  return (
   <main className='main'>
    <Header/>
    <Routes>
      <Route exact path="/" element={<PokemonList pokemonList={pokemonList} savedImages={savedImages}/>}/>
      <Route exact path=":pokemonName" element={<SinglePokemon addToSavedImages={addToSavedImages}/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
   </main>
  );
}

export default App;
