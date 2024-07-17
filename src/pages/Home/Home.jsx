import './Home.css'
import Hader from '../../component/Hader/Hader'
import ExplorMenu from '../../component/ExplorMenu/ExplorMenu'
import { useState } from 'react'
import FoodDisplay from '../../component/FoodDisplay/FoodDisplay'
import AppDownlode from '../../component/AppDownlode/AppDownlode'

const Home = () => {

  const [category,setCategory] =useState("All")
  return (
    <div>
      <Hader/>
      <ExplorMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownlode/>
    </div>
  )
}

export default Home
