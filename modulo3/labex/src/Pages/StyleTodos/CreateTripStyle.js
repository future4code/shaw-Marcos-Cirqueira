import styled from "styled-components";

export const Container = styled.div`
display: flex;
text-align: center;
flex-direction: column;
justify-content: center;
height: 100vh;



`
export const Second = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: 5px 5px 5px black;
border-radius: 10px;
width: 20%;
height: 500px;
margin: auto;


input{
display: flex;
width: 400px;
height: 20px;
margin: 30px;
border-radius: 10px;
}

select{
    width: 400px;
    height: 20px;
    border-radius: 10px;  
}

button{
   margin: 40px;
}
`