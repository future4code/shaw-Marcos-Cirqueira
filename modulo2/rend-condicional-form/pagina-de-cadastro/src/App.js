import React from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";
import { Maincontainer } from "./components/Style";



export default class App extends React.Component {

  state = {
    etapa: 1,
  }

  irParaProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 })
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
        break;
      case 2:
        return <Etapa2 />
        break;
      case 3:
        return <Etapa3 />
        break;
      default:             
        return <Final />
        break;
    }

  }
  render() {

    return (
      <Maincontainer>
        {this.renderizaEtapa()}
        {/* se primeira coisa então executa a última coisa */}
        {this.state.etapa < 4 &&
        <button onClick={this.irParaProximaEtapa}>Próxima etapa</button>}
      </Maincontainer>
    )
  }
}