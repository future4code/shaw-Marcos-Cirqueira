import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content:end;
background: #b3c0c5;
height: 6vh;
width: 100vw;

>img{
    width: 50px;
    margin-left: 10px;
    position: absolute;
    left: 43%;    
}

`
export const Clear =styled.div`
position: absolute;
right: 90%;
display: flex;
align-items: center;
font-size: 30px;
color: #029daf;

`

export const ButtonHeader = styled.div`
margin-right: 10px;
font-weight: bolder;
color: #029daf;

`