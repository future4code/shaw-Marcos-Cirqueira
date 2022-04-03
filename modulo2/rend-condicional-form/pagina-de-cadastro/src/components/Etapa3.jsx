import React from "react"
import { Maincontainer } from "./Style"




export default class Etapa3 extends React.Component{
    render(){
  
      return(
        <Maincontainer>
            <h2>Etapa 3 - informações gerais de ensino</h2>
            <p>5. Por que você não terminou um curso de graduação?</p>
            <input type="text"></input>
            <p>6. Você fez algum curso complementar?</p>
            <select name="select">
                <option value="1">Nenhum</option>
                <option value="2">Curso técnico</option>
                <option value="3">Curso de inglês</option>
                </select>

        </Maincontainer>
      )
    }
  }