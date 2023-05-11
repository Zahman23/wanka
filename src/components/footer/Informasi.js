import React from 'react'

// import data informasi
import { informasi } from '../../data'

//import components
import KontakKami from './KontakKami'
import LayananKami from './LayananKami'
import TentangKami from './TentangKami'
import FasilitasKami from './FasilitasKami'

const Informasi = () => {
  return (
    <div className='grid mb-4 lg:justify-center lg:grid-cols-2 xl:grid-cols-4 gap-y-12 lg:gap-x-8 lg:gap-y-8'>
        {/* Tentang Kami */}
        <TentangKami />

        {/* Layanan Kami */}
        <LayananKami />

        {/* informansi */}
        <FasilitasKami />

        {/* Kontak kami */}
        <KontakKami />
    </div>
  )
}

export default Informasi