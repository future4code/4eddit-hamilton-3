import styled from 'styled-components'


export const WrapperDetails = styled.div `
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
margin-top:20px;

section {
    input {
        padding:5px 10px;
        border-radius:5px;
        width:410px;
        outline:none;
    }

    input, button {
        margin:5px auto;
        border:none
        
    }
    
    button {
        background-color: #6200ee;
        color:white;
        padding:5px 10px;
        margin-left:5px;
        border-radius:10px;
        width: 80px;
    }

}


> div {
    background-color:#311b92;
    color:white;
    text-align:center;
    width:500px;
    height:100%;
    border-radius:10px;
    padding-top:15px;

    > div {
        display:flex;
        justify-content:space-evenly;
        > div {
            display:flex;
            justify-content:space-evenly;
            button {
                outline:none;
                background-color: transparent;
                padding:5px 10px;
                border:none;
                width: 80px;
                color:white;
             
            }
        }
    } 
   
}

button {
    display:inline;
}


        main {
            cursor: pointer;
            border-radius:10px;
            margin:10px 0;
            background-color:#ede7f6;
            width:500px;
            height:100%;
            padding:10px;

           div {
            display:flex;
            justify-content:space-evenly; 
            > div {
            button {
                outline:none;
                background-color: transparent;
                padding:5px 10px;
                border:none;
                width: 80px;
             
            }
   
        }

           } 

           
        }


`