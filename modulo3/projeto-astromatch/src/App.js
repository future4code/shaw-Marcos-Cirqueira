import React, { useState } from "react";
import axios from "axios";
import TelaInicial from "./pages/TelaInicial/TelaInicial";
import TelaMatches from "./pages/TelaMatches/TelaMatches";
import styled from "styled-components";

// movimenta o quadrado
const Pai = styled.div`
display: flex;
justify-content: center;
text-align:center ;
`
const Texto = styled.div`
position: absolute;
left: 50%;
transform: translateX(-50%);
font-size: x-large;
font-weight: bold;

span{
 	background: linear-gradient(to bottom, rgb(117, 49, 146) 50%, #3498db 50%);
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
}
`
// Quadrado de fora 
const Container = styled.div`
display: flex;
flex-direction: column;
border: 3px solid black;
background-color: whitesmoke;
border-radius: 15px;
height: 600px;
width: 400px;
`

export default function App() {
  const [trocapagina, setTrocaPagina] = useState(true)

  const trocaTela = () => {
    setTrocaPagina(!trocapagina)
  }

  return (
    <Pai>
      <Texto>
        <p><span>astromatch</span></p>
      </Texto>
      <Container>
        {trocapagina ? <TelaInicial trocaTela={trocaTela} /> :
          <TelaMatches
            trocaTela={trocaTela}
          />}
      </Container>
    </Pai>

  );
}


