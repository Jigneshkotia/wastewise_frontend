import React, {useState} from 'react'
import '../Styles/components/Navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';
import CartBoxContainer from '../Components/CartBoxContainer';

const Navbar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [showCart, setShowCart] = useState(false);

    const toggleCart = () => {
        setShowCart(!showCart);
    }

    const goToScrapPriceList = () => {
        navigate('/pricelist')
    }

    const goToHome = () => {
        navigate('/');
    }

    const goToContact = () => {
        navigate('/contact');
    }

  return <div className='navcover'>
  <nav className='navbar'>
    <div className='navleft'>
        <img className='logo-img' src="/images/logo.jpeg" alt="logo" />
    </div>
    <div className='navright'>
        <ul className='navright-list'>
            <li className={`navright-list-element ${location.pathname === "/" ? "active" : ""} `}  onClick={goToHome}>Home</li>
            <li className={`navright-list-element ${location.pathname === "/pricelist" ? "active" : ""} `}  onClick={goToScrapPriceList} >Scrap Price</li>
            <li className={`navright-list-element ${location.pathname === "/contact" ? "active" : ""} `}  onClick={goToContact}>Contact</li>
            <li className={`navright-list-element`} onClick={toggleCart} >🛒 Cart</li>
        </ul>
    </div>
  </nav>

  {showCart && <div className='cartbox'>
        <CartBoxContainer />
        <div className='cartboxclose' onClick={toggleCart}>⛌</div>
    </div>}
  </div>
}
export default Navbar;