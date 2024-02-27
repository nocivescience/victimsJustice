import React from "react";
import PiePagina from "./PiePagina";
export default function Home() {
    const estilo = {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        color: "white",
        boxShadow: "0px 0px 10px 0px black",
        borderRadius: "10px",
        margin: "70px 10px",
    };
    const contentStyle = {
        flexGrow: 1,
    };
    return (
        <div className="container" style={estilo}>
            <div style={contentStyle}>
            <div className="row p-5">
                <div className="col">
                    <h2>Misión</h2>
                </div>
                <p>Esta plataforma se establece con el propósito de canalizar el proceso de presentar quejas relacionadas con la conducta de los ministerios públicos, jueces y defensores públicos en el ejercicio de administrar la justicia. Reconociendo que la justicia desempeña un papel fundamental en cualquier sociedad al permitir el control del delito y abordar los abusos, ya sea por exceso de autoridad o por negligencia en el cumplimiento de sus responsabilidades. Es imperativo que los ciudadanos se pronuncien colectivamente para dirigir los esfuerzos hacia la corrección de estas cuestiones. La única vía para lograrlo es mediante el estricto cumplimiento de la ley.</p>
                <p>Personalmente, como administrador de este sitio, me ha sorprendido encontrarme inmerso en un proceso judicial en el que figuro como víctima, evidenciando una serie de irregularidades significativas en diversos aspectos. Es por ello que mi objetivo es promover una canalización adecuada de los esfuerzos y frustraciones, con el fin de materializar las correcciones necesarias. Esta plataforma web surge como resultado de esta motivación, y agradezco el apoyo de todas las personas afectadas por esta problemática. Juntos, podemos exigir legislaciones más precisas para resolver esta materia. Agradezco su colaboración.</p>
            </div>
            </div>
            <PiePagina />
        </div>
    );
};