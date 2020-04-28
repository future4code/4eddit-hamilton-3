import axios from "axios"
import { push} from "connected-react-router";
import { routes } from "../containers/Router"


//PEGAR TODOS OS POSTS
export function setAllPosts (posts) {
    return {
        type:"SET_ALL_POSTS",
        payload: {
            posts
        }
    }

}


//ADICIONAR POSTS
export function addPosts(text) {
    return{
        type:"ADD_POSTS",
        payload: {
            text
        }
    }
}


 const baseURL = ("https://us-central1-future-apis.cloudfunctions.net/fourEddit")


//ASSÍNCRONAS
export const getPosts=(token)=> async(dispatch,setState)=> { //FALTANDO TOKEN E AUTH E HEADER
    const response = await axios.get(`${baseURL}/posts`,{
        headers:{
            auth:token
        }
    }
    
    )
    console.log(response.data.posts)
    dispatch(setAllPosts(response.data.posts))

}

export const login = (email, password) => async (dispatch, setState) => {
    const body = {
        email: email,
        password: password
    };

    try {
        const response = await axios.post(`${baseURL}/login`, body);

        localStorage.setItem("token", response.data.token);
        dispatch(push(routes.posts))

    } catch (error) {
        alert("Erro no login, tente novamente!")
        console.log(error)
    }
}