import React from 'react'

//import image
import Image from '../../assets/img/hero.jpg'

const About = () => {
  return (
    <section id='tentangkami' className='section bg-secondary flex items-center'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center xl:flex-row gap-24'>
               <img 
               className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
               src={Image}
               alt=''
               />
               <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                <div className='flex flex-col'>
                    <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3'>Wanka</h2>
                    <p className='mb-4 text-2xl font-semibold text-cyan-800'>Manufacture & Produksi</p>
                    <hr className='mb-8 opacity-5' />
                    <p className='mb-8'>
                        <span className='text-2xl font-primary'>Wanka</span> Merupakan perusahaan jasa manufaktur yang menyediakan jasa pembuatan molding dan produksi karet atau plastik
                    </p>
                </div>
               </div>
            </div>
        </div>
    </section>
  )
}

export default About