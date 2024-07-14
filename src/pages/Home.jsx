import '../assets/Home.css'
import ItemCard from './ItemCard';
import shoe from '../assets/item-pic/shoe.jpg'
import phone from '../assets/item-pic/phone.jpg'
import headphone from '../assets/item-pic/headphone.jpg'
import gloves from '../assets/item-pic/gloves.png'
import bag from '../assets/item-pic/bag.jpg'
import brush from '../assets/item-pic/brush.jpg'
import hunny from '../assets/item-pic/hunny.jpg'
import mug from '../assets/item-pic/mug.jpg'
import router from '../assets/item-pic/router.jpg'
import poster from '../assets/item-pic/shoping.png'
import Footer from './Footer';


const Home = () => {

    return (
        <>
            <div className="main-section">
                <div className="section-cover">
                    <div className="cor">
                        <div className="cor-item">
                            <img src={poster} alt="" id='poster'/>
                        </div>
                    </div>
                    <div className="item-box">
                        <div className="item-box-center">
                            <ItemCard itemImg={shoe} itemName='Best comfortable sho for men' itemValue='250$'/>
                            <ItemCard itemImg={phone} itemName='Best branded used phone' itemValue='100$'/>
                            <ItemCard itemImg={bag} itemName='Usefull bag for woman and girls' itemValue='56$'/>
                            <ItemCard itemImg={gloves} itemName='Handgloges for hard working' itemValue='22$'/>
                            <ItemCard itemImg={hunny} itemName='Mustard flower pure honey' itemValue='50$'/>
                            <ItemCard itemImg={headphone} itemName='Big headphone for normal uses' itemValue='120$'/>
                            <ItemCard itemImg={brush} itemName='Tooth brush with pest for low cost' itemValue='20$'/>
                            <ItemCard itemImg={mug} itemName='Usefull tee and coffee mug' itemValue='30$'/>
                            <ItemCard itemImg={router} itemName='Powerfull router for big home use' itemValue='230$'/>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </>
    );
}
 
export default Home;