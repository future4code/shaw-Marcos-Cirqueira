import styled from "styled-components";

export const Container = styled.div`

form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:10px;
    margin-top:30px;


    >textarea{
        width: 70%;
        height:10vh;
        border-radius: 15px;
    }

    >button{
        border-radius: 15px;
        width: 70%;
        height: 4vh;
        background-image: linear-gradient(to right, #ff6787, #f9b050 );
        border: none;

       
    }
}

`
export const Comments = styled.div`


`