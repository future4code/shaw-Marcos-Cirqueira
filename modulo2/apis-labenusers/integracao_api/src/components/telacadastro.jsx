import React from "react";
import axios from "axios";
import styled from "styled-components";

const MaeDeTodos = styled.div`
display: ${(props) => props.mostrar === false ? 'flex' : 'none'};
`

class Telacadastro extends React.Component {
    render() {
        return (
            <MaeDeTodos
                mostrar={this.props.mostrar}
            >
                <input
                    placeholder="Nome"
                    value={this.props.Inputnome}
                    onChange={this.props.onChangeInputnome}
                />
                <input
                    placeholder="Email"
                    value={this.props.Inputemail}
                    onChange={this.props.onChangeInputemail}
                />
                <button onClick={this.props.postUsers}>Enviar</button>
                {this.props.componentsListUsers}
            </MaeDeTodos>
        )
    }
}

export default Telacadastro;