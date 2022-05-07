import "./Card.css";
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
        <button callsName="boton" onClick={props.onClick}>{props.textoBoton}</button>
        </div>
    </div>
)
}
