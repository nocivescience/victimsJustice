import { Link } from "react-router-dom";
import React from "react";
import PiePagina from "../PiePagina";

export default function Caso({ nombre, descripcion }) {
  const estilo = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    color: "white",
    boxShadow: "0px 0px 10px 0px black",
    borderRadius: "10px",
    margin: "70px 10px",
    padding: "20px",
  };

  const linkStyle = {
    color: "red",
  };

  return (
    <div className="container" style={estilo}>
      <h1>Caso {nombre}</h1>
      <div dangerouslySetInnerHTML={{ __html: descripcion }} style={{textAlign: 'justify'}}/>
      <Link to="/casos" style={linkStyle}>Volver</Link>
      <PiePagina />
    </div>
  );
}
