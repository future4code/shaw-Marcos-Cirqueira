import styled from "styled-components";

export const Container = styled.div`
display: flex;
text-align: center;
flex-direction: column;
justify-content: center;
height: 100vh;
background-color: rgb(28, 20, 13);
`

export const Second = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: 5px 5px 5px black;
border-radius: 10px;
width: 500px;
height: 500px;
margin: auto;
background-color: rgb(92, 214, 245);



input{
display: flex;
width: 80%;
height: 20px;
margin: 30px;
border-radius: 10px;

}

select{
    width: 200px;
    height: 30px;
    border-radius: 10px;  
}

button{
   margin: 30px;  
   border-radius: 10px;
   cursor: pointer;
   height: 8%;
   width: 12%;
   
   :hover{
       background: rgba(0,0,0,0);       
       box-shadow: inset 0 0 0 3px #5cd6f5;

   }

}

`