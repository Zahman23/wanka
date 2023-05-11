import React from 'react'

// import icon
import { AiOutlineWhatsApp, AiOutlineMail} from 'react-icons/ai'


const KontakKami = () => {
  return (
    <div className='relative'>
        <h4 className='text-xl font-semibold text-gray-200 uppercase px-[1rem] after:content-[""] after:w-[0.4rem] after:h-[1.9rem] after:bg-gray-200 after:absolute  after:left-0 before:'>Kontak Kami</h4>
        <div className='mt-3'>
            <p>Workshop <br /> Jl.paledang no 88 Rt 02 Rw 02 kel Cempaka, kec Andir.Batas Kota </p>
            <div className='flex text-center items-center gap-x-1'>
              <AiOutlineWhatsApp />
              <p>081214147179</p>
            </div>
            <div className='flex text-center items-center gap-x-1'>
              <AiOutlineMail />
              <p>iwanbudiawan@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default KontakKami