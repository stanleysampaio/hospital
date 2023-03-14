import React, { useState, useEffect } from "react";
import CadastroPessoa from "../../components/CadastroPessoa";
import api from "../../services/api";
import "./styles.css"

function Pessoas() {

    const formInicio = {
        codigo: null,
        nome: "",
        telefone: ""
    }

    const [pessoas, setPessoas] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [pessoaSelecionada, setPessoaSelecionada] = useState(formInicio);
    const [nameField, setNameField] = useState("");
    const [telField, setTelField] = useState(""); 

    useEffect(() => {
        api.get("/pessoa")
        .then((response) => {
            setPessoas(response.data.dados)
        })
        .catch((error) => { 
            console.error("Erro ao listar pessoas!!!")
        })
    }, [])

    function handleSubmit(e) {
        api.patch(`/pessoa/update/${pessoaSelecionada.codigo}`, {
            codigo: pessoaSelecionada.codigo, 
            nome: nameField,
            telefone: telField
        })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.error(error)
        })

        e.preventDefault();
        setPessoaSelecionada(formInicio)
    }

    const editarPessoa = (codigoPessoa) => {
        pessoaSelecionada.codigo = codigoPessoa
        setShowModal(true);
    }

    const removerPessoa = (e, id) => {
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
                {pessoas.map((pessoa, index) => (
                    <li className="list-item list-item-green" key={index}>
                    {pessoa.nome}
                        <button onClick={() => editarPessoa(pessoa.codigo)}>Editar</button>
                    <button onClick={(e) => removerPessoa(e, pessoa.codigo)}>Remover</button>
                    </li>
                ))}
                </ul>
            </div>
            </div>
            <div className="cadastro-container">
            <CadastroPessoa />
            </div>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                    <h2>Editar Pessoa</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="nome">Nome:</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={nameField}
                            onChange={(e) => {setNameField(e)}}
                        />
                        <label htmlFor="email">Telefone:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={telField}
                            onChange ={(e) => {setTelField(e)}}
                        />
                        <div className="buttons">
                            <button onClick={() => setShowModal(false)}>Cancelar</button>
                            <button type="submit">Salvar</button>
                        </div>
                    </form>
                    </div>
                </div>
            )}
        </div>

)}

export default Pessoas;