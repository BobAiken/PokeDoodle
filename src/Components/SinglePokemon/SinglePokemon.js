import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import fetchPokemon from "../../apiCalls"

export default function SinglePokemon() {
  
  let { pokemonName } = useParams()

  useEffect(()=>{
    fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(data=>{console.log(data)})
  }
  ,[])

  return (
    <>hello</>
  )
}