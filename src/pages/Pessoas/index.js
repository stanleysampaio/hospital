import React, { useState, useEffect } from "react";
import CadastroPessoa from "../../components/CadastroPessoa";
import api from "../../services/api";

function Pessoas() {
    const [pessoas, setPessoas] = useState([]);

    useEffect(() => {
        api.get("/pessoa")
        .then((response) => {
            setPessoas(response.data.dados)
        })
        .catch((error) => { 
            console.error("Erro ao listar pessoas!!!")
        })
    }, [])

    function editarPessoa(e) {
        console.log("editar")
        e.preventDefault();
    }

    function removerPessoa(e, id) {
        api.delete(`/pessoa/remove/${id}`)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.error(error)
        })
        e.preventDefault();
        
    }
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
                                <button onClick={(e) => editarPessoa(e)}>Editar</button>
                                <button onClick={(e) => removerPessoa(e, pessoa.codigo)}>Remover</button>
                            </li>
                        ))
                    }
                    </ul>
                </div>
            </div>
            <div className="cadastro-container">
                <CadastroPessoa/>
            </div>
        </div>
    )
}

export default Pessoas;