import React, { useContext, useState } from 'react'
import'./Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("home");
    const {getTotalAmount}= useContext(StoreContext)

  return (
    <div className='navbar'>
       <Link to='/'> <img src={assets.resturent_logo} alt="" className="logo" /></Link>
        <ul className="navbar-manu">
            <Link to={'/'} onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
            <a href='#app-downloe' onClick={()=>setMenu("mobiel-app")} className={menu==="mobiel-app"?"active":""}>mobiel-app</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" className="search-icon" />
            <div className="navbar-search-icone">
                <Link to='/card'><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>
    </div>
  )
}

export default Navbar
