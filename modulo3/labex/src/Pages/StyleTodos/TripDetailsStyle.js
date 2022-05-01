import styled from "styled-components";


export const Container = styled.div`

display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: rgb(28, 20, 13);
color: #ffffff;
min-height: 100vh;

.Candidates{
display: flex;
flex-direction: column;    
width: 30%;  
margin: 10px;
padding:10px;
box-shadow: 5px 5px 5px black;
transition: 0.2s;
opacity: 0.8;
background-color: rgb(122, 39, 244);
color: rgb(92, 214, 245);
border-radius: 10px;

:hover{
    transition: 0.2s;
    transform: scale(1.1);        
    border-radius: 10px;
}
p{
    font-weight:bold;
}

}
`
export const ClickButton = styled.div`
display: flex;
justify-content: center;
gap: 50px;

button{
border-radius: 10px;
cursor: pointer;

:hover{
       background: rgba(0,0,0,0);       
       box-shadow: inset 0 0 0 3px  #7a27f4;

   }
}
`
export const TripCard = styled.div`

button{
    border-radius: 10px;
    cursor: pointer;
}
`