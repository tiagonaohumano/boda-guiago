import React from 'react'

import MapaAlojamientos from './MapaAlojamientos'

const Alojamientos = () => {
    return (
        <div name='alojamientos' className='w-full h-full mt-24 min-w-full lg:h-[1050px] bg-slate-200'>

            <div className='max-w-[1240px] mx-auto text-white relative'>
                <div className='px-4 py-6'>
                    <h2 className='text-5xl font-bold py-8 text-center title text-teal-900'>Alojamientos</h2>
                    <p className='py-4 px-10 md:text-2xl text-center text-1xl text-black'>Estos últimos años Rascafría se ha convertido en un lugar muy popular para celebrar bodas.
                        Cuando tomamos la decisión el pasado mes de noviembre ya estaban ocupados prácticamente todos
                        los alojamientos del Valle de El Paular. Por eso la opción que os recomendamos es que el punto
                        de partida sea Madrid y utilicéis el autobús que contrataremos para llegar al sitio de la boda.
                        De todos modos, si conseguís algún alojamiento por el Valle o en el recorrido que va desde Madrid
                        a Rascafría (por la A1) el autobús os puede recoger allí y dejaros de vuelta sin problema.
                        Aquí tenéis algunos enlaces. También podéis buscar entre las casas particulares que se anuncian plataformas.</p>
                </div>

                <div className='grid grid-col-1 lg:grid-cols-2 relative gap-x-8 gap-y-5 px-4 pt-12 text-blue-900 mb-24'>
                    <div className='bg-transparent mx-auto lg:pt-5'>
                        <div className='grid grid-cols-1 sm:grid-cols-2'>
                            <div className='pb-0'>
                                <ul className='mx-auto'>
                                    <li className='text-md border my-2 py-2 rounded-xl bg-white hover:bg-cyan-100 hover:text-blue-900 text-center'><a href="http://www.hotelruralmarcos.es/localizacion.php" target="_blank" rel="noreferrer"><b>1 →</b> Hostal Rural Marcos</a></li>
                                    <li className='text-md border my-2 py-2 rounded-xl bg-white hover:bg-cyan-100 hover:text-blue-900 text-center'><a href="https://www.booking.com/hotel/es/rural-los-manzanos.es.html" target="_blank" rel="noreferrer"><b>2 →</b> Hotel Rural Los Manzanos</a></li>
                                    <li className='text-md border my-2 py-2 rounded-xl bg-white hover:bg-cyan-100 hover:text-blue-900 text-center'><a href="http://www.hotelruralelvalle.com/" target="_blank" rel="noreferrer"><b>3 →</b> Hotel Rural El Valle</a></li>
                                    <li className='text-md border my-2 py-2 rounded-xl bg-white hover:bg-cyan-100 hover:text-blue-900 text-center'><a href="https://www.apartamentosrascafria.com/" target="_blank" rel="noreferrer"><b>4 →</b> Apartamentos Rascafría</a></li>
                                    <li className='text-md border my-2 py-2 rounded-xl bg-white hover:bg-cyan-100 hover:text-blue-900 text-center'><a href="http://www.casagranero.com/" target="_blank" rel="noreferrer"><b>5 →</b> Hotel Casa Granero</a></li>
                                    <li className='text-md border my-2 py-2 rounded-xl bg-white hover:bg-cyan-100 hover:text-blue-900 text-center'><a href="http://barondillo.com/establecimiento.html" target="_blank" rel="noreferrer"><b>6 →</b> Alojamientos Rurales Barondillo</a></li>
                                    <li className='text-md border my-2 py-2 rounded-xl bg-white hover:bg-cyan-100 hover:text-blue-900 text-center'><a href="http://www.alojamientoslaabuela.com/" target="_blank" rel="noreferrer"><b>7 →</b> Alojamientos Rurales La Abuela</a></li>

                                </ul>

                            </div>
                            <div className='p-0 m-0'>
                                <ul>
                                    <li className='text-md border m-2 py-2 rounded-xl bg-white hover:bg-cyan-100 hover:text-blue-900 text-center'><a href="https://www.apartamentosdelvira.com/" target="_blank" rel="noreferrer"><b>8 →</b> Apartamentos D'Elvira</a></li>
                                    <li className='text-md border m-2 py-2 rounded-xl bg-white hover:bg-cyan-100 hover:text-blue-900 text-center'><a href="https://www.elrinconderascafria.com/" target="_blank" rel="noreferrer"><b>9 →</b> El Rincón de Rascafría</a></li>
                                    <li className='text-md border m-2 py-2 rounded-xl bg-white hover:bg-cyan-100 hover:text-blue-900 text-center'><a href="http://www.caserontrastamara.es/" target="_blank" rel="noreferrer"><b>10 →</b>  El caserón de Trastamara</a></li>
                                    <li className='text-md border m-2 py-2 rounded-xl bg-white hover:bg-cyan-100 hover:text-blue-900 text-center'><a href="https://elchaletderascafria.com/" target="_blank" rel="noreferrer"><b>11 →</b>  El chalet de Rascafría</a></li>
                                    <li className='text-md border m-2 py-2 rounded-xl bg-white hover:bg-cyan-100 hover:text-blue-900 text-center'><a href="https://www.losespinares.es/" target="_blank" rel="noreferrer"><b>12 →</b>  Hostal los Espinares</a></li>
                                    <li className='text-md border m-2 py-2 rounded-xl bg-white hover:bg-cyan-100 hover:text-blue-900 text-center'><a href="https://posadaelcampanario.com/" target="_blank" rel="noreferrer"><b>13 →</b>  Posada el Campanario</a></li>
                                    <li className='text-md border m-2 py-2 rounded-xl bg-white hover:bg-cyan-100 hover:text-blue-900 text-center'><a href="https://www.posadadeisar.com/" target="_blank" rel="noreferrer"><b>14 →</b>  Ecoposada de Isar</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='border border-slate-300 text-center shadow-xl mx-auto min-h-[400px] min-w-full mb-5'>
                        <div className='w-full h-full'>
                            <MapaAlojamientos />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Alojamientos
