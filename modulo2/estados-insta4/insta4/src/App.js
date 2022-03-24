import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Input = styled.input`
`


class App extends React.Component {

  state = {

    pessoas: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "marcos",
        fotoUsuario: "https://picsum.photos/30/50",
        fotoPost: "https://picsum.photos/200/130"
      },
      {
        nomeUsuario: "victor",
        fotoUsuario: "https://picsum.photos/60/50",
        fotoPost: "https://picsum.photos/202/130"
      }
    ],

    valorInputPessoa: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""

  };

  adicionaPessoa = () => {
    const novaPessoa = {
      nomeUsuario: this.state.valorInputPessoa,

      fotoUsuario: this.state.valorInputFotoUsuario,

      fotoPost: this.state.valorInputFotoPost
    };

    const novoPessoas = [...this.state.pessoas, novaPessoa];

    this.setState({ pessoas: novoPessoas });
  };

  onChangeInputPessoa = (event) => {

    this.setState({ valorInputPessoa: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {

    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {

    this.setState({ valorInputFotoPost: event.target.value });
  };
  


  render() {

    const componentesPost = this.state.pessoas.map((pessoa) => {
      return (
        <Post
          nomeUsuario={pessoa.nomeUsuario}
          fotoUsuario={pessoa.fotoUsuario}
          fotoPost={pessoa.fotoPost}
        />
      )
    })
    return (
      <MainContainer>
        <input
          value={this.state.valorInputPessoa}
          onChange={this.onChangeInputPessoa}
          placeholder={"Nome"}
          />
          <input            
            value={this.state.valorInputFotoUsuario}         
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Foto Usuário"}
          />
          <input            
            value={this.state.valorInputFotoPost}         
            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto Post"}
          />
          <button onClick={this.adicionaPessoa}>Adicionar</button>

          {componentesPost}      
      </MainContainer>


    );
  }
}

export default App;
