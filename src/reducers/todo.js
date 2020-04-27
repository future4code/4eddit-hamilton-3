
// 
// const initialState = {
//     posts:[
        

//     ]
// }

export default function todo(state = [], action ) {
    switch(action.type) {
        case "ADD_POSTS":
            return [...state, {id:Math.random(), text:action.payload.text}]


        case "SET_ALL_POSTS":
            return {...state, posts:action.payload.posts}
            default: 
            return state
    }
 

}