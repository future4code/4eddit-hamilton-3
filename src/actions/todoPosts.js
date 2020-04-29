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


//ADICIONAR POSTS





//PEGAR ID DO POST E VER COMENTARIOS

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
export const getPosts=()=> async(dispatch,setState)=> {
    const token = localStorage.getItem("token")
    const response = await axios.get(`${baseURL}/posts`,{
        headers:{
            auth:token
        }
    })
  
    dispatch(setAllPosts(response.data.posts))

}

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
    }catch (error){
        console.error(error)
        console.log(title)
        console.log(text)
    }
}

export const getPostDetails = (id, token) => async (dispatch, setState) => {
    const response = await axios.get(
        `${baseURL}/posts/${id}`,
        {
          headers: {
            auth: token,
          },
        }
      );

      localStorage.setItem("postId", id)

      dispatch(postDetails (response.data.post.comments));
      dispatch(push(routes.details))
    
};
export const redirectSignup = ()=> async(dispatch, setState)=> {
    dispatch(push(routes.signup))
}

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

    } catch (error) {
        alert("Tivemos um problema. Tente novamente")
        console.log(error)
    }
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