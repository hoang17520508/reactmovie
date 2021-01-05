import Axios from 'axios';
import { connect } from 'formik';
import React, { Component } from 'react'
import Swal from 'sweetalert2';

export default class QuanLyPhim extends Component {
    state = {
        hinhAnh: {},
        maPhim: '',
        tenPhim: '',
        trailer:'',
        ngayKhoiChieu:'',
        moTa:'',
        maNhom: 'GP01'
    }

    
    handleChange = (e) => {
        let target = e.target;
        if (target.name === 'hinhAnh') {
            this.setState({ hinhAnh: e.target.files[0] }, () => {
                console.log(this.state);
            });
        } else {
            this.setState({ [e.target.name]: e.target.value }, () => {
                console.log(this.state);
            });
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        var form_data = new FormData();
        for (var key in this.state) {

          
            form_data.append(key, this.state[key]);
            
        }
      
        Axios({
            url: 'http://movie0706.cybersoft.edu.vn/api/quanlyphim/ThemPhimUploadHinh',
            method: 'POST',
            data: form_data,

        }).then(res => {
            console.log(res);
            Swal.fire('Thông báo ','Thêm thành công','success');
        }).catch(err => {
            console.log(err.response.data);
            Swal.fire('Thông báo ','Thêm thất bại','error');
        })

    }
    
    render() {
        return (
            <div>
                <div className="container ">
                <h3 className="text-center">
                        THÊM PHIM MỚI 
                    </h3>
                <form onSubmit={this.handleSubmit} className="text-left" >
                    

                    <div className="row">
                    <div className="form-group col-4">
                        <label>Mã phim</label>
                        <input name="maPhim" className="form-control" onChange={this.handleChange} />
                    </div>
                    <div className="form-grou col-4">
                        <label>Tên phim</label>
                        <input name="tenPhim" className="form-control" onChange={this.handleChange} />
                    </div>
                    <div className="form-group col-4">
                        <label>Trailer</label>
                        <input name="trailer" className="form-control" onChange={this.handleChange} />
                    </div>
                    </div>
                    <div className="form-group">
                        <label>Hình ảnh</label>
                        <input type="file" name="hinhAnh" className="form-control" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Mô tả</label>
                        <input name="moTa" className="form-control" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Mã nhóm</label>
                        <input name="maNhom" value="GP01" className="form-control" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Ngày Khởi Chiếu</label>
                        <input name="ngayKhoiChieu" type="date" className="form-control" onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="form-control">Submit</button>

                </form>
              
            </div>
            </div>
        )
    }
}

