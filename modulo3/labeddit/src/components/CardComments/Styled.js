import styled from "styled-components";



export const Container = styled.div`
display: flex;
flex-direction: column;
min-height: 10vh;
width: 65%;
background-color: #bec3bc;
border-radius: 10px;
border: 1px solid black;
margin: 0 auto;
padding: 15px;
margin-top: 15px;

`
export const Vote = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 30%;
border: 1px solid black;
border-radius: 10px;
font-size: 30px;
cursor: pointer;
`
export const NumberVote = styled.div`
font-size: 15px;

`