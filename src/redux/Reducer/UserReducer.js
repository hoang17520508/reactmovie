import { FETCH_CREDENTIALS } from "../types/UserType";

const initaialState={
    credentials:null,
};
const UserReducer=(state=initaialState,action)=>{
    switch(action.type){
        case FETCH_CREDENTIALS:{
            state.credentials=action.payload;
            return {...state};
        }
        case 'LOG_OUT':{
            localStorage.removeItem('credentials');
            state.credentials="";
            return {...state};
        }
        default:
            return state;
    }
}
export default UserReducer;