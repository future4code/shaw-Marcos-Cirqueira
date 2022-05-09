import styled from "styled-components";

export const Container = styled.div`
display: flex;
height: 100vh;
text-align: center;
background-color: rgb(28, 20, 13);


form{
    display: flex;
    flex-direction: column;    
    align-items: center;
    
    input{
        width: 70%;
        border-radius: 5px;
        margin: 5px;
        padding: 5px;
    }    
    
}
`

export const Second = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 30%;
height: 200px;
margin: auto;
box-shadow: 5px 5px 5px white;
background-color: rgb(92, 214, 245);
border-radius: 10px;

`
export const Botao = styled.div`
display: flex;
gap: 50px;

button{
    cursor: pointer;    
    border-radius: 10px;    

    :hover{
        background: rgba(0,0,0,0);       
       box-shadow: inset 0 0 0 3px #5cd6f5;
    }
}


`