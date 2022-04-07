import React from "react";
import axios from "axios";
import styled from "styled-components"

const Container = styled.div`
display: flex;
flex-direction: column;
`
const headers = {
    headers: {
        Authorization: "marcos-cirqueira-shaw"
    }
}

class TelaInicial extends React.Component {
    state = {
        nome: "",
        nomeMusica: "",
        artista: "",
        url: "",
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
                // this.setState({ nome: "" })
            })
            .catch((err) => {
                alert(err.response.data)
            })
    }

    buscarIdMusica = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${this.state.nome}`
        axios.get(url, headers)
        .then((res)=> {
            // this.setState({buscarId: res.data.result.list.id})
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err.response);
        })
    }

    addMusicas = (id) => {
        const body = {
            name: this.state.nomeMusica,
            artist: this.state.artista,
            url: this.state.url
        }        

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.buscarId}/tracks`

        axios.post(url, body, headers)
            .then((res) => {
                this.setState({ nomeMusica: "", artista: "", url: "" })
                console.log(res.data);
            })
            .catch((err)=>{

            })
    }
    onChangenome = (event) => {
        this.setState({ nome: event.target.value })
    }
    onChangeNomeMusica = (event) => {
        this.setState({ nomeMusica: event.target.value })
    }
    onChangeArtista = (event) => {
        this.setState({ artista: event.target.value })
    }
    onChangeUrl = (event) => {
        this.setState({ url: event.target.value })
    }

    render() {

        return (
            <Container>
                <button onClick={this.props.irParaLista}>Ir para minhas Playlists</button>
                <button onClick={this.props.irParaMusicas}>Ir para minhas músicas</button>
                <h2>Playlists</h2>
                <input
                    placeholder="Digite um nome a sua playlist"
                    value={this.state.nome}
                    onChange={this.onChangenome}
                />
                <input
                    placeholder="Nome da música"
                    value={this.state.nomeMusica}
                    onChange={this.onChangeNomeMusica}
                />
                <input
                    placeholder="Nome do artista"
                    value={this.state.artista}
                    onChange={this.onChangeArtista}
                />
                <input
                    placeholder="Link da música"
                    value={this.state.url}
                    onChange={this.onChangeUrl}
                />
                <button onClick={this.addMusicas}>Adicionar</button>
                <button onClick={this.criarPlaylists}>Criar</button>
            </Container>
        );
    }

}

export default TelaInicial;