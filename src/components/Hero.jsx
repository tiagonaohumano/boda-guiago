import React from 'react'

import BgImg from '../assets/Guiago_16.jpg'


const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-s-200 mb-200'>     
        
        <div className='w-full h-full absolute'>
            <img className='w-full h-full object-cover mix-blend-normal' src={BgImg} alt="/" />
        </div>

      
        <div className='flex flex-col justify-center max-w-[550px]  w-[1000%] px-10 py-4
        absolute bottom-[5%] md:left-[3%] left-[15%] bg-teal-200/50 rounded-xl'>
            <h1 className='py-3 text-5xl md:text-7xl font-bold mx-auto title text-teal-900'>nuestra boda</h1>
            <p className='text-2xl mx-auto'>24 de Junio, 13h</p>
            <button className='py-3 px-6 max-w-md sm:w-[40%] my-4 mx-auto'>Confirmación</button>
        </div>
              
    </div>
  )
}

export default Hero
