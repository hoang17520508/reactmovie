import Axios from 'axios';
import Swal from 'sweetalert2';
import { createAction } from '.';
import { userService } from '../../Services/'
import UserService from '../../Services/User';
import { ACCESS_TOKEN, USER_LOGIN } from '../../util/setting';
import { FETCH_CREDENTIALS } from '../types/UserType';

export const login=(user)=>{
    return (dispatch)=>{
     
        userService.signIn(user).then(res=>{dispatch(
            createAction(FETCH_CREDENTIALS,res.data)

        );
        localStorage.setItem('credentials',JSON.stringify(res.data));
        localStorage.setItem('ACCESS_TOKEN',res.data.accessToken);
        localStorage.setItem('USER_LOGIN',JSON.stringify(res.data));
    //  history.push('/trangchu');
    
     }).catch(err=>{console.log(err)})

    };
}
export const logout=()=>{
    return createAction('LOG_OUT');
}
export const getUserListAction=()=>{
    return async (dispatch)=>{
        const result= await Axios({
              method:'GET',
              url:'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01'
            })
          
           
          
        console.log(result);
        dispatch({
            type:'GET_USERS',
            data:result.data
        })
    }
    
}
export const getTicketInfo=(user)=>{
    return async (dispatch)=>{
        try{
            const result=await Axios({
                method:'POST',
                url:'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan',
                data:user,
                headers:{'Authorization': 'Bearer '+localStorage.getItem(ACCESS_TOKEN)},
              
                
            })
           
        dispatch({
            type:'GET_TICKET_INFO',
            data:result.data
        })
            

        }
        catch(err){
            console.log(err);

        }
        
    }
}
export const DeleteUserAction=(user)=>{
    return async (dispatch)=>{
        try{
            console.log("token", 'Bearer '+localStorage.getItem(ACCESS_TOKEN));
          await  Axios({
                method:'DELETE',
                url:`https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user}`,
                headers:{'Authorization': 'Bearer '+localStorage.getItem(ACCESS_TOKEN)},
            })
            dispatch (await getUserListAction())
            dispatch({
                type:'DELETE_USER'
            })
            
            Swal.fire('Thông báo ','Xóa thành công','success');
        }
        catch(err){
            console.log(err);
            Swal.fire('Thông báo ','Xóa thất bại,người dùng đã đặt vé không thể xóa','error');
        }
    }
}