import React, {useState} from 'react'
import {Link } from 'react-router-dom';
import '../static/css/Header.css'
import Popup from './Popup';
import Register from './Register';
import Login from "./Login";

const Header = () => {
    const [register, setIsOpen] = useState(false);
    const [login, setLogin] = useState(false);
    const icon = <svg width="40" height="40" viewBox="0 0 24 24">
                    <circle fill="none" cx="12" cy="7" r="3" />
                    <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                </svg>
    
  return (
    <header>
        
        <div className=''>
            <div className="right">
                <div className='row'>
                    <div className='col'>
                    <Popup content={<Register />} set={setIsOpen} name={register} value="Register"/>
                    <Popup content={<Login set={setIsOpen} name={register} />} button={icon}set={setLogin} name={login} value="Login"/>
                    </div>
                    <div className='col'>
                    <Link to="#">
                        <svg width="40" height="40" viewBox="0 0 24 24">
                          <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                          <circle cx="10.5" cy="18.5" r="1.5" />
                          <circle cx="17.5" cy="18.5" r="1.5" />
                        </svg>
                    </Link>
                    </div>
                </div>
            </div>
            <div>
                <h1>Ecommerce</h1>
            </div>
        </div>
</header>
  );
}
export default Header;