import React from 'react'

// import data testimonials
import { testimonials } from '../../data'

const LayananKami = () => {
  return (
    <div className='relative'>
        <h4 className='text-xl font-semibold text-gray-200 uppercase px-[1rem] after:content-[""] after:w-[0.4rem] after:h-[1.9rem] after:bg-gray-200 after:absolute  after:left-0 before:'>Layanan Kami</h4>
        <div className='mt-4'>
            {testimonials.map((item,idx) => {
                return(
                    <li 
                    key={idx}
                    >
                        {item.authorName}
                    </li>
                )
            })}
        </div>
    </div>
  )
}

export default LayananKami