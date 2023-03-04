import React from "react";
import { Link } from "react-router-dom";
import "./Error.css"


export default function Error() {
return (
  <div className="error">
    Something has gone wrong...
    <Link to="/">
      <button className="error-button">Go Home</button>
    </Link>
  </div>
)
}