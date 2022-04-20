import React, { useState } from "react";
import axios from "axios";
import TelaInicial from "./pages/TelaInicial/TelaInicial";
import TelaMatches from "./pages/TelaMatches/TelaMatches";
import styled from "styled-components";

const Pai = styled.div`
display: flex;
justify-content: center;
text-align: center;
height: 500px;
`
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
border: 3px solid black;
background-color: whitesmoke;
border-radius: 15px;
height: 700px;
width: 500px;
`


export default function App() {
  const [trocapagina, setTrocaPagina] = useState(true)

  const trocaTela = () => {
    setTrocaPagina(!trocapagina)
  }

  return (
    <Pai>
      <Container>
        <h3>astromatch</h3>
        {trocapagina ? <TelaInicial trocaTela={trocaTela} /> :
          <TelaMatches
            trocaTela={trocaTela}
          />}
      </Container>
    </Pai>
  );
}


