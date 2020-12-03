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



function App() {
  return (
    <div className="App">
     <MovieHeader/>
     <MovieCarousel/>
     <MovieNewIn/>
     <MovieShowTime/>
     <MovieComingSoon/>
     <MovieContact/>
     <MovieFooter/>
     
    </div>
  );
}

export default App;
