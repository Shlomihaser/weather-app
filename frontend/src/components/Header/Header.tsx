import InputField from '../InputField/InputField';
import logo from '../../assets/logo.png';
import LocationInfo from '../LocationInfo/LocationInfo';
import './header-style.css';


function Header() {
  return (
    <header className="header">

       <a href="#">
        <img className='logo' alt="Fintek Logo" src={logo}/>
      </a>
      
      <div className="content-wrapper">

        <div className="app-title">
          <h1>Use our weather app</h1>
          <h1>to see the weather</h1>
          <h1>around the world</h1>
        </div>

        <div className="city-search">
          <label htmlFor="city-input" className="city-label">City name</label>
          <InputField placeHolderStr='Enter city name'/>
        </div>

        <LocationInfo/>

      </div>

    </header>
  )
}


export default Header;