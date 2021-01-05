import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataFilmAction } from '../../redux/actions/QuanLyPhimAction';

export default function QuanLyLichChieu(props) {
    console.log(props);
    const mangPhim=useSelector(state=>state.QuanLyPhimreducer.mangPhim);
    
   const dispatch=useDispatch();
  console.log('mangphim',mangPhim);
      
  
      useEffect(()=>{
          dispatch(getDataFilmAction());
      },[]);
    const renderPhim=()=>{
       return mangPhim?.map((phim,index)=>{
            return <tr key={index}>
                <td>{phim.maPhim}</td>
                <td> <img src={phim.hinhAnh} style={{width:"100px",height:"100px"}}  /></td>
                <td>{phim.tenPhim}</td>
                <td>{phim.ngayKhoiChieu}</td>
                <td>{phim.trailer}</td>
                <td><button className="btn btn-primary">Tạo lịch chiếu</button></td>
                <td><button className="btn btn-danger">Xóa phim</button></td>

            </tr>
        })

    }
    return (
        <div>
            <h3 className="display-4" style={{fontSize:'35px'}}>Quản lý lịch chiếu</h3>
            <form>
            <div className="container ">
                
                <form  className="text-left" >
                    
                <div className="form-group ">
                        <label>Tên Phim</label>
                        <input name="maPhim" readOnly className="form-control"  />
                    </div>
                    <div className="row">
                    
                    <div className="form-grou col-4">
                        <label>Chọn Hệ Thống Rạp</label>
                        <select className="form-control">
<option>Danh sách 01</option>
<option>Danh sách 02</option>
<option>Danh sách 03</option>
<option>Danh sách 04</option>
</select>
                    </div>
                    <div className="form-group col-4">
                        <label>Chọn cụm rạp</label>
                        <select className="form-control">
<option>Danh sách 01</option>
<option>Danh sách 02</option>
<option>Danh sách 03</option>
<option>Danh sách 04</option>
</select>
               
                    </div>
                    <div className="form-group col-4">
                        <label>Chọn  rạp</label>
                        <select className="form-control">
<option>Danh sách 01</option>
<option>Danh sách 02</option>
<option>Danh sách 03</option>
<option>Danh sách 04</option>
</select>
               
                    </div>
                    </div>
                    <div className="row">
                    
                    <div className="form-grou col-4">
                        <label>Chọn ngày giờ chiếu</label>
                        <input name="tenPhim" className="form-control"  />
                    </div>
                    <div className="form-group col-4">
                        <label>Thời lượng phim</label>
                        <input name="trailer" className="form-control"  />
                    </div>
                    <div className="form-group col-4">
                        <label>Giá vé</label>
                        <input name="trailer" className="form-control"  />
                    </div>
                    </div>
                    
                   
                    <button type="submit" className="form-control btn btn-success">Submit</button>

                </form>
              
            </div>
            </form>
           <div style={{maxHeight:"500px",overflowY:'scroll'}} className="mt-2">
           <table className="table  " >
                <thead>
                    <td>Mã Phim</td>
                    <td>Phim</td>
                    <td>Tên Phim</td>
                    <td>Ngày chiếu</td>
                    <td>Trailer</td>
                    <td></td>
                    
                </thead>
<tbody>
{renderPhim()}
</tbody>
            </table>
           </div>

        </div>
    )
}
