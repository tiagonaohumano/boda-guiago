import React, {useState} from 'react';
import { Link, animateScroll as scroll} from 'react-scroll'

import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  
  const handleClose = () => setNav(!nav)


  return (
    <div className='w-screen h-[100px] z-10 bg-slate-200 fixed drop-shadow-lg text-teal-700'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold ml-6 mr-10 sm:text-4xl title'>Guillaume y Tiago</h1>
          <ul className='hidden md:flex mx-auto'>
            <li><Link to="home" smooth={true} offset={50} duration={500}>Início</Link></li>
            <li><Link to="transporte" smooth={true} offset={-150} duration={500}>Transporte</Link></li>
            <li><Link to="alojamientos" smooth={true} offset={-50} duration={500}>Alojamientos</Link></li>
            <li><Link to="regalos" smooth={true} offset={-50} duration={500}>Regalos</Link></li>
            <li><Link to="etiqueta" smooth={true} offset={-50} duration={500}>Etiqueta</Link></li>
            <li><Link to="confirmacion" smooth={true} offset={50} duration={500}>Confirmación</Link></li>
          </ul>
        </div>
        <div className='md:hidden mr-5' onClick={handleClick}>
          {!nav ? <Bars3Icon className='w-8' /> : <XMarkIcon className='w-8' />}
          
        </div> 
      </div>
        
      <ul className={!nav ? 'hidden' : 'absolute bg-emerald-50 w-full px-8 text-center '}>
        <li className='border-b-2 border-zinc-200 w-full hover:bg-emerald-100'><Link onClick={handleClose}  to="home" smooth={true} offset={50} duration={500}>Início</Link></li>
        <li className='border-b-2 border-zinc-200 w-full'><Link onClick={handleClose}  to="transporte" smooth={true} offset={-150} duration={500}>Transporte</Link></li>
        <li className='border-b-2 border-zinc-200 w-full'><Link onClick={handleClose}  to="alojamientos" smooth={true} offset={-50} duration={500}>Alojamientos</Link></li>
        <li className='border-b-2 border-zinc-200 w-full'><Link onClick={handleClose}  to="regalos" smooth={true} offset={-50} duration={500}>Regalos</Link></li>
        <li className='border-b-2 border-zinc-200 w-full'><Link onClick={handleClose}  to="etiqueta" smooth={true} offset={-50} duration={500}>Etiqueta</Link></li>
        <li className='border-b-2 border-zinc-200 w-full'><Link onClick={handleClose}  to="confirmacion" smooth={true} offset={50} duration={500}>Confirmación</Link></li>
      </ul>

        
    </div>
  )
}

export default Navbar;
