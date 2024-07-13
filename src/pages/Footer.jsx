import { NavLink } from "react-router-dom";
import '../assets/Footer.css'

const Footer = () => {
    return (
        <>
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
 
export default Footer;