import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import CarDetails from './components/CarDetails/CarDetails';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import { Route,Switch } from 'react-router-dom';
import Login from './Login/Login';
import SignUp from './Login/Signup';
// import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
       
       
    <NavBar /> 
    <Switch>
      <Route path="/about" ><About/></Route>
      <Route path="/cardetails" ><CarDetails/></Route>
      <Route path="/contactus" ><ContactUs/></Route>  
      <Route path="/login" ><Login/></Route>   
      <Route path="/footer" ><Footer/></Route>
      <Route path="/signup" ><SignUp/></Route>
      <Route path="/" ><Home/></Route>

     
      
    </Switch>
  </>
       
  
    
   
  );
}

export default App;
