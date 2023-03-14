import React, { useState, useEffect } from "react";

function CadastroPessoa() {

    const formInicio = {
        nome: "",
        cpf: "",
        rg: "",
        telefone: "",
        rua: "",
        bairro: "",
        numero: "",
        cep: "",
        estado: "",
        cidade: "",
        pais: "",
    }

    const [pessoa, setPessoa] = useState(formInicio);

    const setInput = (value) => {
        setForm(pessoa => ({...pessoa, ...value}))
    }


    return (
        <div className="form-cadastro">
            <h1>Cadastrar pessoa</h1>
            <form onSubmit={cadastrarPessoa()}>
                <label>
                    Nome:
                    <input type="text" value={pessoa.nome} onChange={e => setInput({nome: e.target.value})}/>
                </label>
            </form>
        </div>
    )
}

export default CadastroPessoa;