import React from 'react'
import Contactus from '../components/Contactus'
import ZoomCard from '../components/ZoomCard'

export default function Sec8() {
  return (
    <div  className="w-full h-full relative text-white">

      <div className='justify-center relative lg:grid lg:grid-flow-col'>
        <div id='contactus' className='lg:ml-20 order-last'>
        <Contactus/>
        </div>
        <div className='lg:mr-20'>
        <ZoomCard/>
        </div>
      </div>
    </div>
  )
}
