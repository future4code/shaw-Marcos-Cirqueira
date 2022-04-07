import React from "react";
import axios from "axios";
import styled from "styled-components"



const headers = {
    headers: {
        Authorization: "marcos-cirqueira-shaw"
    }
}

class TelaPlayLists extends React.Component {
    state = {
        Playlist: [],
        info: []

    }

    componentDidMount() {
        this.todasPlayLists()
    }

    todasPlayLists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        axios.get(url, headers)
            .then((res) => {
                this.setState({ Playlist: res.data.result.list })
                console.log(res.data);
            })
            .catch((err) => {
                // alert("Ocorreu um problema, tente novamente")
            })
    }

    deletarPlayList = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

        if (window.confirm("Tem certeza que deseja deletar?")) {
            axios.delete(url, headers)
                .then((res) => {
                    this.todasPlayLists()
                })
                .catch((err) => {

                })
        }

    }

    buscarInformacao = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

        axios.get(url, headers)
            .then((res) => {
                this.setState({info:res.data.result.tracks})
                console.log(res.data);
            })
            .catch((err) => {

            })
    }
    render() {
        const listaDePlayLists = this.state.Playlist.map((lista) => {
            return <li key={lista.id}>{lista.name}
                <button onClick={() => this.deletarPlayList(lista.id)}>x</button>
                <button onClick={() => this.buscarInformacao(lista.id)}>Info</button>
            </li>
        })
        const listaDeInformacao = this.state.info.map((informa) => {
            return <li key={informa.id}>{informa.name}
            </li>
        })
        return (
            <div>
                <button onClick={this.props.irParaAddPlay}>Ir para ADD Playlists</button>
                {listaDePlayLists}
                {listaDeInformacao}
            </div>

        )
    }
}

export default TelaPlayLists;