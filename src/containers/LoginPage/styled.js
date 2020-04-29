import styled from 'styled-components'


export const WrapperLogin = styled.div`

display:flex;
justify-content:center;
align-items:center;
margin-top:20%;
flex-direction:column;

form{
    display:flex;
    flex-direction:column;
    justify-content:center;

    input {
        padding:5px 10px;
        border-radius:5px;
    }

    input, button {
        margin:5px auto;
        border:none
    }
    
    button {
        background-color: #6200ee;
        color:white;
        padding:5px 10px;
        border-radius:10px;
        width: 80px;
    }


}

button {
        background-color:lightgray;
        color:black;
        padding:5px 10px;
        border-radius:10px;
        width: 80px;
        margin:5px 0;
        border:none;
        
    }

`

