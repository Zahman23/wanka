import React, {useState, useEffect} from 'react'

//logo 
import Logo from '../../assets/img/logo.svg'

// import component
import Nav from './Nav'
import NavMobile from './NavMobile'

const Header = () => {
  const [bg, setBg] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false)
    })
  })

  return (
    <header className={`${bg ? 'bg-tertiary h-20' : 'h-20'} flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>
      <div className='container mx-auto h-full flex items-center justify-between'>
        {/* logo */}
        <a href='#'> 
          <h1 className='text-2xl font-bold'>Wanka</h1>
        </a>
        {/* Nav */}
        <div className='hidden lg:block'>
          <Nav />
        </div>
        {/* NavMobile */}
        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  )
}

export default Header