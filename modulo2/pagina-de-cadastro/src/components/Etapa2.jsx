import React from "react"
import { Maincontainer } from "./Style"




export default class Etapa2 extends React.Component{
    render(){
  
      return(
        <Maincontainer>
            <h2>Etapa 2 - informações do ensino superior</h2>
            <p>5. Qual curso?</p>
            <input type="text"></input>
            <p>6. Qual a unidade de ensino?</p>
            <input type="text"></input>
        </Maincontainer>
      )
    }
  }