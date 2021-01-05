import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserListAction, DeleteUserAction, AddUserAction,UpdateUserAction } from '../../redux/actions/UserAction';
import { Form, Formik } from 'formik'
export default function QuanLyNguoiDung() {
    const danhSachNguoiDung = useSelector(state => state.UserReducer.danhSachNguoiDung);
    const dataRedux = useSelector(state => state.UserReducer.dataRedux);
    let { taiKhoan } = dataRedux;
    console.log(danhSachNguoiDung);
    const dispatch = useDispatch();

    const loadDataSua = (data) => {

        dispatch({
            type: 'SET_DATA_SUA',
            data: data,

        })

    }
    const handleChange = (event) => {
        let {value,name} = event.target;
        let typeInput = event.target.getAttribute('typeinput') //attribute là thuộc tính người dùng tự thêm trên thẻ
        

        //Xử lý cập nhật values
        const newValues = {...dataRedux};
        newValues[name] = value; //Gán giá trị mới cho thuộc tính đang nhập
        dispatch({
            type: 'SET_DATA',
            data: Object.assign(newValues,{maNhom:"GP01"}),

        })
    }
    const handleSubmit=()=>{
        console.log(dataRedux);
        dispatch(AddUserAction(dataRedux));
        
        
        
    }
    const updateUser=()=>{
        console.log(dataRedux);
        dispatch(UpdateUserAction(dataRedux));
    }


    useEffect(async () => {


        //fix lỗi vòng đời khi load từ server gán vào ô input

        dispatch(await getUserListAction());
    }, [])
    const renderDanhSachNguoiDung = () => {
        return danhSachNguoiDung?.map((user, index) => {
            return <tr key={index} className="mt-1 ">

                <td>{user.taiKhoan}</td>
                <td>{user.matKhau}</td>
                <td>{user.hoTen}</td>

                <td>{user.soDt}</td>
                <td>{user.maLoaiNguoiDung}</td>
                <td><button className="btn btn-primary" onClick={() => { loadDataSua(Object.assign(user,{maNhom:"GP01"})) }}>Sửa</button></td>
                <td><button className="btn btn-danger" onClick={async () => { dispatch(await DeleteUserAction(user.taiKhoan)) }} >Xóa</button></td>
            </tr>
        })
    }


    return (
        <div >
            <div className="" >
                <h3 className="display-4 text-center" style={{ fontSize: "35px" }}>Quản Lý Người dùng</h3>

                <div className="text-left">




                    <div className="form-group">
                        <p  >Tài Khoản</p>
                        <input name="taiKhoan" type="text" className="form-control"  onChange={handleChange}  value={dataRedux.taiKhoan} />

                    </div>
                    <div className="form-group">
                        <p  >Mật khẩu</p>
                        <input name="matKhau" type="text" className="form-control"  onChange={handleChange} value={dataRedux.matKhau} />

                    </div>
                    <div className="form-group">
                        <p  >Họ tên</p>
                        <input name="hoTen" type="text" className="form-control"  onChange={handleChange} value={dataRedux.hoTen} />

                    </div>
                    <div className="form-group">
                        <p  >Email</p>
                        <input name="email" type="email" className="form-control"  onChange={handleChange} value={dataRedux.email} />

                    </div>

                    <div className="form-group">
                        <p  >Số điện thoại</p>
                        <input name="soDt" type="text" className="form-control"  onChange={handleChange} value={dataRedux.soDt} />

                    </div>
                    <div className="form-group">
                        <select name="maLoaiNguoiDung" className="form-control"  onChange={handleChange} >
                            <option value="KhacHang">Khách Hàng</option>
                            <option value="QuanTri">Quản Trị</option>

                        </select>

                    </div>
                    <div className="form-group text-center">
                        <button className="btn btn-success" onClick={()=>{handleSubmit()}} >Thêm</button>
                        <button className="btn btn-primary ml-1" type="button" onClick={()=>{updateUser()}} >Cập Nhật</button>
                    </div>



                </div>

                <div style={{ maxHeight: "500px", overflowY: 'scroll' }} >
                    <table className="col-12 bg-dark text-light  pd-0 mt-0" style={{ width: '100%' }} >
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
        </div >
    )
}
