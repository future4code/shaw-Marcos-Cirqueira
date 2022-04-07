import React from "react";
import axios from "axios";
import styled from "styled-components";

const MaeDeTodos = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap:10px;
width: 100%;
color: red;

button {
    margin-top: 10px;
}
`
const ButtonStyle = styled.div`
display: flex;
`

const headers = {
    headers: {
        Authorization: "marcos-cirqueira-shaw"
    }
}

class Telacadastro extends React.Component {
    state = {
        Inputnome: "",
        Inputemail: ""
    }

    onChangeInputnome = (event) => {
        this.setState({ Inputnome: event.target.value })
    };

    onChangeInputemail = (event) => {
        this.setState({ Inputemail: event.target.value })
    };

    postUsers = () => {
        const body = {
            name: this.state.Inputnome,
            email: this.state.Inputemail
        }
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

        axios.post(url, body, headers)
            .then((res) => {
                this.setState({ Inputnome: "", Inputemail: "" })
                alert("Usuário (a) cadastrado (a) com sucesso!");
            })
            .catch((err) => {
                alert(err.response.data.message);
            });
    };
    render() {
        return (

            <MaeDeTodos>
                <button onClick={this.props.irParaLista}>Ir para Lista de Usuários</button>
                <h2>Cadastro</h2>
                <input
                    placeholder="Nome"
                    value={this.state.Inputnome}
                    onChange={this.onChangeInputnome}
                />
                <input
                    placeholder="Email"
                    value={this.state.Inputemail}
                    onChange={this.onChangeInputemail}
                />
                <ButtonStyle>
                    <button onClick={this.postUsers}>Cadastrar</button>
                </ButtonStyle>
            </MaeDeTodos>
        )
    }
}

export default Telacadastro;