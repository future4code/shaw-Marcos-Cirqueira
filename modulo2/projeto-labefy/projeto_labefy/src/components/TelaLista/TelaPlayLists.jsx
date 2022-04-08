import React from "react";
import axios from "axios";
import styled from "styled-components"


const CardList = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
width: 25%;
display: flex;
justify-content: space-between;

`
const headers = {
    headers: {
        Authorization: "marcos-cirqueira-shaw"
    }
}

class TelaPlayLists extends React.Component {
    state = {
        Playlist: [],      

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
                alert("Ocorreu um problema, tente novamente")
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
   
    render() {
        const listaDePlayLists = this.state.Playlist.map((lista) => {
            return <CardList key={lista.id}>{lista.name}
                <button onClick={() => this.deletarPlayList(lista.id)}>x</button>
                <button onClick={() => this.props.irParaMusicas(lista.id)}>Info</button>
            </CardList>
        })
       
        return (
            <div>
                <button onClick={this.props.irParaAddPlay}>Home</button>
                {listaDePlayLists}                
            </div>

        )
    }
}

export default TelaPlayLists;



// buscarIdMusica = () => {
//     const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${this.state.nome}`
//     axios.get(url, headers)
//         .then((res) => {
//             // this.setState({buscarId: res.data.result.list.id})
//             console.log(res.data);
//         })
//         .catch((err) => {
//             console.log(err.response);
//         })
// }