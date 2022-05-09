import styled from "styled-components";

export const Container = styled.div`
display: flex;
text-align: center;
flex-direction: column;
justify-content: center;
height: 100vh;
background-color: rgb(28, 20, 13);

form{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: 5px 5px 5px black;
border-radius: 10px;
width: 30%;
height: 80%;
margin: auto;
background-color: rgb(92, 214, 245);

}
input{
width: 80%;
padding: 5px;
margin: 15px;
border-radius: 10px;
}

select{
    width:84%;
    border-radius: 10px;
    padding: 5px;
    margin: 15px;

}

`
export const Down = styled.div`
display: flex;
gap: 50px;

button{
border-radius: 10px;
cursor: pointer;

:hover{
       background: rgba(0,0,0,0);       
       box-shadow: inset 0 0 0 3px #5cd6f5;

   }
}

`