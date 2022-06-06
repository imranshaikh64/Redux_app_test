import { GET_USERS, USERS_ERROR  } from "../actions/actionType";

export const initialState = {
    users: [],
    error:"",
    
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
               
            };
            case USERS_ERROR:
                return {
                    ...state, 
                    error:action.payload
                }      
        default:
            return state
    }
}


export default Reducer;