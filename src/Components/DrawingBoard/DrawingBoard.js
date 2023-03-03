import React, {useEffect, useState, useRef} from "react"
import "./DrawingBoard.css"



export default function DrawingBoard(){

  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    //Our first draw
    context.fillStyle = '#000000'
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
  }, [])
  return (
    <canvas id="drawing-board" width="320" height="320"></canvas>
  )
}