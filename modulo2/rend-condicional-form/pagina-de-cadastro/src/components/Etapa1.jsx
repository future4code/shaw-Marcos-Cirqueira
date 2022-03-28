import React from "react";
import { Maincontainer } from "./Style";




export default class Etapa1 extends React.Component{

   
    render(){
  
      return(
        <Maincontainer>
            <h2>ETAPA 1 - DADOS GERAIS</h2>
            <p>1. Qual o seu nome?</p>
            <input type="text"></input>
            <p>2. Qual a sua idade?</p>
            <input type="text"></input> 
            <p>3. Qual seu email?</p>
            <input type="text"></input> 
            <p>4. Qual sua escolaridade?</p>
            <select name="select">
            <option value="1">Ensino médio incompleto</option>         
            <option value="2">Ensino médio completo</option>         
            <option value="3">Ensino superior incompleto</option>         
            <option value="4">Ensino superior completo</option> 
            </select>        
        </Maincontainer>
      )
    }
  }