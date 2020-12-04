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
import { BrowserRouter, Route,Switch } from "react-router-dom";
import MovieHome from './Components/MovieHome';
import MovieTest from './Components/Data/MovieTest';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MovieHeader/>
      
    
      
      <Switch>
      <Route path="/login" component={MovieLogin} />
      <Route path="/signup" component={MovieSignUp} />
      <Route path="/test" component={MovieTest} />
      <Route path="/" component={MovieHome} />
      
      
      

      </Switch>
      

     
      </BrowserRouter>




    </div>
  );
}

export default App;
