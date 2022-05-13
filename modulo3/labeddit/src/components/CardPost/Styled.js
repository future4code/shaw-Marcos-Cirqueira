import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
min-height: 10vh;
width: 65%;
background-color: #8f9a9c;
border-radius: 10px;
border: 1px solid black;
margin: 0 auto;
padding: 15px;
margin-top: 15px;

`
export const Nome = styled.div`

>p{
    font-weight: bolder;
}

`
export const Comment = styled.div`
display: flex;
align-items: center;
width: 50%;
font-size: 30px;
`
export const NumberVote = styled.div`
display: flex;
font-size: 15px;
align-items: center;
`
export const Borda1 = styled.div`
display: flex;
width: 100%;
border-radius: 10px;
/* border: 1px solid black; */
cursor: pointer;
`

export const Borda2 = styled.div`
display: flex;
/* width: 30%; */
/* border: 1px solid black; */
border-radius: 10px;
cursor: pointer;

>p{
    font-size: 12px;
}


`
