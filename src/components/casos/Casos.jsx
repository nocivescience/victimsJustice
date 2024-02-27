import React from 'react';
import PiePagina from '../PiePagina';
import { Link } from 'react-router-dom';
export default function Casos() {
    const estilo = {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        boxShadow: "0px 0px 10px 0px black",
        borderRadius: "10px",
        margin: "70px 10px",
    };
    const contentStyle = {
        flexGrow: 1,
    };
    const linkStyle = {
        color: "red",
    };
    return (
        <div className='container' style={estilo}>
            <h1>Casos</h1>
            <ul class="list-group">
                <li class="list-group-item"><Link className='navbar-brand' style={linkStyle} to="/casos/viviana">Caso Viviana Vivanco</Link></li>
                <li class="list-group-item"><Link className='navbar-brand' style={linkStyle}to="/casos/tirador">El Tirador de La Reina</Link></li>
            </ul>
            <PiePagina />
        </div>
    );
}