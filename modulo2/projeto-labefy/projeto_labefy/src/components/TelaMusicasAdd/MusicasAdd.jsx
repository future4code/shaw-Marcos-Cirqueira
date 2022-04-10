import React from "react";
import axios from "axios";
import styled from "styled-components"

const Tudo = styled.div`
/* background-color: #333333; */

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display: flex;
    flex-direction: column;
}
`
const Container = styled.div`
display: flex;
flex-direction: column;
text-align: center;
height: 50%;
width: 200px;
margin: 0 auto;
gap: 20px;
overflow: auto;
flex:none;
flex-flow: column nowrap;

>input{
justify-content: center;
gap: 20px;
border-radius: 30px;
color: #ffffff;
background-color: #fa4c64;
padding: 10px;
border: none;
}

>button {
border-radius: 30px;
color: #ffffff;
background-color: #fa4c64;
padding: 10px;
border: none;
cursor: pointer;

}
`

const Lista = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
border: none;
height: 50%;

>button {  
border-radius: 30px;
color: #ffffff;
background-color: #fa4c64;
padding: 10px;
border: none;
cursor: pointer;
}
`


const headers = {
    headers: {
        Authorization: "marcos-cirqueira-shaw"
    }
}

class MusicasAdd extends React.Component {

    state = {
        nomeMusica: "",
        artista: "",
        url: "",
        info: []
    }

    componentDidMount = () => {
        this.buscarInformacao()
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


    addMusicas = () => {
        const body = {
            name: this.state.nomeMusica,
            artist: this.state.artista,
            url: this.state.url
        }

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlayList}/tracks`

        axios.post(url, body, headers)
            .then((res) => {
                this.buscarInformacao()
                this.setState({ nomeMusica: "", artista: "", url: "" })
                console.log(res.data);
            })
            .catch((err) => {

            })
    }

    deletarMusica = (id) => {

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlayList}/tracks/${id}`

        if (window.confirm("Tem certeza que deseja deletar?")) {
            axios.delete(url, headers)
                .then((res) => {
                    this.buscarInformacao()
                })
                .catch((err) => {

                })
        }
    }

    buscarInformacao = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlayList}/tracks`

        axios.get(url, headers)
            .then((res) => {
                this.setState({ info: res.data.result.tracks })
                console.log(res.data);
            })
            .catch((err) => {

            })
    }
    render() {

        const listaDeInformacao = this.state.info.map((informa) => {
            return (
                <div key={informa.id}>
                    <li>{informa.name} </li>
                    <audio width="300" height="32" controls="controls" src={informa.url} type="audio/mp3"></audio>
                    <button onClick={() => this.deletarMusica(informa.id)}>x</button>

                </div>
            )
        })
        return (
            <Tudo>
                <Container>
                    <button onClick={this.props.irParaAddPlay}>Ir para cadastro</button>
                    
                        <h2>Musicas</h2>
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
                    </Container>
                    <Lista>
                        {listaDeInformacao}
                        <button onClick={this.props.voltarPagina}>Voltar</button>
                    </Lista>
                
            </Tudo>
        )
    }
}

export default MusicasAdd;