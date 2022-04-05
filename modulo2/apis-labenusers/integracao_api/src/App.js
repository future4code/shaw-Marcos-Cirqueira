import React from "react";
import axios from "axios";
import Telacadastro from "./components/telacadastro";
import Telausarios from "./components/telausuarios";
import styled from "styled-components";

const headers = {
  headers: {
    Authorization: "marcos-cirqueira-shaw"
  }
}

class App extends React.Component {
  state = {
    Inputnome: "",
    Inputemail: "",
    listUsers: [],
    mostrar: false,
  }

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () =>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios.get(url, headers)
    .then((res) =>{
      this.setState({listUsers: res.data})          
    })
    .catch((err)=>{
      console.log(err.response.data)
    })
  }  

  postUsers = () => {
    const body = {
      name: this.state.Inputnome,
      email: this.state.Inputemail
    }
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    axios.post(url, body, headers )
      .then((res) => {
        this.getAllUsers();
        this.setState({Inputnome:"", Inputemail:""})
        alert("Deu certo");        
      })
      .catch((err) => {
        alert("Deu erro");
        console.log(err.response.data.message);
      });
  };

  deleteUser = (id) =>{
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

    axios.delete(url, headers)    
    .then((res)=>{
      this.getAllUsers() 
      window.confirm("Tem certeza de que deseja deletar?")
    })
    .catch((err) =>{
      
    })
   
  }


  onChangeInputnome = (event) => {
    this.setState({ Inputnome: event.target.value })
  };

  onChangeInputemail = (event) => {
    this.setState({ Inputemail: event.target.value })
  };

  onClickTrocaTela = ()=>{
    this.setState({mostrar: !this.state.mostrar})
  }




  render(){   


    return (
      <div> 
        <button onClick={this.onClickTrocaTela}>Trocar Tela</button>       
        <Telacadastro
        Inputnome={this.state.Inputnome}
        Inputemail={this.state.Inputemail}
        onChangeInputemail={this.onChangeInputemail}
        onChangeInputnome={this.onChangeInputnome}
        onClick={this.onClick}
        mostrar={this.state.mostrar}
        postUsers={this.postUsers}
        />
        <Telausarios
        mostrar={this.state.mostrar}
        listUsers={this.state.listUsers}
        deleteUser={this.deleteUser}
        />
        
      </div>

    );
  }
}

export default App;
