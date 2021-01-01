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
import Admin from './Admin/Admin';
import { createBrowserHistory } from 'history';
import { HomeTemplate } from './templates/HomeTemplate';
import ChiTietPhim from './Pages/ChiTietPhim/ChiTietPhim';
import PhongVe from './Pages/PhongVe/PhongVe';
import NewsPage from './News/NewsPage';

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
        <Route exact path="/whaton"   component={MovieWhaton} />
        <Route exact path="/admin"   component={Admin} />
        <HomeTemplate exact path="/" Component={MovieHome} />
        <HomeTemplate path="/chitietphongve/:maLichChieu" Component={PhongVe} />
        <Route path="/new" component={NewsPage} />
        
        
  
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