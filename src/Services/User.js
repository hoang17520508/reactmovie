import Axios from 'axios'
import * as yup from 'yup'



export const singupUserSchema=yup.object().shape({
    taiKhoan:yup.string().required("*Field is rewuired!"),
    matKhau:yup.string().required("*Field is rewuired!"),
    hoTen:yup.string().required("*Field is rewuired!"),
    email:yup.string().required("*Field is rewuired!").email("*email is invalid"),
    soDT:yup.string().required("*Field is rewuired!"),
   

  });
class UserService{
    signUp(data){
      return  Axios({
            method:'POST',
            url:'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
            data
      
          })
    }
    signIn(user){
       return Axios({
            method:'POST',
            url:'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            data:user
      
          })
    }
}
export default UserService;