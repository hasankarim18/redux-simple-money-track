
import * as at from './actionTypes'

const initialState = {
    user:{
      userName: 'hasan',
      password:1234,
    },   
    isLoggedIn: false
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case at.LOGIN :
            console.log(action.payload);
            return{
                ...state,
                isLoggedIn:action.payload
            }
    
        default:
            return state 
    }
    
};

export default userReducer;