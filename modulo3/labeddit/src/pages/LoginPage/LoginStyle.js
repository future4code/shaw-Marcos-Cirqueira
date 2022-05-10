import styled from 'styled-components';


export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;



img{
    width: 300px;
    margin-top: 80px;    
}

form{
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
margin-top: 80px;
border-bottom: 2px solid #f9b050;


input{
    
    width: 100%;
    padding:10px 0;
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

.bt{
    margin-top: 25px;
    border-radius: 15px;
    margin-bottom: 25px;
    width: 80vw;
    height: 4vh;
    color:#f9b050;
    font-weight: bold;
    border-color: #f9b050;
    background: white;

} 
`
