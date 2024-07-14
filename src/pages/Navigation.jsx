import { Outlet, NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../assets/Navigation.css'
import logo from '../assets/shop-logo.png'
import { useEffect } from 'react'
import Footer from './Footer'

const Navigation = (props) => {
    useEffect(()=>{
        const crossButton = document.querySelector('#crossButton')
        const addButton = document.querySelector('.hide')
        const hiddenNav = document.querySelector('.hidden-nav-bar')

        addButton.addEventListener("click",()=>{
            hiddenNav.classList.add('side-go')
        })

        crossButton.addEventListener("click",()=>{
            hiddenNav.classList.remove('side-go')
        })
    })

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
            <div className="hidden-nav-bar">
                <div className="hidden-center">
                    <div className="btns">
                        <button id='crossButton'>
                            <i className="fa-solid fa-x"></i>
                        </button>
                    </div>
                    <div className="hide-nav-list">
                        <NavLink to="/">home</NavLink>
                        <NavLink to="/cart">cart</NavLink>
                        <NavLink to="/product">product</NavLink>
                        <NavLink to="/login">login</NavLink>
                        <NavLink to="/sign-up">sign up</NavLink>
                    </div>
                </div>
            </div>
            <Outlet/>
            <Footer/>
        </>
    );
}

Navigation.propTypes = {
    cartCount:PropTypes.string.isRequired
}
 
export default Navigation;