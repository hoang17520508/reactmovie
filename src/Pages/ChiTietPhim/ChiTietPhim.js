import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';


export default function ChiTietPhim(props) {

    const [chiTietPhim, setChiTietPhim] = useState({});
    //tao 1 state chuwa yhoong tin chi  tieets phim gias trij ban dau la object rong

    //dungf use effect  ce tu dong goi api khi trang chi tiet phim load ra
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // const day=useSelector(state=>state.QuanLyPhimreducer.day);
    const day=useSelector(state=>state.QuanLyPhimreducer.day);
    const dispatch=useDispatch();
    useEffect(async () => {
        //props.match.params này là props của thể route truyền cho componnenet
        const maPhim = props.match.params.maPhim;
        //b2 duwaj vafo max guwri len apo backend gan  vaO state chi tiet phim
        const result = await Axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
            method: 'GET'
        });
        


        setChiTietPhim(result.data);
        document.title = result.data.tenPhim;
    }, [])
    const setToday=(day)=>{ 
        console.log("ngaychon",day);
        dispatch({
            type:'CHOOSE_DAY',
            data:day
            
        })
        }
    return (
        <div style={{ paddingTop: '150px', backgroundColor: 'rgb(8, 2, 18)', paddingBottom: '50px',opacity:'1' }}>
            <div className="container " >
                <div className="row">
                    <div className="col-4">
                        <img src={chiTietPhim.hinhAnh} alt={chiTietPhim.hinhAnh} style={{ width: '300px', height: '400px',border:'none' }} />
                    </div>
                    <div className="col-8 ">
                        <table className="table text-light" style={{fontSize:'15px'}}>
                            <tr>
                                <td>Film Name:</td>
                                <td>{chiTietPhim.tenPhim}</td>
                            </tr>
                            <tr>
                                <td>Description:</td>
                                <td>{chiTietPhim.moTa}</td>
                                
                            </tr>
                            <tr>
                                <td>Showtimes:</td>
                                <td>{moment( chiTietPhim.ngayKhoiChieu).format("MMM Do YY")}</td>
                            </tr>

                        </table>
                    </div>
                </div>
                <div className="row mt-2" style={{}}>
                    <div className="col-12 text-danger mb-2 " style={{ fontSize: '30px' }}>
                        Thông Tin Lịch Chiếu
                </div>


                    <div className="container showTime " >
                        <div className="row bg-light">
                            <div className="nav col-4  nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical" style={{ height: '500px' }}>
                                {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
                                    let activeClass = '';
                                    if (index == 0) {
                                        activeClass = "active"
                                    }
                                    return <a className={`nav-link  text-center`} id={`v-pills-${heThongRap.maHeThongRap}`} data-toggle="pill" href={`#${heThongRap.maHeThongRap}`} style={{ width: '100%' }} role="tab" aria-controls="v-pills-home" aria-selected="true" key={index} > <img src={heThongRap.logo} style={{ width: '75px', height: "75px" }} /> </a>
                                })}

                            </div>


                            <div className="tab-content col-8" id="v-pills-tabContent">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link " id="home-tab" data-toggle="tab" href="#mon" role="tab" aria-controls="home" aria-selected="true" style={{boder:'none'}} onClick={()=>{setToday('Monday')}}  >MON</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link " id="home-tab" data-toggle="tab" href="#tue" role="tab" aria-controls="home" aria-selected="true" onClick={()=>{setToday('Tuesday')}}>TUE</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link " id="home-tab" data-toggle="tab" href="#wen" role="tab" aria-controls="home" aria-selected="true" onClick={()=>{setToday('Wednesday')}}>WED</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link " id="home-tab" data-toggle="tab" href="#thur" role="tab" aria-controls="home" aria-selected="true" onClick={()=>{setToday('Thursday')}}>THU</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link " id="home-tab" data-toggle="tab" href="#fri" role="tab" aria-controls="home" aria-selected="true" onClick={()=>{setToday('Friday')}}>FRI</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link " id="home-tab" data-toggle="tab" href="#sat" role="tab" aria-controls="home" aria-selected="true" onClick={()=>{setToday('Saturday')}}>SAT</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link " id="home-tab" data-toggle="tab" href="#sun" role="tab" aria-controls="home" aria-selected="true" onClick={()=>{setToday('Sunday')}}>SUN</button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home-tab" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="row showTime__movie my-4">
                                            {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
                                                 return <div key={index} id={`${heThongRap.maHeThongRap}`} className="tab-pane fade" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                                 {/* {heThongRap.tenHeThongRap} */}

                                                 {heThongRap.cumRapChieu?.map((cumRap, index) => {
                                                      
                                                     return <div key={index}>
                                                         <h3 className="text-success text-left" style={{ fontSize:'20px', fontWeight: 'bold' }}>
                                                             {cumRap.tenCumRap}
                                                         </h3>
                                                         <div className="row">
                                                             {cumRap.lichChieuPhim?.slice(0, 12).map((lichChieu, index) => {
                                                                 let isday=moment(lichChieu.ngayChieuGioChieu).format('dddd');  
                                                                 console.log("ngay chieu",isday);
                                                                 if(isday===day)
                                                                {
                                                                    return <NavLink to={'/chitietphongve/' + lichChieu.maLichChieu} className="col-3" key={index}>
                                                                    {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}

                                                                </NavLink>
                                                                }
                                                                
                                                             })}
                                                         </div>

                                                     </div>
                                                 })}

                                             </div>


                                            })}

                                        </div>

                                    </div>
                                   

                                </div>


                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </div>


    )
}
