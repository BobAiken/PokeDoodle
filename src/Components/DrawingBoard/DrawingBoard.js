import React, {useEffect, useState} from "react"
import "./DrawingBoard.css"
import CanvasDraw from "react-canvas-draw"



export default function DrawingBoard(){

  const [color, setColor] = useState('#000000')
  const [brushSize, setBrushSize] = useState(2)


  return (
  <>
  <div className="toolBar">
    <input name="color" type="color" value={color} onChange={event=>{setColor(event.target.value)}}/>
    <input name="brushSize" type="number" min={1} value={brushSize} onChange={event=>{setBrushSize(event.target.value)}}/>
  </div>
    <CanvasDraw 
      brushColor={color} 
      canvasWidth={320} 
      canvasHeight={320} 
      brushRadius={brushSize} 
      lazyRadius={0}
    />
  </>
  )
}