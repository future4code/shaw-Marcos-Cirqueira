import styled from "styled-components";

export const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: rgb(24, 1, 86);

h2{
    color: white;
}

.Lista {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    width: 30%;  
    margin: 10px;
    padding:10px;
    transition: 0.2s;
    color: rgb(92, 214, 245);
    font-weight: bold;
    border-radius: 10px;
    :hover{
        transition: 0.2s;
        transform: scale(1.1);
        box-shadow: 5px 5px 5px black;
        border-radius: 10px;
    }

    
    background-color: rgb(122, 39, 244);
}
`
export const ClickButton = styled.div`
display: flex;
gap: 30px;

button{
height: 8%;
width: 100px;
border-radius: 10px;
cursor: pointer;
background: #5cd6f5;

:hover{
       background: rgba(0,0,0,0);   
       color: #5cd6f5;    
       box-shadow: inset 0 0 0 3px #5cd6f5;

   }
}

`