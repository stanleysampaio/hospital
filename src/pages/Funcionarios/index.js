import React, { useState, useEffect } from "react";
import api from "../../services/api";
import "./styles.css";

function Funcionarios() {

    const [funcionarios, setFuncionarios] = useState([]);

    useEffect(() => {
        api.get("/funcionario")
        .then((response) => {
            setFuncionarios(response.data.dados)
        })
        .catch((error) => { 
            console.error("Erro ao listar funcionários!!!")
        })
    }, [])


    return (
        <div className="list-wrapper">
          <h2 className="list-title">Listagem de funcionários</h2>
          <ul className="list">
            {
                funcionarios.map((funcionario) => (
                <li className="list-item list-item-green" key={funcionario.codigo_pessoa}>
                    {funcionario.nome}
                </li>
                ))
            }
          </ul>
        </div>
    )
}

export default Funcionarios;