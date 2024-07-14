import Footer from "./Footer";
import '../assets/Cart.css'
import { useEffect } from "react";

const Cart = () => {
    useEffect(()=>{
        const cart = document.querySelector('.cart-logo i')
        const formBox = document.querySelector('#username')

        cart.addEventListener("click",()=>{
            formBox.focus()
        })
    })

    return (
        <>
            <div className="cart-div">
                <div className="cart-center-div">
                    <div className="input-field">
                        <form action="">
                            <div className="input-boxes">
                                <input type="text" id="username" placeholder="Enter Username..." />
                            </div>
                            <div className="input-boxes">
                                <input type="email" id="email" placeholder="Enter Email..." />
                            </div>
                            <div className="input-boxes">
                                <input type="password" id="password" placeholder="Enter Password..." />
                            </div>
                            <div className="input-boxes">
                                <input type="password" id="re-password" placeholder="Re-enter Password..." />
                            </div>
                            <div className="input-boxes">
                                <label htmlFor="checkagree">This all information is correct</label>
                                <input type="checkbox" id="checkagree" />
                            </div>
                            <div className="input-boxes">
                                <button type="submit">SIGN-UP</button>
                            </div>
                        </form>
                    </div>
                    <div className="cart-logo">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span></span>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Cart