import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import fetchPokemon from "../../apiCalls"

export default function SinglePokemon() {
  
  const [nationalNo, setNationalNo] = useState('')
  const [type, setType] = useState('')
  const [species,setSpecies] = useState('')
  const [height,setHeight] = useState('')
  const [weight,setWeight] = useState('')
  const [abilities,setAbilities] = useState('')

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