import React, { useState, useEffect } from "react";
import api from "../../services/api";

function Pessoas() {
    const [pessoas, setPessoas] = useState([]);

    useEffect(() => {
        api.get("/pessoa")
        .then((response) => {
            setPessoas(response.data.dados)
        })
        .catch((error) => { 
            console.error("Erro ao listar funcionários!!!")
        })
    }, [])

    return (
        <div className="container">
            <h1>Listagem de pessoas cadastradas no sistema</h1>
            <div className="list-container">
                <div className="list-wrapper">
                    <ul className="list">
                    {
                        pessoas.map((pessoa, index) => (
                            <li className="list-item list-item-green" key={index}>
                                {pessoa.nome}
                            </li>
                        ))
                    }
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Pessoas;