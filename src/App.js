import logo from './logo.svg';
import './App.css';
import MovieHeader from './Components/MovieHeader';
import MovieCarousel from './Components/MovieCarousel';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MovieNewIn from './Components/MovieNewIn';
import MovieShowTime from './Components/MovieShowTime';
import MovieComingSoon from './Components/MovieComingSoon';
import MovieContact from './Components/MovieContact';
import MovieFooter from './Components/MovieFooter';
import MovieLogin from './Components/MovieLogin';
import MovieSignUp from './Components/MovieSignUp';
import { BrowserRouter, Router,Switch ,Route} from "react-router-dom";
import MovieHome from './Components/MovieHome';
import MovieTest from './Components/Data/MovieTest';
import MovieWhaton from './Components/MovieWhaton';
import BookingTicket from './BookingTicket/BookingTicket';
import thunk from 'react-redux'
import { Component } from 'react';
import {connect} from 'react-redux'
import { createAction } from './redux/actions';
import { FETCH_CREDENTIALS } from './redux/types/UserType';

import { createBrowserHistory } from 'history';
import { HomeTemplate } from './templates/HomeTemplate';
import ChiTietPhim from './Pages/ChiTietPhim/ChiTietPhim';
import PhongVe from './Pages/PhongVe/PhongVe';
import { AdminTemplate } from './templates/AdminTemplate';
import QuanLyNguoiDung from './Pages/QuanLyNguoiDung/QuanLyNguoiDung';
import QuanLyPhim from './Pages/QuanLyPhim/QuanLyPhim';
import QuanLyLichChieu from './Pages/QuanLyLichChieu/QuanLyLichChieu';
import MovieBookingHistory from './Components/MovieBookingHistory';

export const history =createBrowserHistory();
class App extends Component {
  render(){
    return (
      <div className="App">
        <Router history={history}>
        
       
      
        
        <Switch>
        <Route exact path="/login" component={MovieLogin} />
        <Route exact path="/signup" component={MovieSignUp} />
        <Route exact path="/test" component={MovieTest} />
        <HomeTemplate path="/chitietphim/:maPhim" Component={ChiTietPhim} />
        <HomeTemplate path="/thongtindatve" Component={MovieBookingHistory} />
        <Route exact path="/whaton"   component={MovieWhaton} />
        
        <AdminTemplate path="/admin/quanlynguoidung" Component={QuanLyNguoiDung} />
        <AdminTemplate path="/admin/quanlyphim" Component={QuanLyPhim} /> 
        <AdminTemplate path="/admin/quanlylichchieu" Component={QuanLyLichChieu} /> 
        <HomeTemplate exact path="/" Component={MovieHome} />
        <HomeTemplate path="/chitietphongve/:maLichChieu" Component={PhongVe} />
        
        
        
  
        </Switch>
        
  
       
        </Router>
  
  
  
  
      </div>
    );

  }
  getCredentialFormLocal=()=>{
    const credentialStr=localStorage.getItem('credentials');
    if(credentialStr){
      this.props.dispatch(createAction(FETCH_CREDENTIALS,JSON.parse(credentialStr)))

    }
  }
  componentDidMount(){
    this.getCredentialFormLocal();

  }
  
}

export default connect()(App);
