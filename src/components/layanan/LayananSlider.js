import React from 'react'

// import testimonial data
import { testimonials } from '../../data'

// import swiper react component
import { Swiper, SwiperSlide} from 'swiper/react'

// import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import '../../swiper.css'

// import required modules
import { Autoplay, Pagination } from 'swiper'

const LayananSlider = () => {
  return (
    <>
    <Swiper 
    pagination={{
      clickable: true,
    }}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
    }}
    modules={[
        Autoplay, Pagination
    ]}
    className='mySwiper'
    >
        {testimonials.map((item, idx) => {
            const {authorImg, authorName, authorText} = item;
            return (
            <SwiperSlide
               key={idx}
            >
                <div className='flex flex-col lg:flex-row gap-12 lg:gap-32'>
                    <div className='w-48 h-48 lg:w-[328px] lg:h-[328px]'>
                        <img 
                        className='rounded-2xl'
                        src={authorImg}
                        alt=''
                        />
                    </div>
                    <div className='flex flex-col max-w-3xl'>
                        <h5 className='font-body text-3xl mb-8 italic font-normal'>{authorName}</h5>
                        <div>
                            <p>{authorText}</p>
                        </div>
                        <div className='mt-6'>
                            <a href='https://wa.me/6281214147179?text=Saya%20tertarik%20dengan%20aksesoris%20yang%20Anda%20jual'>
                            <button className='btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all'>
                             Hubungi Kami
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>)
        })}
    </Swiper>
    </>
  )
}

export default LayananSlider