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

//MOSTRAR OS DETALHES DO POST

export function postDetails (comments) {
    return {
        type:"POST_DETAILS",
        payload: {
            comments
        }
    }

}


export const getPostId = (id) => {
    return {
        type: 'GET_POST_ID',
        payload: {
            id
        }
    }
}


 const baseURL = ("https://us-central1-future-apis.cloudfunctions.net/fourEddit")



//ASSÍNCRONAS

//PEGAR TODOS OS POSTS FEITOS

export const getPosts=()=> async(dispatch,setState)=> {
    
    try {
        const token = localStorage.getItem("token")
    const response = await axios.get(`${baseURL}/posts`,{
        headers:{
            auth:token
        }
    })
  
    dispatch(setAllPosts(response.data.posts))
    }catch {
    alert("Ocorreu um erro inesperado. Tente novamente.")
}

}

//ADICIONAR POSTS

export const addPost=(title, text)=> async (dispatch, setState)=> {
    const token = localStorage.getItem("token")
    const body = {
        title:title,
        text:text
    }
    try {
        const response = await axios.post(`${baseURL}/posts`, body,{
            headers: {
                auth:token
            }
        })
        
        dispatch(getPosts())
    }catch {
       alert("Erro ao adicionar seu post. Tente novamente")
    }
}

// VOTAR NO POST


export const votePost =(direction, id)=>async (dispatch, setState) => {
    const token = localStorage.getItem("token")
    const body = {
        direction

    }
    try{
        await axios.put(`${baseURL}/posts/${id}/vote`, body, {
            headers: {
                auth: token
            }
        })
        
    }catch (error){
        alert("Ocorreu um erro inesperado. Tente novamente")

    }
}

//VOTOS COMENTARIOS

export const voteComment = (direction, postId, commentId)=>async (dispatch, setState) => {
    const token = localStorage.getItem("token")
    const body = {
        direction

    }
    try{
        await axios.put(`${baseURL}/posts/${postId}/comment/${commentId}/vote`, body, {
            headers: {
                auth: token
            }
        
        }) 
        dispatch(getPostDetails(postId, token))

        }catch (error){
        alert("Ocorreu um erro inesperado. Tente novamente")


    }

}




export const createComment =(id, text)=> async (dispatch, setState)=> {
    const token = localStorage.getItem("token")
    const body = {
        text:text
    }
    try {
        const response =  await axios.post(`${baseURL}/posts/${id}/comment`, body,{
            headers: {
                auth:token
            }
        })
        
        dispatch(getPostDetails(id, token))
    }catch{
        alert("Ocorreu um erro inesperado. Tente novamente.")
       
    }
}

//PEGAR DETALHES DO POST

export const getPostDetails = (id, token) => async (dispatch, setState) => {
    
    try {
        const response = await axios.get(

        `${baseURL}/posts/${id}`,
        {
          headers: {
            auth: token,
          },
        }
      );

      localStorage.setItem("postId", id)

      dispatch(postDetails (response.data.post));
      dispatch(push(routes.details))

    }catch {

        alert("Ocorreu um erro inesperado. Atualize seu navegador.")
        
    }
    
}
export const redirectSignup = ()=> async(dispatch, setState)=> {
    dispatch(push(routes.signup))
}


// CADSTRO DE NOVOS USUARIOS

export const signup = (username, email, password) => async (dispatch, setState) => {
    const body = {
        username: username,
        email: email,
        password: password
    };

    try {
        const response = await axios.post(`${baseURL}/signup`, body);

        localStorage.setItem("token", response.data.token);
        dispatch(push(routes.posts))

    } catch {
        alert("Ocorreu um erro inesperado. Tente novamente.")
    }
}

//LOGIN DE USUARIO

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
        
    }
}