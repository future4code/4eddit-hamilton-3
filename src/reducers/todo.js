
// 
// const initialState = {
//     posts:[
        

//     ]
// }

export default function todo(state = [], action ) {
    switch(action.type) {
        case "ADD_POSTS":
            return {...state, text:action.payload.text }


        case "SET_ALL_POSTS":
            return {...state, posts:action.payload.posts}
            default: 
            return state
    }
 

}