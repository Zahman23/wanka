import React from 'react'

//import components
import LayananSlider from './LayananSlider'

const Layanan = () => {
  return (
    <section id='layanan' className='section bg-primary'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center text-center'>
                <p className='text-xl font-semibold'>LAYANAN KAMI</p>
                <h2 className='text-5xl font-bold'>WanKa</h2>
                <p className='subtitle'>Layanan jasa utama dari kami :</p>
            </div>
            <LayananSlider />
        </div>
    </section>
  )
}

export default Layanan