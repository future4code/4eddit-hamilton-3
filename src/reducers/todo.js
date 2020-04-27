

export default function todo(state =[], action ) {
    switch(action.type) {
        case "ADD_POSTS":
            return [...state, {id:Math.random(), text:action.payload.text}]
           
            default: 
            return state
    }
 

}