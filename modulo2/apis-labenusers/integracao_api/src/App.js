import React from "react";
import Telacadastro from "./components/telacadastro";
import Telausarios from "./components/telausuarios";
// import styled from "styled-components";

class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  onClickTrocaTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <Telacadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <Telausarios irParaCadastro={this.irParaCadastro}/>
      default:
        return <div>Erro!</div>
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }

  render() {
    return (
      <div>
        {this.onClickTrocaTela()}
      </div>

    );
  }
}

export default App;
