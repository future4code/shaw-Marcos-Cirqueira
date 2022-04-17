import React from "react";
import axios from "axios";
import styled from "styled-components"

const Mae = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
height: 100vh;
overflow: auto;
flex:none;
flex-flow: column nowrap;

/* @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display: flex;
    flex-direction: column;
} */

>button {
margin: 0 auto;
margin-top: 10px;
border-radius: 30px;
color: #ffffff;
background-color: #fa4c64;
padding: 10px;
border: none;
cursor: pointer;   
}
`
const CardList = styled.div`
display: flex;
justify-content: space-between;
border: 1px solid black;
border-radius: 20px;
background: #fa4c64;
padding: 20px;
width: 25%;
margin: 0 auto;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display: flex;
    justify-content: space-between;
    width: 60%;    

}
`
const StyleButton = styled.div`
display: flex;
gap: 5px;

> button {    
    border-radius: 10px;
    cursor: pointer;
    border: none;   
}
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
                <StyleButton>
                    <button onClick={() => this.deletarPlayList(lista.id)}>x</button>
                    <button onClick={() => this.props.irParaMusicas(lista.id)}>Info</button>
                </StyleButton>
            </CardList>

        })

        return (
            <Mae>
                <button onClick={this.props.irParaAddPlay}>Home</button>                
                {listaDePlayLists}                
            </Mae>


        )
    }
}

export default TelaPlayLists;


