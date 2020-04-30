import styled from 'styled-components'


export const WrapperPosts = styled.div `
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;


form {
    background-color: #311b92;
    text-align:center;
    width:500px;
    height:115px;
    border-radius:10px;
    padding-top:15px;

    input {
        padding:5px 10px;
        border-radius:5px;
    }

    input, button {
        margin:5px auto;
        border:none;
        display:block;
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
ul {
        list-style-type:none;
        margin:0;
        padding:0;
        
        li {
            cursor: pointer;
            border-radius:10px;
            margin:10px 0;
            background-color:#ede7f6;
            width:500px;
            height:100%;
            padding:10px; 
            
            button {
                outline:none;
                background-color: transparent;
                padding:5px 10px;
                border:none;
                width: 80px;
             
            }
   

            div {
                display:flex;
                justify-content:space-evenly;

                p {
                    i {
                        margin:0 7px
                    }
                }
            }
        }

    }

`