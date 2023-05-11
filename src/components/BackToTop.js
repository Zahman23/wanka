import React, {useState, useEffect} from 'react'

import { animateScroll as scroll } from 'react-scroll'

import { BsChevronUp } from 'react-icons/bs'

const BackToTop = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 600  ? setShow(true) : setShow(false) 
        })
    })

    const handleScroll = () => {
        scroll.scrollToTop()
    }

  return show && (
    <button 
    onClick={handleScroll}
    className={`w-12 h-12 animate-fadeIn  bg-slate-300 right-0 hover:bg-slate-500 rounded-l-xl fixed bottom-24 cursor-pointer flex justify-center items-center transition-all`}
    >
        <BsChevronUp size={25} />
    </button>
  )
}

export default BackToTop