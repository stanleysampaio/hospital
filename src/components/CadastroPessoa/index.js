import React, { useState } from "react";
import api from "../../services/api";
import "./styles.css"

function CadastroPessoa() {

    const formInicio = {
        nome: "", 
        rg: "", 
        telefone: "", 
        rua: "",
        bairro: "",
        cep: "",
        cidade: "",
        cpf: "",
        estado: "",
        numero: "",
        pais: ""
    }

    const [pessoa, setPessoa] = useState(formInicio);

    const setInput = (value) => {
        setPessoa(pessoa => ({...pessoa, ...value}))
    }

    const cadastrarPessoa = (e) => {
        console.log(pessoa)

        api.post("/pessoa/add", pessoa)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.error(error)
        })
        e.preventDefault();
        setPessoa(formInicio)
        
    }
    return (
        <div className="form-cadastro">
            <h1>Cadastrar pessoa</h1>
            <form onSubmit={(e) => cadastrarPessoa(e)}>
                <div className="input-wrapper">
                    <label>
                        Nome:
                        <input type="text" value={pessoa.nome} onChange={e => setInput({nome: e.target.value})}/>
                    </label>
                    <label>
                        CPF:
                        <input type="text" value={pessoa.cpf} onChange={e => setInput({cpf: e.target.value})}/>
                    </label>
                    <label>
                        RG:
                        <input type="text" value={pessoa.rg} onChange={e => setInput({rg: e.target.value})}/>
                    </label>
                    <label>
                        Telefone:
                        <input type="text" value={pessoa.telefone} onChange={e => setInput({telefone: e.target.value})}/>
                    </label>
                    <label>
                        Rua:
                        <input type="text" value={pessoa.rua} onChange={e => setInput({rua: e.target.value})}/>
                    </label>
                    <label>
                        Bairro:
                        <input type="text" value={pessoa.bairro} onChange={e => setInput({bairro: e.target.value})}/>
                    </label>
                    <label>
                        Número:
                        <input type="text" value={pessoa.numero} onChange={e => setInput({numero: e.target.value})}/>
                    </label>
                    <label>
                        CEP:
                        <input type="text" value={pessoa.cep} onChange={e => setInput({cep: e.target.value})}/>
                    </label>
                    <label>
                        Estado:
                        <input type="text" value={pessoa.estado} onChange={e => setInput({estado: e.target.value})}/>
                    </label>
                    <label>
                        Cidade:
                        <input type="text" value={pessoa.cidade} onChange={e => setInput({cidade: e.target.value})}/>
                    </label>
                    <label>
                        Pais:
                        <input type="text" value={pessoa.pais} onChange={e => setInput({pais: e.target.value})}/>
                    </label>

                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    )
}

export default CadastroPessoa;