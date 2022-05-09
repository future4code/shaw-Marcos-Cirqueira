import styled from "styled-components";

export const Main = styled.div`
display: flex;
text-align: center;
height: 100vh;
background-color: rgb(28, 20, 13);


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

button{
    margin: 0 10px;
    border-radius: 10px;
    cursor: pointer;

    :hover{
        background: rgba(0,0,0,0);       
       box-shadow: inset 0 0 0 3px #5cd6f5;
    }
}
`