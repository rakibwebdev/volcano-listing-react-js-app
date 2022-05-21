import React from 'react'
import hero_img from '../../assets/img/hero-img.jpeg'
function Home() {
    return (
        <div className='home__section'>
            <h1>Volcanoes of the World</h1>
            <img src={hero_img} alt="Hero" className='img-responsive' />
        </div>
    )
}

export default Home;