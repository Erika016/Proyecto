import "./Card.css";
import {Outlet, Link } from "react-router-dom";
export function Card (props){
return(
    <div className="container">
      <img
      alt="test"
      className="image"
      src={props.imagenUrl}
    />
        <div className="container-informacion">
        <h1>{props.titulo}</h1>
        {/* <button callsName="boton" onClick={props.onClick}>{props.textoBoton}</button> */}
        <Link className="boton" to={`/${props.seccion}`}>+Info</Link>
        </div>
        
    </div>
)
}
