import React from 'react'

// import data navigation
import { navigation } from '../../data'

// import link
import { Link } from 'react-scroll'

const FasilitasKami = () => {
  return (
    <div className='relative'>
        <h4 className='text-xl font-semibold text-gray-200 uppercase px-[1rem] after:content-[""] after:w-[0.4rem] after:h-[1.9rem] after:bg-gray-200 after:absolute  after:left-0 before:'>Fasilitas Kami</h4>
        <div className='mt-3'>
            {navigation.map((item,idx) => {
                return(
                    <li 
                    key={idx}
                    className='cursor-pointer'
                    >
                        <Link 
                        to={item.href}
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className='transition-all duration-300'
                        >
                            {item.name}
                        </Link>
                    </li>
                )
            })}
        </div>
    </div>
  )
}

export default FasilitasKami