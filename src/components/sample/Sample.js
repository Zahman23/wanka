import React from 'react'

// import component
import Projects from './Projects'

// import


const Sample = () => {
  return (
    <section id='sample' className='section bg-secondary'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center text-center'>
                <p className='text-4xl font-semibold text-white mb-2'>Sample</p>
                <p className='text-lg subtitle'>Produck :</p>
                <Projects />
            </div>
        </div>
    </section>
  )
}

export default Sample