import React from 'react'

// import data social
import { social } from '../../data'


const Social = () => {
  return (
    <div className='flex flex-col space-y-6 lg:space-y-0 items-center justify-center'>
          <div className='flex space-x-6 items-center justify-center'>
            {social.map((item,idx) => {
              return(
                <a 
                href={item.href}
                key={idx}
                className='text-4xl text-accent'
                >
                  {item.icon}
                </a>
              )
            })}
          </div>
          <p>&copy; Wanka.co.id - perusahaan jasa Teknik Manufacture</p>
          <p>Web Develop by <a href='#'>Zidan Rohman</a></p>
        </div>
  )
}

export default Social