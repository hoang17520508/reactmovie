import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataFilmAction, layThongTinCumRapAction, layThongTinHeThongRapAction, themLichChieuAction,xoaFilmAction } from '../../redux/actions/QuanLyPhimAction';
import moment from 'moment'
export default function QuanLyLichChieu(props) {
    console.log(props);
    const mangPhim = useSelector(state => state.QuanLyPhimreducer.mangPhim);
    const [phimchieu, setphimchieu] = useState();
    const [maPhimChieu, setMaPhimChieu] = useState();
    const heThongRap = useSelector(state => state.QuanLyPhimreducer.heThongRap);
    const maHeThongRap = useSelector(state => state.QuanLyPhimreducer.maHeThongRap);
    const cumRap = useSelector(state => state.QuanLyPhimreducer.cumRap);
    const rap = useSelector(state => state.QuanLyPhimreducer.cumRap);
    const thongTinTaoLichChieu=useSelector(state => state.QuanLyPhimreducer.thongTinTaoLichChieu);
    
    const dispatch = useDispatch();
    console.log("formvalues",thongTinTaoLichChieu);
    const thongTinTaoLichChieuUpdate={...thongTinTaoLichChieu};
    delete thongTinTaoLichChieuUpdate.maHeThongRap;
    console.log("thongTinTaoLichChieuUpdate",thongTinTaoLichChieuUpdate);
    console.log("cumrap", cumRap);
    const handleChange = (event) => {
        let { value, name } = event.target;
        let typeInput = event.target.getAttribute('typeinput') //attribute là thuộc tính người dùng tự thêm trên thẻ
        // console.log("value",value);

        // Xử lý cập nhật values
        const newValues = { ...thongTinTaoLichChieu };
         
        
            newValues[name] = value;

        
        //Gán giá trị mới cho thuộc tính đang nhập
        
        
        dispatch(layThongTinCumRapAction(newValues.maHeThongRap));
        
        dispatch({
            type: 'SET_MA_HE_THONG_RAP',
            data: newValues.maHeThongRap
        })
        
      
       dispatch({
           type:'SET_THONG_TIN_TAO_LICH_CHIEU',
           data:  Object.assign(newValues,{maPhim:maPhimChieu})
       })
       
       







    }
    const handleSubmit=async(data)=>{
       
         dispatch(await themLichChieuAction(data));

    }
    const deletefilms=(maphim)=>{
        dispatch(xoaFilmAction(maphim));
    }
    
    console.log('mangphim', mangPhim);
    const loadHeThongRap = () => {
        return heThongRap?.map((rap, index) => {
            return <option key={index} value={rap.maHeThongRap} >{rap.maHeThongRap}</option>
        })


    }
    const loadPhimTaoLichChieu = (tenPhim, maPhim) => {
        console.log(tenPhim, maPhim);
        setphimchieu(tenPhim);
        setMaPhimChieu(maPhim);
        

    }
    const loadCumRap=()=>{
        return cumRap?.map((rap,index)=>{
            return rap.danhSachRap?.map((soRap,index)=>{
                return <option value={soRap.maRap}>{soRap.tenRap}-{soRap.maRap}-{loadTenRap()}</option>
            })
        })
    }
    const loadTenRap=()=>{
        return cumRap?.map((rap,index)=>{
            return rap.tenCumRap
        })
    }



    useEffect(() => {
        dispatch(getDataFilmAction());

    }, []);
    useEffect(async () => {

        dispatch(await layThongTinHeThongRapAction());


    }, [])
    useEffect(() => {



        dispatch(layThongTinCumRapAction(maHeThongRap));

    }, [])
    const renderPhim = () => {
        return mangPhim?.map((phim, index) => {
            return <tr key={index}>
                <td>{phim.maPhim}</td>
                <td> <img src={phim.hinhAnh} style={{ width: "100px", height: "100px" }} /></td>
                <td>{phim.tenPhim}</td>
                <td>{phim.ngayKhoiChieu}</td>
                <td>{phim.trailer}</td>
                <td><button className="btn btn-primary" type="button"  onClick={() => { loadPhimTaoLichChieu(phim.tenPhim, phim.maPhim) }}>Tạo lịch chiếu</button></td>
                <td><button className="btn btn-danger" onClick={()=>{deletefilms(phim.maPhim)}}>Xóa phim</button></td>

            </tr>
        })

    }
    return (
        <div>
            <h3 className="display-4" style={{ fontSize: '35px' }}>Quản lý lịch chiếu</h3>
            <form id="myForm"> 
                <div className="container ">

                    <form className="text-left" >

                        <div className="form-group ">
                            <label>Tên Phim</label>
                            <input name="tenPhim" readOnly className="form-control" value={phimchieu} />
                        </div>
                        <div className="form-group ">
                            <label>Mã Phim</label>
                            <input name="maPhim" readOnly className="form-control" value={maPhimChieu} onChange={handleChange}  />
                        </div>
                        <div className="row">

                            <div className="form-grou col-6">
                                <label>Chọn Hệ Thống Rạp</label>
                                <select className="form-control" name="maHeThongRap" onChange={handleChange}  >
                                    <option></option>
                                    {loadHeThongRap()}
                                </select>
                            </div>
                            <div className="form-group col-6">
                                <label>Chọn cụm rạp</label>
                                <select className="form-control" name="maRap" onChange={handleChange}>
                                <option></option>
                                    {loadCumRap()}
                                </select>

                            </div>
                            
                        </div>
                        <div className="row">

                            <div className="form-grou col-6">
                                <label>Chọn ngày giờ chiếu</label>
                                <input type="datetime-local" name="ngayChieuGioChieu" className="form-control" onChange={handleChange} />
                            </div>
                            
                            <div className="form-group col-6">
                                <label>Giá vé</label>
                                <select className="form-control" name="giaVe" onChange={handleChange}>
                                <option></option>
                                    <option>75000</option>
                                    <option>90000</option>

                                </select>
                            </div>
                        </div>

<div className="row container">
    
<button type="submit" className="form-control btn btn-success col" onClick={()=>{ handleSubmit(thongTinTaoLichChieuUpdate)}} >Submit</button>
                        <button type="reset" className="form-control btn btn-warning col ml-1" >Reset</button>
</div>

                    </form>

                </div>
            </form>
            <div style={{ maxHeight: "500px", overflowY: 'scroll' }} className="mt-2">
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
