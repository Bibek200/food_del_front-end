import React from 'react'
import './AppDownlode.css'
import { assets } from '../../assets/assets'

const AppDownlode = () => {
  return (
    <div className='app-downloe' id='app-downloe'>
        <p>For Better Expreience Download <br/>Tometo App </p>
        <div className="download-platforms">
            <img src={assets.app_store} alt="" />
            <img src={assets.play_store} alt="" />
        </div>
      
    </div>
  )
}

export default AppDownlode
