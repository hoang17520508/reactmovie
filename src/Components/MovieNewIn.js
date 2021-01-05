import React, { useEffect }  from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import moment from 'moment'

import { connect, useSelector,useDispatch } from 'react-redux'


import { getDataFilmAction } from '../redux/actions/QuanLyPhimAction';

export default function MovieNewIn(props)  {
  console.log(props);
  const mangPhim=useSelector(state=>state.QuanLyPhimreducer.mangPhim);
  
 const dispatch=useDispatch();
console.log('mangphim',mangPhim);
    

    useEffect(()=>{
        dispatch(getDataFilmAction());
    },[]);
  const pushstararray = (starNumber) => {
    let rows = []
    for (let i = 0; i < starNumber; i++) {
      rows.push(<i className="fa fa-star" />);

    }
    return rows.map((star, index) => {
      return star;
    })
  }

  const BaiTapRenderDanhSachPhim = () => {

    return mangPhim.map((film, index) => {

      return <div className=" col" key={index}>
        <div className="newIn__ item">
          <div className="newIn__info " id="newIn_img">
            <img className="" src={film.hinhAnh} alt />
            <div className="newIn__overlay" />
            <div className="newIn__detail">
              <i data-target="#movieTrailer" onClick={()=>{
                dispatch({
                  type:'SET_LINK_TRAILER',
                  data:film.trailer
                })
              }}
                
               data-toggle="modal" className="fa fa-play" />
              <a href="#">Read More</a>
              <p>{`Release:${moment(film.ngayKhoiChieu).format("MMM Do YY")  }`}</p>
              <NavLink to={`/chitietphim/${film.maPhim}`} className="newIn__BookTicket__btn">BUY</NavLink>
            </div>
          </div>
          <p className="newIn__item__title" style={{height:'25px',fontSize:'15px'}}>{film.tenPhim}</p>
          <p className="newIn__item__rating">
            {/* <i className="fa fa-star" />
       <i className="fa fa-star" />
       <i className="fa fa-star" />
       <i className="fa fa-star" />
       <i className="fa fa-star" /> */}
            {pushstararray(film.danhGia)}
          </p>
        </div>
     

      </div>
    });



  }


  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,
    nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#8888",borderRadius:"50%",fontSize:"85px",width:"50px",height:"50px",right: "-50px",top:'350px',  }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#8888",borderRadius:"50%",fontSize:"85px",width:"50px",height:"50px",left: "-50px",top:'350px', }}
        onClick={onClick}
      />
    );
  }
  return (


    <div>
      <div className="container mt-2" id="newin">
        <h1 className="newIn__title text-left">NEW IN</h1>
        <div className="newIn_film">

          <Slider {...settings}>
            {BaiTapRenderDanhSachPhim()}
           
          </Slider>
        </div>
      </div>

    </div>



  )
}
    // componentDidMount(){
    //   Axios({
    //     method:'GET',
    //     url:`${DOMAIN}/api/quanlyphim/laydanhsachphim?manhom=GP01`
    //   }).then(res=>{
    //     this.props.dispatch({
    //       type:GET_DATA_PHIM,
    //       payload:res.data

    //     })
    //   }).catch(err=>{console.log(err);})
    // }


// export default connect()(MovieNewIn);