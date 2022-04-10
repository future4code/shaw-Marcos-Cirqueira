import React from "react";
import axios from "axios";
import styled from "styled-components"

const Pai = styled.div`
background-color: #333333;
`
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 30vw;
height: 100vh;
margin: 0 auto;
`
const CardCadastro = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid black;
border-radius: 10px;
height: 40%;
gap: 20px;
background-color: #ffffff;

button {   
justify-content: center;
gap: 20px;
border-radius: 30px;
color: #ffffff;
background-color: #fa4c64;
padding: 10px;
border: none;
cursor: pointer;

}
`
const Input = styled.input`
display: flex;
flex-direction: column;
width: 7vw;
gap:10px;
border-radius:10px;
outline: none;
padding:5px;
`

const headers = {
    headers: {
        Authorization: "marcos-cirqueira-shaw"
    }
}

class TelaInicial extends React.Component {
    state = {
        nome: "",
        buscarId: ""
    }

    criarPlaylists = () => {
        const body = {
            name: this.state.nome
        }
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        axios.post(url, body, headers)
            .then((res) => {
                this.setState({ nome: "" })
                alert("Usuário (a) cadastrado (a) com sucesso!");
            })
            .catch((err) => {
                console.log(err.response);
            })
    };

    onChangenome = (event) => {
        this.setState({ nome: event.target.value })
    }


    render() {

        return (
            <Pai>
            <Container>
            <CardCadastro>
                <h2>CADASTRO</h2>
                <Input
                    placeholder="Digite um nome a sua playlist"
                    value={this.state.nome}
                    onChange={this.onChangenome}
                />
                <button onClick={this.criarPlaylists}>Criar</button>
                <button onClick={this.props.irParaLista}>Ir para minhas Playlists</button>
            </CardCadastro>
            </Container>
            </Pai>

        );
    }

}

export default TelaInicial;