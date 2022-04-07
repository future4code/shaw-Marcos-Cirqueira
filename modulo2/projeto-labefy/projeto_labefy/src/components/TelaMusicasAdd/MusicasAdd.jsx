import React from "react";
import axios from "axios";
import styled from "styled-components"

class MusicasAdd extends React.Component {
    render(){
        return(
            <div>
                <button onClick={this.props.irParaAddPlay}>Ir para cadastro</button>
                <h2>Musicas</h2>
            </div>
        )
    }
}

export default MusicasAdd;