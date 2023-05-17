import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import LandingPage from './pages/LandingPage';
import ListCar from './pages/ListCar';
import Notfound from './pages/Notfound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<LandingPage/>} />
        <Route path='/listcar' element = {<ListCar/>} />
        <Route path="*" element = {<Notfound/>} />
      </Routes>
    </Router>
  );
}

export default App;
