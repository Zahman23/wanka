import React from 'react'


//import component
import Informasi from './Informasi'
import Social from './Social'

const Footer = () => {
  return (
    <footer className='bg-tertiary' style={{padding: '1.5rem 0 1.5rem 0'}}>
      <div className='container mx-auto'>
        {/* informasi */}
        <Informasi />

        {/* social */}
        <Social />
      </div>
    </footer>
  )
}

export default Footer