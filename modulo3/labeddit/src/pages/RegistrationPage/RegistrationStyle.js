import styled from "styled-components";

export const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;

>h2{
  margin-top: 50px;
}
form{
display: flex;
flex-direction: column;
align-items: center;
gap: 15px;
margin-top: 80px;

>input{
    
    width: 90%;
    padding:10px 0;
    padding-left:5px;
    
}

button{
    
    border-radius: 15px;
    margin-bottom: 25px;
    width: 80vw;
    height: 4vh;
    color:white;
    font-weight: bold;
    border: none;
    background-image: linear-gradient(to right, #ff6787, #f9b050 );    

}

}
`

export const Confirm = styled.div`
display: flex; 
align-items: center;
width: 100%;


input{
  width: 10%;
  margin-left: 10px;
}
`
export const Phrase = styled.span`

color:blue;

`
export const PhraseTwo = styled.p`

margin-left: 20px;
`