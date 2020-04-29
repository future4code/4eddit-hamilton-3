import styled from 'styled-components'


export const WrapperSignup = styled.div`

display:flex;
justify-content:center;
align-items:center;
margin-top:15%;
flex-direction:column;

form {
    display:flex;
    flex-direction:column;
    justify-content:center;

    input {
        margin-bottom:10px;
        padding:5px 10px;
        border-radius:5px;
    }

    input, button {
        border:none
    }

    label {
        margin:10px;
    }
    
    button {
        margin:5px auto;
        background-color: #6200ee;
        color:white;
        padding:5px 10px;
        border-radius:10px;
        width: 80px;
    }
}

`

