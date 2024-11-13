import React from 'react'
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="Featured" description="This is description 1"/>
      <FeaturedProducts type="Trending" description="This is description 2"/>
    </div>
  )
}

export default Home
