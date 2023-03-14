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
        <div className="container">
        <h1>Listagem de funcionários</h1>
            <div className="list-container">
                <div className="list-wrapper">
                    <ul className="list">
                    {
                        funcionarios.map((funcionario) => (
                        <li className="list-item list-item-green" key={funcionario.codigo_pessoa}>
                            {funcionario.nome}<span> - {funcionario.telefone}</span>
                        </li>
                        ))
                    }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Funcionarios;