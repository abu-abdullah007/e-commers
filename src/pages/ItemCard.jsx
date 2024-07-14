import PropTypes from 'prop-types'
import '../assets/Card.css'
import { useState } from 'react';

const ItemCard = (props) => {
    const [currentValue, setCurrentValue] = useState("Add To Cart")

    const setValue = () =>{
        setCurrentValue(".....")
        setTimeout(()=>{
            setCurrentValue(`Added To Cart`)
        },1000)
    }

    return (
        <>
            <div className="card-main">
                <div className="card-upper-img">
                    <img src={props.itemImg} alt="" />
                </div>
                <div className="card-lower-text">
                    <h3>{props.itemName}</h3>
                    <h4>{props.itemValue}</h4>
                    <div className="button-div">
                        <button id='cartButton' onClick={setValue}>{currentValue}</button>
                        <button id='wishButton'>Add To Wishlist</button>
                    </div>
                </div>
            </div>
        </>
    );
}

ItemCard.propTypes = {
    itemImg:PropTypes.string.isRequired,
    itemName:PropTypes.string.isRequired,
    itemValue:PropTypes.string.isRequired
}
 
export default ItemCard;