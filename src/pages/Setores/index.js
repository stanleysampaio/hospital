import React, { useState, useEffect } from "react";
import api from "../../services/api";
import "./styles.css"

function Setores() {

    const [setores, setSetores] = useState([]);

    useEffect(() => {
        api.get("/setor")
        .then((response) => {
            setSetores(response.data.dados)
        })
        .catch((error) => { 
            console.error("Erro ao listar setores!!!")
        })
    }, [])


    return (
        <div className="list-wrapper">
          <h2 className="list-title">Listagem de setores</h2>
          <ul className="list">
            {
                setores.map((setor) => (
                    <li className="list-item list-item-green" key={setor.codigo}>
                        {setor.nome}
                        <p>Bloco {setor.bloco}</p>
                        <p>Nº {setor.numero}</p>
                        <p>Capacidade de {setor.capacidade} leitos</p>
                    </li>
                ))
            }
          </ul>
        </div>
    )
}

export default Setores;