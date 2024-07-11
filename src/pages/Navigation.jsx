import { Outlet, NavLink } from 'react-router-dom'
import '../assets/Navigation.css'
import logo from '../assets/shop-logo.png'

const Navigation = (props) => {
    return (
        <>
            <nav className="nav-bar">
                <div className="logo">
                    <NavLink to="/"><img src={logo} alt="" /></NavLink>
                </div>
                <div className="nav-link">
                    <NavLink to="/">home</NavLink>
                    <NavLink to="/cart">cart</NavLink>
                    <NavLink to="/product">product</NavLink>
                    <div className="cart">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span></span>
                    </div>
                </div>
                <div className="hide">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </div>
            </nav>
            <Outlet/>
            <footer className='main-footer'>
                <div className="footer-center">
                    <div className="footer-center-short">
                        <div className="footer-boxes">
                            <NavLink to="/about-us">about-Us</NavLink>
                            <NavLink to="/contact-us">contact-Us</NavLink>
                            <NavLink to="/sign-Up">sign-Up</NavLink>
                            <NavLink to="/login">login</NavLink>
                            <NavLink to="/tracking-product">tracking-product</NavLink>
                            <NavLink to="/saler">Sale In Our Site</NavLink>
                        </div>
                        <div className="footer-boxes">
                            <NavLink to="/review">review</NavLink>
                            <NavLink to="/product-rating">rating</NavLink>
                            <NavLink to="/partners">partners</NavLink>
                            <NavLink to="/cupon">cupon-form</NavLink>
                            <NavLink to="membership">membership-form</NavLink>
                        </div>
                        <div className="footer-boxes last-box">
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-google"></i>
                            <i className="fa-brands fa-dribbble"></i>
                            <i className="fa-brands fa-ebay"></i>
                            <i className="fa-brands fa-amazon"></i>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
 
export default Navigation;