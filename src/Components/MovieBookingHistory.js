import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTicketInfo } from '../redux/actions/UserAction';
import { USER_LOGIN } from '../util/setting';

export default function MovieBookingHistory() {


    const ticketInfo=useSelector(state=>state.UserReducer.ticketInfo);
    let user=useSelector(state=>state.UserReducer.credentials);
    
    const dispatch=useDispatch();
    console.log("ticketinfo",ticketInfo);
    useEffect(async()=>{
      
        
        
        await dispatch( 
  getTicketInfo(user))
;console.log("user",user);
    },[])
 const renderHistory=()=>{
     return ticketInfo.thongTinDatVe?.map((ticket,index)=>{
         return <tr index={index}>
             <td>{ticket.maVe}</td>
             <td>{ticket.ngayDat}</td>
             <td>{ticket.tenPhim}</td>
             <td>{ticket.giaVe*ticket.danhSachGhe.length}</td>
             <td>{ticket.thoiLuongPhim}P</td>
             <td> {ticket.danhSachGhe.map((ghe,index)=>{
                 return <p key={index} className="ml-1">Ghế:{ghe.tenGhe}-{ghe.tenHeThongRap}-{ghe.tenRap}</p>
             })}</td>

         </tr>
     })
 }
    

    return (
      <div id="root_history">
           <div className="bg_history">
            <div className="container " style={{paddingTop:"110px"}}>
<h3 className="text-warning">Booking History</h3>
<table className="table bg-dark text-light">
   <thead>
   <tr>
        <td>ID Booked</td>
        <td>BookingDay</td>
        <td>Film Name</td>
        <td>Price</td>
        <td>Time</td>
        <td>Seat</td>
    </tr>
   </thead>
 
  
   
<tbody>
       {renderHistory()}
   </tbody>

</table>

   

        </div>
       </div>
      </div>
    )
}
