import react from 'react'

export function addPosts(text) {
    return{
        type:"ADD_POSTS",
        payload: {
            text
        }
    }
}