import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import CarDetails from './components/CarDetails/CarDetails';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    <>
       <NavBar/>
       <Home/>
       <About/>
       <CarDetails/>
       <ContactUs/>
    </>
    
   
  );
}

export default App;
