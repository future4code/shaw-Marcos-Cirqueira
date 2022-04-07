import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardUsuario = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
width: 25%;
display: flex;
justify-content: space-between;
`
const PaiDeTodos = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
text-align: center;
justify-content: center;
`
const CardList = styled.div`
display: flex;
border: 1px solid black;
flex-flow: column nowrap;
align-items: center;
gap:10px;
width: 50%;
height: 50%;
padding: 10px;
`
const Scroll = styled.div`
display: flex;
overflow: auto;
flex: none;
flex-flow: column nowrap;
align-items: center;
overflow-y: scroll;
height: 70%;
width: 100%;
::-webkit-scrollbar{
    width: 5px;
}
::-webkit-scrollbar-thumb{
    background-color: aqua;
    
}
`
const headers = {
    headers: {
        Authorization: "marcos-cirqueira-shaw"
    }
}

class Telausarios extends React.Component {
    state = {
        listUsers: [],
        pesquisa: ""
    }

    componentDidMount() {
        this.getAllUsers()
    }

    onChangePesquisa = (event) => {
        this.setState({ pesquisa: event.target.value })
    }

    getAllUsers = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, headers)
            .then((res) => {
                this.setState({ listUsers: res.data })
            })
            .catch((err) => {
                alert("Ocorreu um problema, tente novamente")
                console.log(err.response.data)
            })
    };

    deleteUser = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

        if (window.confirm("Tem certeza de que deseja deletar?")) {
            axios.delete(url, headers)
                .then((res) => {
                    this.getAllUsers()
                })
                .catch((err) => {
                    alert("Ocorreu um erro, tente novamente")
                })
        }
    }
    pesquisaUsers = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.pesquisa}`

        axios.get(url, headers)
            .then((res) => {
                this.setState({ listUsers: res.data })
            })
            .catch((err) => {
                console.log(err.response.data.message);
            })
    }
    render() {

        const componentsListUsers = this.state.listUsers.map((lista) => {
            return <CardUsuario key={lista.id}>{lista.name}
                <button onClick={() => this.deleteUser(lista.id)}>X</button>
            </CardUsuario>

        })
        return (
            <PaiDeTodos>
                <CardList>
                    <div>
                        <input
                            placeholder="Pesquisar"
                            value={this.state.pesquisa}
                            onChange={this.onChangePesquisa}
                        />
                        <button onClick={this.pesquisaUsers}>Pesquisar</button>
                        <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                    </div>
                    <h2>Lista de Usuários</h2>
                    <Scroll>
                        {componentsListUsers}
                    </Scroll>
                </CardList>
            </PaiDeTodos>

        )
    }
}

export default Telausarios;