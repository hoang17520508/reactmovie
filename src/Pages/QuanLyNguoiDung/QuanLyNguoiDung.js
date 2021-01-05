import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserListAction,DeleteUserAction } from '../../redux/actions/UserAction';
import {Form,Formik} from 'formik'
export default function QuanLyNguoiDung() {
    const danhSachNguoiDung=useSelector(state=>state.UserReducer.danhSachNguoiDung);
    console.log(danhSachNguoiDung);
    const dispatch=useDispatch();
     const [dataSua,setdataSua]=useState({
        taiKhoan:'',
        matKhau:'',
        email:'',
        soDt:'',
        maNhom:'GP01',
        maLoaiNguoiDung:'',
        hoTen:''
        
        
    })
    const LoadDataSua=(data)=>{
        setdataSua(data);
        

        
    }
    console.log("datasua",dataSua);
    useEffect(async()=>{
        setdataSua();
        //fix lỗi vòng đời khi load từ server gán vào ô input
   
        dispatch(await getUserListAction());
    },[])
    const renderDanhSachNguoiDung=()=>{
        return  danhSachNguoiDung?.map((user,index)=>{
            return<tr key={index} className="mt-1 ">
                
                <td>{user.taiKhoan}</td>
                <td>{user.matKhau}</td>
                <td>{user.hoTen}</td>
               
                <td>{user.soDt}</td>
                <td>{user.maLoaiNguoiDung}</td>
                <td><button className="btn btn-primary" onClick={()=>{LoadDataSua(user)}}>Sửa</button></td>
                <td><button className="btn btn-danger" onClick={async()=>{dispatch(await DeleteUserAction(user.taiKhoan))}} >Xóa</button></td>
            </tr>
        })
    }

   
    return (
        <div >
            <div className="" >
            <h3 className="display-4 text-center" style={{fontSize:"35px"}}>Quản Lý Người dùng</h3>

    <Formik initialValues={dataSua||{
        taiKhoan:'',
        matKhau:'',
        email:'',
        soDt:'',
        maNhom:'GP01',
        maLoaiNguoiDung:'',
        hoTen:''
        
        
    }}
    onSubmit={(value)=>{
        console.log("value",value);
    }}
    
    onChange={(value)=>{console.log(value)}}
    render={(formikProps)=>(<Form  className="text-left" >
    <div className="form-group">
        <p  >Tài Khoản</p>
        <input name="taiKhoan" type="text" className="form-control" onChange={formikProps.handleChange} value={dataSua?.taiKhoan}/>

    </div>
    <div className="form-group">
        <p  >Mật khẩu</p>
        <input name="matKhau" type="text" className="form-control" onChange={formikProps.handleChange} value={dataSua?.matKhau}/>

    </div>
    <div className="form-group">
        <p  >Họ tên</p>
        <input name="hoTen" type="text" className="form-control" onChange={formikProps.handleChange} value={dataSua?.hoTen} />

    </div>
    <div className="form-group">
        <p  >Email</p>
        <input name="email" type="email" className="form-control" onChange={formikProps.handleChange} value={dataSua?.email}/>

    </div>

    <div className="form-group">
        <p  >Số điện thoại</p>
        <input name="soDt" type="text" className="form-control" onChange={formikProps.handleChange} value={dataSua?.soDt}/>

    </div>
    <div className="form-group">
    <select name="loaiNguoiDung" className="form-control" onChange={formikProps.handleChange}>
<option value="KhacHang">Khách Hàng</option>
<option value="QuanTri">Quản Trị</option>

</select>

    </div>
    <div className="form-group text-center">
        <button className="btn btn-success" onSubmit={formikProps.handleSubmit}>Thêm</button>
        <button className="btn btn-primary ml-1" type="button" >Cập Nhật</button>
    </div>
</Form>)}
    >
    
    </Formik>
   
           <div style={{maxHeight:"500px",overflowY:'scroll'}} >
           <table className="col-12 bg-dark text-light  pd-0 mt-0"style={{width:'100%'}} >
                <thead>
                 
                <td>Tài Khoản</td>
                <td>Mật Khẩu</td>
                <td>Họ tên</td>
                
                <td>Số điện thoại</td>
                <td>Loại Người dùng</td>
                <td></td>
                <td></td>
                </thead>
                <tbody>
                    {renderDanhSachNguoiDung()}
                </tbody>

            </table>
           </div>
            </div>
        </div>
    )
}
