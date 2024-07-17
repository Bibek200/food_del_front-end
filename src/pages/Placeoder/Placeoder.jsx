import React, { useContext } from 'react'
import './Placeoder.css'
import { StoreContext } from '../../Context/StoreContext'
const Placeoder = () => {
const {getTotalAmount} = useContext(StoreContext)

  return (
   <form action="" className='place-oder'>
    <div className="oder-left">
      <p className="titel">Delivery Informetion</p>
      <div className="multi-filt">
        <input type="text" id="name" name="name" placeholder='Enter your First name ' required/>
        <input type="text" id="name" name="name" placeholder='Enter your Last name ' required/>
      </div>
      <input type="email" id="name" name="name" placeholder='Enter your Email ' required/>
      <input type="text" id="name" name="name" placeholder='street ' required/>
      <div className="multi-filt">
        <input type="text" id="name" name="name" placeholder='City ' required/>
        <input type="text" id="name" name="name" placeholder='State ' required/>
      </div>
      <div className="multi-filt">
        <input type="text" id="name" name="name" placeholder='Zip code ' required/>
        <input type="text" id="name" name="name" placeholder='Country ' required/>
      </div>
      <input type="text" id="name" name="name" placeholder='Enter your Phone number ' required/>

    </div>

    <div className="oder-rig">
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
    </div>
   </form>
  )
}

export default Placeoder
