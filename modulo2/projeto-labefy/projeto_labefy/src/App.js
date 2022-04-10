import React from "react";
import axios from "axios";
import TelaInicial from "./components/Telainicial/TelaInicial";
import TelaPlayLists from "./components/TelaLista/TelaPlayLists";
import styled from "styled-components"
import MusicasAdd from "./components/TelaMusicasAdd/MusicasAdd";

class App extends React.Component {
  state = {
    telaAtual: "cadastro",
    idPlayList: ""
  }

  onClickTrocaPagina = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <TelaInicial irParaLista={this.irParaLista} irParaMusicas={this.irParaMusicas} />
      case "lista":
        return <TelaPlayLists irParaAddPlay={this.irParaAddPlay} irParaMusicas={this.irParaMusicas} />
        case "musicas":
          return <MusicasAdd irParaAddPlay={this.irParaAddPlay} idPlayList={this.state.idPlayList} voltarPagina={this.voltarPagina} />
      default:
        return <div>Erro</div>
    }
  }

  irParaAddPlay = () => {
    this.setState({ telaAtual: "cadastro" })
  }

  irParaLista = () => {
    this.setState({ telaAtual: "lista" })
  }

  irParaMusicas = (id) => {
    this.setState({telaAtual: "musicas", idPlayList: id})
    
  }

  voltarPagina = () => {
    this.setState({telaAtual: "lista"})
  }

  render() {

    return (
      <div>
        {this.onClickTrocaPagina()}
      </div>
    );
  }

}

export default App;
