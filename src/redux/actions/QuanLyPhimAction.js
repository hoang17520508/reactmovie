
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
       
    }
    catch(err)
    {
        
        console.log(err.response.data);   
        Swal.fire('Thông báo ','Đặt vé thất bại,','error');
    }
    
    }
}
export const layThongTinHeThongRapAction= ()=>{
    return async(dispatch)=>{
    try{
        const {data,status}=await Axios({
            url:'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap',
            method:'GET'
        })
        
        if(status===200){
            dispatch({
                type:'THONG_TIN_HE_THONG_RAP',
                heThongRap:data
            
            })
            console.log("hethonrap",data);
        }
    }
    catch(err)
    {
        
        console.log(err);   
    }
    
    }
}
export const layThongTinCumRapAction= (maHeThongRap)=>{
    return async(dispatch)=>{
    try{
        const {data,status}=await Axios({
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
            method:'GET'
        })
        
        if(status===200){
            dispatch({
                type:'THONG_TIN_CUM_RAP',
                cumRap:data
            
            })
            console.log("hethongcumrap",data);
        }
    }
    catch(err)
    {
        
        console.log(err);   
    }
    
    }
}
export const themLichChieuAction= (datathem)=>{
    
    return async(dispatch)=>{
    try{
        const {data,status}=await Axios({
            url:'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu',
            method:'POST',
            data:datathem,
            headers:{'Authorization': 'Bearer '+localStorage.getItem(ACCESS_TOKEN)}
        })
        console.log(data);
       
        
        if(status===200){
            dispatch({
                type:'THEM_LICH_CHIEU_THANH_CONG',
               
            
            })
            
        }
        Swal.fire('Thông báo ','Thêm thành công','success');
    }
    catch(err)
    {
        
        console.log(err);  
        Swal.fire('Thông báo ','Thêm  lịch chiếu thất bại','error'); 
        
    }
    
    }
}
export const xoaFilmAction= (maPhim)=>{
    
    return async(dispatch)=>{
    try{
        const {data,status}=await Axios({
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}
            `,
            method:'DELETE',
            
            headers:{'Authorization': 'Bearer '+localStorage.getItem(ACCESS_TOKEN)}
        })
        console.log(data);
       
        
        if(status===200){
            
            
        }
        Swal.fire('Thông báo ','Xóa thành công','success');
    }
    catch(err)
    {
        
        console.log(err);  
        Swal.fire('Thông báo ','Xóa Thành công','error'); 
        
    }
    
    }
}