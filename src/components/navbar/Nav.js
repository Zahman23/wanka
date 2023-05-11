import React from 'react'

//import navigate data
import {navigation} from '../../data'

// import link
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <nav>
        <ul className='flex space-x-8 capitalize text-[15px]'>
            {navigation.map((item, idx) => {
                return (
                    <li className='text-white hover:text-accent cursor-poin
                    ' key={idx}>
                        <Link 
                        to={item.href}
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className='transition-all duration-300 cursor-pointer'
                        >
                            {item.name}
                        </Link>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default Nav