
import Axios from 'axios'
import { ACCESS_TOKEN, DOMAIN } from "../../util/setting"
import Swal from 'sweetalert2'
import { GET_DATA_PHIM } from '../types/QuanLyPhimConst'

export const getDataFilmAction =()=>{
    
      return async (dispatch) =>{
      const  result = await Axios({
            method: 'GET',
            url: `${DOMAIN}/api/quanlyphim/laydanhsachphim?manhom=GP01`
        })
        console.log(result);
        dispatch({
            type:GET_DATA_PHIM,
            dataPhim:result.data
        })
      }  
    

   
}
export const layThongTinPhongveAction= async(maLichChieu)=>{
    return async(dispatch)=>{
    try{
        const {data,status}=await Axios({
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
            method:'GET'
        })
        
        if(status===200){
            dispatch({
                type:'THONG_TIN_PHONG_VE',
                thongTinPhongVe:data
            
            })
        }
    }
    catch(err)
    {
        
        console.log(err);   
    }
    
    }
}
export const datVeApiAction= (thongTinVe)=>{
    return async (dispatch)=>{
    try{    
        let {data,status}= await Axios({
            url:'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe',
            method:'POST',
            data:thongTinVe,
            headers:{'Authorization': 'Bearer '+localStorage.getItem(ACCESS_TOKEN)}
        })
        dispatch( await layThongTinPhongveAction(thongTinVe.maLichChieu));
        dispatch({type:'DAT_VE_THANH_CONG'});
        Swal.fire('Thông báo ','Đặt vé thành công','success');
       console.log(data);
    }
    catch(err)
    {
        
        console.log(err.response.data);   
        Swal.fire('Thông báo ','Đặt vé thất bại','error');
    }
    
    }
}