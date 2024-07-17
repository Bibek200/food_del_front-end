import React, {  useContext } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const Fooditem = ({ id, name, price, description, image })=>{

      const { cartItems, addToCart, removeFromCart} = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className="food-item-image-contener">
                <img className='food-img' src={image} alt={name} />
                {!cartItems[id]
                    ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
                       :<div className="food-item-contener">
                        <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItems[id]}</p>
                        <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                        </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-reting">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="rating" />
                </div>
                <p className="food-desc">{description}</p>
                <p className="food-price">${price}</p>
            </div>


        </div>
    )
}

export default Fooditem
