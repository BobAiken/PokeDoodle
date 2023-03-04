import React, {useState, useRef} from "react"
import "./DrawingBoard.css"
import CanvasDraw from "react-canvas-draw"
import PropTypes from "prop-types"

export default function DrawingBoard({pokemonName, addToSavedImages}){

  const [color, setColor] = useState('#000000')
  const [brushSize, setBrushSize] = useState(2)

  let canvas = useRef('canvas')

  const handleSave = () => {
    const saveDataObject = {
      name: pokemonName,
      saveData: canvas.current.getSaveData()
    }
    addToSavedImages(saveDataObject)
  }

  return (
  <>
  <div className="toolBar">
    <input name="color" type="color" value={color} onChange={event=>{setColor(event.target.value)}}/>
    <input name="brushSize" type="number" min={1} value={brushSize} onChange={event=>{setBrushSize(event.target.value)}}/>
    <button onClick={()=>canvas.current.clear()}>Clear</button>
    <button onClick={()=>handleSave()}>Save This Doodle!</button>
  </div>
    <CanvasDraw 
      ref={canvas}
      brushColor={color}
      canvasWidth={320}
      canvasHeight={320}
      brushRadius={brushSize}
      lazyRadius={0}
    />
  </>
  )
}

DrawingBoard.propTypes = {
  pokemonName: PropTypes.string,
  addToSavedImages: PropTypes.func,
}