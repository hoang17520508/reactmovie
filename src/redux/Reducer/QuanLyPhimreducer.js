import { GET_DATA_PHIM } from "../types/QuanLyPhimConst";

const stateDefault = {
    mangPhim: [],
    thongTinPhongVe:{},   //mang phim sẽ chưa dữ liệu phim từ api trả về
    danhSachGheDangDat:[
     
    ],
    linkTrailer:'',
    day:'',
    heThongRap:[],
    cumRap:[],
    rap:'',
    maHeThongRap:'',
    thongTinTaoLichChieu:{ maPhim: '',  maRap: '',ngayChieuGioChieu:'',giaVe:'' }


}
export const QuanLyPhimreducer = (state = stateDefault, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case GET_DATA_PHIM: {
             return { ...state, mangPhim: action.dataPhim};
        }
        case 'THONG_TIN_PHONG_VE':{
           
            state.thongTinPhongVe=action.thongTinPhongVe;
            return {...state};
        }
        case 'DAT_GHE':{
            //kiem tra xem ghe dc click  co trong mang hay chua=>co thi remove chua co thi them vao
            let mangGheDangDat=[...state.danhSachGheDangDat];
            let index=mangGheDangDat.findIndex(gheDangDat=>gheDangDat.maGhe===action.gheDangDat.maGhe);
            if(index!==-1){
                mangGheDangDat.splice(index,1);
            }else{
                mangGheDangDat.push(action.gheDangDat);
            }
            return {...state,danhSachGheDangDat:mangGheDangDat};


        }
        case 'DAT_VE_THANH_CONG':{
            return {...state,danhSachGheDangDat:[]};

        }
        case 'SET_LINK_TRAILER':{
            return {...state,linkTrailer:action.data}

        }
        case 'CHOOSE_DAY':{
            return {...state,day:action.data}
        }
        case 'THONG_TIN_HE_THONG_RAP':{
            return {...state,heThongRap:action.heThongRap}
        }
        case 'THONG_TIN_CUM_RAP':{
            return {...state,cumRap:action.cumRap}
        }
        case 'SET_MA_HE_THONG_RAP':{
            
            return {...state,maHeThongRap:action.data}
        }
        case 'SET_THONG_TIN_TAO_LICH_CHIEU':{
            
            return {...state,thongTinTaoLichChieu:action.data}
        }
        case 'THEM_LICH_CHIEU_THANH_CONG':{
            return {...state}
        }
    }
    return { ...state }
}
