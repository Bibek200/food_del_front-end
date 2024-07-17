import React from 'react'
import './ExplorMenu.css'
import { menu_list } from '../../assets/assets';

const ExplorMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h2>explore our menu</h2>
      <p className='explore-menu-text'>Indulge in our carefully curated menu, featuring everything from comfort food classics to innovative culinary creations. Every dish is made to order with the finest ingredients.</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) =>{
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />

    </div>
  )
}

export default ExplorMenu
