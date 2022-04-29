import styled from "styled-components";

export const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;


.Lista {
    display: flex;
    flex-direction: column;
    width: 70%;  
    margin: 10px;
    padding:10px;
    transition: 0.2s;
    :hover{
        transition: 0.2s;
        transform: scale(1.1);
        box-shadow: 5px 5px 5px lightgray;
        border-radius: 10px;
    }
}
`