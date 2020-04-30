

export default function todo(state = [], action) {
    switch (action.type) {
      
        case "SET_ALL_POSTS":
            return { ...state, posts: action.payload.posts }

        case "POST_DETAILS":
            return { ...state, postInfo: action.payload.comments }

        case "GET_POST_ID":
            return {...state, postId: action.payload.id}    

        default:
            return state
    }


}