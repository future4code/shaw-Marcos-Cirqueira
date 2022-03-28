import React from 'react';
import styled from 'styled-components';




const AppContainer = styled.div`
  max-width: 600px;
  height: 100vh;
  width: 100vw;
  border: 1px solid black;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: auto;
`

const MensagensContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
`

const BoldText = styled.span`
  font-weight: bold;
`
const MensagemContainer = styled.div`
  display: flex;
`

const NomeInput = styled.input`
  width: 100px;
`

const MensagemInput = styled.input`
  flex: 1;
`

class App extends React.Component {
  state = {
    mensagens: [],
    valorInputNome: "",
    valorInputMensagem: ""
  }

  enviarMensagem = () => {
    const novaMensagem = {
      nome: this.state.valorInputNome,
      mensagem: this.state.valorInputMensagem
    }
    const novoArray = [novaMensagem, ...this.state.mensagens]

    this.setState({ valorInputMensagem: "", mensagens: novoArray })
  }

  onChangeNome = (event) => {
    this.setState({ valorInputNome: event.target.value })
  }

  onChangeMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value })
  }


  render() {
    const renderizar = this.state.mensagens.map((mensagen, index) => {

      return <p key={index}>
        <BoldText>{mensagen.nome}</BoldText>
        {': ' + mensagen.mensagem}</p>
    })


    return (
      <AppContainer>
        <MensagensContainer>
          {
            renderizar
          }
        </MensagensContainer>
        <MensagemContainer>
          <NomeInput
            type="text" placeholder={'Usuário'} onChange={this.onChangeNome} value={this.state.valorInputNome} />
          <MensagemInput
            type="text" placeholder={'Mensagem'} onChange={this.onChangeMensagem} value={this.state.valorInputMensagem} />
          <button onClick={this.enviarMensagem}>Enviar</button>
        </MensagemContainer>
      </AppContainer>

    );
  }
}





export default App;
