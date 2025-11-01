import React from 'react'

const Hero = () => {
  return (
     <section className='section-1'>
        {/* /**** Swiper Slider Main **********/}
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          breakpoints={{
            1024: {
              slidesPerView: 1,
              spaceBetween: 0,
            }
          }}
        >
          <SwiperSlide>
            <div className="content" style={{ backgroundImage: `url(${SliderOneImg})` }}>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content" style={{ backgroundImage: `url(${SliderTwoImg})` }}>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
  )
}

export default Hero