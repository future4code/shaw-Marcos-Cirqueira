import React from "react";
import axios from "axios";
import styled from "styled-components"

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
/* width: 100vw; */
height: 100vh;
`
const DivBotao = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
gap: 10px;
margin-top: 10px;
`
const CardCadastro = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid black;
border-radius: 10px;
width: 30%;
height: 50%;
`
const CardInput = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-top: 10px;
gap:10px;

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
                this.buscarIdMusica()
                this.setState({ nome: "" })
            })
            .catch((err) => {
                alert(err.response.data)
            })
    }



    onChangenome = (event) => {
        this.setState({ nome: event.target.value })
    }


    render() {

        return (
            <Container>
                <CardCadastro>
                    <h2>Playlists</h2>
                    <CardInput>
                        <input
                            placeholder="Digite um nome a sua playlist"
                            value={this.state.nome}
                            onChange={this.onChangenome}
                        />
                    </CardInput>                    
                    <DivBotao>
                    <button onClick={this.criarPlaylists}>Criar</button>
                        <button onClick={this.props.irParaLista}>Ir para minhas Playlists</button>                        
                    </DivBotao>

                </CardCadastro>
            </Container>
        );
    }

}

export default TelaInicial;