import React from "react";
import axios from "axios";
import styled from "styled-components";


const Mae = styled.div`
display: ${(props) => props.mostrar === false ? 'none' : 'flex'};
flex-direction: column;
`
const filho1 = styled.div`
display: flex;
flex-direction: column;

`
const filho2 = styled.div`

`

class Telausarios extends React.Component {
    render() {
        const componentsListUsers = this.props.listUsers.map((lista) => {
            return <li key={lista.id}>{lista.name} <button onClick={() => this.props.deleteUser(lista.id)}>X</button></li>

        })
        return (

            <Mae
                mostrar={this.props.mostrar}
            >
                <filho1>
                    <ul>
                        {componentsListUsers}
                    </ul>
                </filho1>

                <filho2>
                    <p>Procurar usuário</p>
                    <input
                        placeholder="Pesquisa"
                    //  value={}
                    //  onChange={}
                    />
                    <button>Salvar edição</button>
                </filho2>
            </Mae>
        )
    }
}

export default Telausarios;