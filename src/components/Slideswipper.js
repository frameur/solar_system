import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCards } from 'swiper'

import 'swiper/css'
import 'swiper/css/effect-cards'

const Slideswipper = () => {
  return (
    <div>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[Autoplay, EffectCards]}
        autoplay={{
          delay: 6000,
          // disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <div class="container">
          <div class="swiper">
            <div class="swiper-wrapper">
              <SwiperSlide>
                <div class="swiper-slide">
                  <a href="/sun">
                    <div class="box the-sun">
                      <div class="middle">
                        <h1>Soleil</h1>
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="swiper-slide">
                  <a href="/mercury">
                    <div class="box planet-mercury">
                      <div class="middle">
                        <h1>Mercure</h1>
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="swiper-slide">
                  <a href="/venus">
                    <div class="box planet-venus">
                      <div class="middle">
                        <h1>Vénus</h1>
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="swiper-slide">
                  <a href="/earth">
                    <div class="box planet-earth">
                      <div class="middle">
                        <h1>La Terre</h1>
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="swiper-slide">
                  <a href="/mars">
                    <div class="box planet-mars">
                      <div class="middle">
                        <h1>Mars</h1>
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="swiper-slide">
                  <a href="/jupiter">
                    <div class="box planet-jupiter">
                      <div class="middle">
                        <h1>Jupiter</h1>
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="swiper-slide">
                  <a href="/saturn">
                    <div class="box planet-saturn">
                      <div class="middle">
                        <h1>Saturne</h1>
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="swiper-slide">
                  <a href="/uranus">
                    <div class="box planet-uranus">
                      <div class="middle">
                        <h1>Uranus</h1>
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="swiper-slide">
                  <a href="/neptune">
                    <div class="box planet-neptune">
                      <div class="middle">
                        <h1>Neptune</h1>
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="swiper-slide">
                  <a href="/pluto">
                    <div class="box planet-pluto">
                      <div class="middle">
                        <h1>Pluton</h1>
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="swiper-slide">
                  <a href="/moon">
                    <div class="box planet-moon">
                      <div class="middle">
                        <h1>La Lune</h1>
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            </div>
            {/* <div id="controls">
      <button class="previous"><i class="fas fa-angle-left"></i></button>
      <button class="next"><i class="fas fa-angle-right"></i></button>
    </div> */}
          </div>
        </div>
      </Swiper>
    </div>
  )
}

export default Slideswipper
