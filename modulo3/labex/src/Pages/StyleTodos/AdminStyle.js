import styled from "styled-components";

export const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 100vh;
background-color: rgb(28, 20, 13);
color:white;

.Lista{
    display: flex;    
    justify-content:space-between;
    width: 20%;    
    margin: 10px;
    padding:10px;
    transition: 0.2s; 
    cursor: pointer;
    color:white;   
    :hover{
        transition: 0.2s;
        transform: scale(1.1);
        box-shadow: 5px 5px 5px black;
        border-radius: 10px;
        background-color: rgb(92, 214, 245);
    }

    bin{
        display: flex;
        align-items: center;
        cursor: pointer;
        color: rgb(236, 58, 245);
        :hover{

        }
    }
}

`
export const Second = styled.div`
display: flex;
justify-content:space-between;
gap: 20px;

button{
width: 100px; 
height: 30px;
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