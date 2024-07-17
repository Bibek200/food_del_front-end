import React, { useContext } from 'react'
import './Card.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'
const Card = () => {
  const {cartItems,food_list,removeFromCart,getTotalAmount} = useContext(StoreContext)
  const nevigate = useNavigate();
  return (
    <div className='addToCard'>
      <div className="card-items">
        <div className="card-item-titel">
          <p>Items</p>
          <p>titel</p>
          <p>prich</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if (cartItems[item._id]>0) {
            return(
              <>
              <div className="card-item-titel card-items-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price*cartItems[item._id]}</p>
                <img className='cros' onClick={()=>removeFromCart(item._id)} src="https://img.icons8.com/color/48/000000/trash--v1.png" alt="" />
              </div>
              <hr />
              </>
            )
          }

        })}
      </div>

      <div className="card-bottom">
        <div className="card-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="card-total-detales">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div className="card-total-detales">
              <p>Delivery Fee</p>
              <p>${getTotalAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="card-total-detales">
              <b>Total</b>
              <b>${getTotalAmount()===0?0:getTotalAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>nevigate('/placeoder')}>PROCEED TO CHAECKOU</button>
        </div>
        <div className="card-pomocode">
        <div>
          <p>If you have a promo code, Enter it here</p>
          <div className="card-pmo-cod-inp">
            <input type="text" placeholder="Enter Promo Code" />
            <button>APPLY</button>
          </div>
        </div>
      </div>
      </div>
</div>

  )
}

export default Card
