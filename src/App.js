
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import AboutUs from './Section/AboutUs/AboutUs';
import Amenits from './Section/Amenits/Amenits';
import ChooseUs from './Section/ChooseUs/ChooseUs';
import Evocom from './Section/EvoCom/Evocom';
import Partners from './Section/Partners/Partners';

function App() {
  return (
    <div className="App">
      
        <Header/>
        <div className='MAIN_IMAGE_WRAPPER'>
        <Evocom/>
        <AboutUs/>
        <ChooseUs/>
        <Amenits/>
        <Partners/>
        <Footer/>
        </div>
    </div>
  );
}

export default App;
