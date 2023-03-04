import React, {useRef} from "react";
import "./PokemonCard.css"
import CanvasDraw from "react-canvas-draw"

function PokemonCard({name,img}) {

  let canvas = useRef('canvas')

  return (
    <div className="card">
      <div className="card-header">
        <p>{name}</p>
      </div>
      {typeof img === "object" ? 
      <CanvasDraw 
        ref={canvas} 
        immediateLoading={true} 
        disabled={true} 
        hideGrid={true} 
        canvasHeight={320} 
        canvasWidth={320} 
        saveData={img.data}
      />
      :
      <img src={img}/>}
    </div>
  )
}

export default PokemonCard