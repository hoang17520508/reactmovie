import { FETCH_CREDENTIALS } from "../types/UserType";

const initaialState={
    credentials:null,
    danhSachNguoiDung:[],
    ticketInfo:[]
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
        case 'GET_USERS':{
            return {...state,danhSachNguoiDung:action.data}

        }
        case 'GET_TICKET_INFO':{
            return {...state,ticketInfo:action.data}
        }
        case 'DELETE_USER':{
            return {...state}
        }
        default:
            return state;
    }
}
export default UserReducer;