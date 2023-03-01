import React from "react";
import {Link} from "react-router-dom"

function PokemonCard({name,img}) {
  return (
    <div className="card">
      <div className="card-header">
        <p>{name}</p>
      </div>
      <img src={img}/>
    </div>
  )
}

export default PokemonCard