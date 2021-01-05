import { FETCH_CREDENTIALS } from "../types/UserType";

const initaialState={
    credentials:null,
    danhSachNguoiDung:[],
    ticketInfo:[],
    dataRedux:{  taiKhoan:'',
    matKhau:'',
    email:'',
    soDt:'',
    maNhom:'GP01',
    maLoaiNguoiDung:'KhachHang',
    hoTen:''
    },
    dataSua:{
        taiKhoan:'',
        matKhau:'',
        email:'',
        soDt:'',
        maNhom:'GP01',
        maLoaiNguoiDung:'',
        hoTen:''
    }
   
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
        case 'SET_DATA_SUA':{
            state.dataSua={...action.data}
            let newdataRedux={...action.dataRedux};
             newdataRedux={...state.dataSua};
            return {...state,dataRedux:newdataRedux}
        }
        case 'SET_DATA':{
            return {...state,dataRedux:action.data}
        }
        case 'ADD_SUCCESS':{
            return {...state}

        }
        default:
            return state ;
    }
}
export default UserReducer;