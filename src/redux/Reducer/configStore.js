/// file quản lý tất cả các state của uqwnsg dụng thay vì đặt tại component ta đặt state tại store
import {combineReducers, createStore} from 'redux';
import {BookingTicketReducer} from './BookingTicketReducer';
import { QuanLyPhimreducer } from './QuanLyPhimreducer';

import UserReducer from './UserReducer'




const rootReducer=combineReducers({
    // các sate sau này khai báo tại dâdy
   
//    stateBookingTicket:BookingTicketReducer,
   UserReducer,
   QuanLyPhimreducer:QuanLyPhimreducer
   

   
    
})
 // tạo ra các store chưa rootReducer{xem như store tổng của ứng dụng}
 export default  rootReducer;
