import PropTypes from 'prop-types'
import '../assets/Card.css'

const ItemCard = (props) => {
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
                        <button>Add To Cart</button>
                        <button>Add To Wishlist</button>
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