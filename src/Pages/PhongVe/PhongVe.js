import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2';
import { datVeApiAction, layThongTinPhongveAction } from '../../redux/actions/QuanLyPhimAction';
import { USER_LOGIN } from '../../util/setting';
import './phongve.css'
export default function PhongVe(props) {
    // const thongTinPhongVe=useSelector(state=>state.QuanLyPhimreducer.thongtinPhongVe);
    const thongTinPhongVe=useSelector(state=>state.QuanLyPhimreducer.thongTinPhongVe);
    const danhSachGheDangDat=useSelector(state=>state.QuanLyPhimreducer.danhSachGheDangDat);
    console.log("danhsachghedangdat",danhSachGheDangDat);
    
    console.log("thong tin",thongTinPhongVe );
    const dispatch=useDispatch();
    useEffect(async()=>{
        let maLichChieu=props.match.params.maLichChieu;
   
        dispatch(await layThongTinPhongveAction(maLichChieu));
    },[])
    return (
        <div className="container-fluid phongve " style={{marginTop:'100px'}}>
            <div className="row">
<div className="col-8 text-center">
    <div className="manHinh mt-2 mb-2"><img src="../screen.png" /></div>
    <div className="danhSachGhe">
        {thongTinPhongVe.danhSachGhe?.map((ghe,index)=>{
            let classGhe=ghe.loaiGhe==='Vip'?'gheVip':'ghe';
            let classGheDaDat=ghe.daDat?'gheDaDat':'';
            let noidung=ghe.daDat?'X':ghe.stt;
            let disable=ghe.daDat?'disable':'';
            //render ghe dang dat
            let indexGheDangDat=danhSachGheDangDat.findIndex(gheDangDat=>ghe.maGhe===gheDangDat.maGhe);
            let classGheDangDat=indexGheDangDat!==-1?'gheDangDat':'';
        return <Fragment key={index}> <button onClick={()=>{
            dispatch({
                type:'DAT_GHE',
                gheDangDat:{
                    maGhe:ghe.maGhe,
                    giaVe:ghe.giaVe,
                    stt:ghe.stt,

                }
            })
        }} disabled={disable} className={`ghe ${classGhe} ${classGheDaDat} ${classGheDangDat}` }>{noidung}</button>
        {(index+1)%16===0?<br/>: ''}
        </Fragment>
    })} </div>
</div>
<div className="col-4 text-center mt-4" style={{fontSize:'17px'}}>{danhSachGheDangDat.reduce((tongTien,gheDangDat,index)=>{
    return tongTien+= gheDangDat.giaVe;
},0).toLocaleString() } VND <div/>
<hr/>
<h1 className="text-dark">{thongTinPhongVe.thongTinPhim?.tenPhim}</h1>
<hr/>
<p>{thongTinPhongVe.thongTinPhim?.tenCumRap}-{thongTinPhongVe.thongTinPhim?.tenRap}</p>
<hr/>

<p>{thongTinPhongVe.thongTinPhim?.ngayChieu}-{thongTinPhongVe.thongTinPhim?.gioChieu}</p>
<div>Ghế:{danhSachGheDangDat.map((gheDangDat,index)=>{
    return <span className="mr-1" key={index}>{gheDangDat.stt}</span>
})}</div>
<hr/>
<button onClick={()=>{
    if(localStorage.getItem(USER_LOGIN)){
        let usLogin=JSON.parse(localStorage.getItem(USER_LOGIN));
        let objectDatVe=
            {
                "maLichChieu": props.match.params.maLichChieu,
                "danhSachVe": danhSachGheDangDat,
                "taiKhoanNguoiDung": usLogin.taiKhoan,
              }
              console.log('obkectdatve',objectDatVe);
        dispatch( datVeApiAction(objectDatVe));
    }
    else{
        Swal.fire('Thông báo ','Đăng nhập để tiếp tục','warning');
        props.history.replace('/login');
        window.location.reload();// xoa danh sach ghe dang dat di
    }
}} className="btn btn-success w-100 p-4" style={{fontSize:'25px'}}>Đặt Vé</button>

</div>


            </div>
            
        </div>
    )
}
