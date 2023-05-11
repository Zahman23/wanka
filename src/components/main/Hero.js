import React from 'react'

const Hero = () => {
  return (
    <section id='home' className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
        <div className='container mx-auto'>
            <div className='flex h-full items-center justify-center pt-8'>
                <div className='flex flex-col items-center lg:items-center'>
                    <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
                        WanKa
                    </h1>
                    <p className='text-lg font-semibold text-gray-500 mb-[22px] text-center'>
                        Menyediakan jasa pembuatan molding dan produksi Karet atau Plastik
                    </p>
                    <a href='https://wa.me/6281214147179?text=Saya%20tertarik%20dengan%20aksesoris%20yang%20Anda%20jual'>
                    <button className='btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all'>
                        Hubungi Kami
                    </button>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero