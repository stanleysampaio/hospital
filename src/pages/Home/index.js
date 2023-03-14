import React from 'react';
import './styles.css';
import Funcionarios from '../Funcionarios';
import Pessoas from '../Pessoas';
import Setores from '../Setores';

function Home() {
  // const [filaDeEspera, setFilaDeEspera] = useState([]);

  // function adicionarPaciente() {
  //   const nome = prompt('Nome do paciente:');
  //   if (nome) {
  //     const paciente = { id: Date.now(), nome };
  //     setFilaDeEspera([...filaDeEspera, paciente]);
  //   }
  // }

  // function alocarAtendimento(paciente) {
  //   setPacientes([...pacientes, paciente]);
  //   setFilaDeEspera(filaDeEspera.filter((p) => p.id !== paciente.id));
  // }

  return (
    <div className="container">
      <h1 className="title">Hospital</h1>
      <Funcionarios/>
      <Setores/>
      <Pessoas/>
      {/* <button className="button" onClick={adicionarPaciente}>Adicionar paciente</button>
      <div className="list-container">
        <div className="list-wrapper">
          <h2 className="list-title">Fila de espera:</h2>
          <ul className="list">
            {filaDeEspera.map((paciente) => (
              <li className="list-item" key={paciente.id}>
                {paciente.nome} <button className="button" onClick={() => alocarAtendimento(paciente)}>Atender</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="list-wrapper">
          <h2 className="list-title">Em atendimento:</h2>
          <ul className="list">
            {funcionarios.dados.map((funcionario) => (
              <li className="list-item list-item-green" key={funcionario.codigo_pessoa}>
                {funcionario.nome}
              </li>
            ))}
          </ul>
        </div>
      </div> */}
    </div>
  );
}

export default Home;