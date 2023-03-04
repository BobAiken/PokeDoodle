import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import fetchPokemon from "../../apiCalls"
import DrawingBoard from "../DrawingBoard/DrawingBoard"
import "./SinglePokemon.css"
import PropTypes from "prop-types"
import Error from "../Error/Error"


export default function SinglePokemon({addToSavedImages}) {
  
  const [nationalNo, setNationalNo] = useState('')
  const [type, setType] = useState('')
  const [type2, setType2] = useState('')
  const [height,setHeight] = useState('')
  const [weight,setWeight] = useState('')
  const [ability,setAbility] = useState('')
  const [ability2,setAbility2] = useState('')
  const [ability3,setAbility3] = useState('')
  const [officialArt, setOfficialArt] = useState('')
  const [networkError, setNetworkError] = useState(false)
  const [loading, setLoading] = useState(true)

  let { pokemonName } = useParams()

  useEffect(()=>{
    fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(data=>{
      setAbility(data.abilities["0"].ability.name)
      if(data.abilities.length === 2){
        setAbility2(data.abilities["1"].ability.name)
      }
      if(data.abilities.length === 3){
        setAbility2(data.abilities["1"].ability.name)
        setAbility3(data.abilities["2"].ability.name)
      }
      setHeight(data.height)
      setNationalNo(data.id)
      setWeight(data.weight)
      if(data.types.length === 2){
        setType2(data.types["1"].type.name)
      }
      setType(data.types["0"].type.name)
      setOfficialArt(data.sprites.other["official-artwork"].front_default)
      setLoading(false)

    })
    .catch(()=>{
      setNetworkError(true)
      setLoading(false)
    })
  }
  ,[])

  const renderSinglePokemon = () => {
    if(loading){
      return <div className="loading">Loading...</div>
    } else if (networkError) {
      return <Error/>
    } else {
      return (
        <div className="single-pokemon-container">
          <img src={officialArt}/>
          <div className="pokedex-data">
            <p>Name: {pokemonName}</p>
            <p>NationalNo: {nationalNo}</p>
            <p>Type: {type} {type2}</p>
            <p>Height: {height} m</p>
            <p>Weight: {weight} kg</p>
            <p>Abilities: {ability}, {ability2}, {ability3}</p>
          </div>
          <DrawingBoard pokemonName={pokemonName} addToSavedImages={addToSavedImages}/>
        </div>
      )
    }
  }

  return (
    <>
      {renderSinglePokemon()}
    </>
  )
}

SinglePokemon.propTypes = {
  addToSavedImages: PropTypes.func
}