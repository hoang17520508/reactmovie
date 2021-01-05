import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataFilmAction, layThongTinCumRapAction, layThongTinHeThongRapAction } from '../../redux/actions/QuanLyPhimAction';

export default function QuanLyLichChieu(props) {
    console.log(props);
    const mangPhim=useSelector(state=>state.QuanLyPhimreducer.mangPhim);
    const [phimchieu,setphimchieu]=useState();
    const [maPhimChieu,setMaPhimChieu]=useState();
    const heThongRap=useSelector(state=>state.QuanLyPhimreducer.heThongRap);
    const cumRap=useSelector(state=>state.QuanLyPhimreducer.cumRap);
    const rap=useSelector(state=>state.QuanLyPhimreducer.cumRap);

   const dispatch=useDispatch();
   const handleChange = (event) => {
    let {value,name} = event.target;
    let typeInput = event.target.getAttribute('typeinput') //attribute là thuộc tính người dùng tự thêm trên thẻ
    

    //Xử lý cập nhật values
    const newValues = {...heThongRap};
    newValues[name] = value; //Gán giá trị mới cho thuộc tính đang nhập
  
}
  console.log('mangphim',mangPhim);
      const loadPhimTaoLichChieu=(tenPhim,maPhim)=>{
          console.log(tenPhim,maPhim);
          setphimchieu(tenPhim);
          setMaPhimChieu(maPhim);

      }
  
      useEffect(()=>{
          dispatch(getDataFilmAction());

      },[]);
      useEffect(async()=>{
          dispatch(await layThongTinHeThongRapAction())
      },[])
      useEffect(async()=>{
          dispatch(await layThongTinCumRapAction())

      },[])
    const renderPhim=()=>{
       return mangPhim?.map((phim,index)=>{
            return <tr key={index}>
                <td>{phim.maPhim}</td>
                <td> <img src={phim.hinhAnh} style={{width:"100px",height:"100px"}}  /></td>
                <td>{phim.tenPhim}</td>
                <td>{phim.ngayKhoiChieu}</td>
                <td>{phim.trailer}</td>
                <td><button className="btn btn-primary" onClick={()=>{loadPhimTaoLichChieu(phim.tenPhim,phim.maPhim)}}>Tạo lịch chiếu</button></td>
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
                        <input name="maPhim" readOnly className="form-control" value={phimchieu}  />
                    </div>
                    <div className="row">
                    
                    <div className="form-grou col-4">
                        <label>Chọn Hệ Thống Rạp</label>
                        <select className="form-control">
{heThongRap?.map((rap,index)=>{
    return <option key={index} >{rap.maHeThongRap}</option>
})}
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
                        <input type="datetime-local" name="tenPhim" className="form-control"  />
                    </div>
                    <div className="form-group col-4">
                        <label>Thời lượng phim</label>
                        <input name="trailer" className="form-control"  />
                    </div>
                    <div className="form-group col-4">
                        <label>Giá vé</label>
                        <select className="form-control">
<option>75000</option>
<option>90000</option>

</select>
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
