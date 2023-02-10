import React from 'react'
import Mapa from './Mapa'

const Transporte = () => {
  return (
    <div className='grid md:grid-cols-2 w-full mt-10'>

      

      <div className='py-2 border border-slate-300 rounded-xl text-center shadow-xl mt-20 w-[80%] mx-auto min-h-[400px] min-w-[400px] max-h-[500px]'>
          <div>
              <p className='text-2xl font-bold text-indigo-600 title'>Urbanización Los Grifos, nº4</p>
              <p className='text-1xl text-gray-400 mt-2'>Rascafría, Comunidad de Madrid</p>
          </div>
          <div className='w-full h-[80%] min-h-[400px] sm:h-[300px] rounded-lg px-2 py-2'>
            <Mapa />
          </div>
      </div>

      <div name='transporte' className='grid mt-24 mx-auto w-[80%]'>

        <div className='max-w-[1240px] mx-auto'>
          <div className='text-center'>
            <h2 className='text-5xl font-bold title text-teal-900'>Transporte</h2>
            <p className='text-2xl py-6 text-gray-500'>Para que no tengáis que coger el coche, os proponemos que cojáis un autobús que vamos a contratar que saldrá a las 11:30 de
              algum punto céntrico de Madrid. Os confirmaremos el punto de salida en cuanto nos lo concrete la compañía de autobuses.</p>
          </div>


          <div className='grid grid-cols-2 gap-2 px-2 text-center'>
            <div className='border py-8 rounded-xl shadow-xl'>
              <p className='text-2xl font-bold text-indigo-600'>Autobus Ida</p>
              <p className='text-1xl text-gray-400 mt-2'>Saliendo de Madrid</p>
              <p className='text-2xl text-gray-400 mt-2'>11:30</p>
            </div>
            <div className='border py-8 rounded-xl shadow-xl'>
              <p className='text-2xl font-bold text-indigo-600'>Autobus Vuelta</p>
              <p className='text-1xl text-gray-400 mt-2'>Saliendo de Rascafría</p>
              <p className='text-2xl text-gray-400 mt-2'>21:00 / 23:00</p>
            </div>
          </div>

        </div>
      </div>


    </div>


  )
}

export default Transporte
