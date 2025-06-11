"use client"

import Image from 'next/image'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Link from 'next/link'

const slides = [
  {
    image: '/assets/images/slider/UffmK20kfXZqSCt7Motj9z2gjDvQVXJmXmChVKW0.webp',
    title: 'Experience the Future',
    description: 'Explore electric vehicles like never before with TADA Autos.',
  },
  {
    image: '/assets/images/slider/YwOZMPqCPUwN7EbkdHfrv0d1paNyB4oU8MF2fWl8.webp',
    title: 'Drive with Confidence',
    description: 'Performance and sustainability meet in every ride.',
  },
  {
    image: '/assets/images/slider/HAegyNWTCecou34O18v1ORKwhyml4LmcgXIXG6u9.webp',
    title: 'Innovation on Wheels',
    description: 'Smart, safe, and stylish electric vehicles for everyone.',
  },
];

const Slider = () => {
  return (
    <section className="ed-hero">
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            // navigation={{ nextEl: '.slider-button-next', prevEl: '.slider-button-prev' }}
            navigation
            pagination={{ type: 'bullets', clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
        >
            <div className="ed-hero__slider">
                {slides.map((slide, index) => (
                    <div className="ed-hero__slider-item">
                        <SwiperSlide key={index}>
                            {/* <Image 
                                src={slide.image} alt="EV" 
                                width={1366} 
                                height={768}
                                priority
                            /> */}
                            <div style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', maxWidth: '100%', maxHeight: '768px' }}>
                                <div className="container ed-container-expand pt-30 pb-10">
                                    <div className="row justify-content-left sheet">
                                        <div className="col-lg-9 col-12">
                                            {/* Hero Content  */}
                                            <div className="ed-hero__content text-left">
                                                <h1 className="ed-hero__content-title ed-split-text left">
                                                    {slide.title}
                                                </h1>
                                                <div className="ed-hero__search p-0">
                                                    <Link href="/evs" className="ed-btn">Explore Now<i className="fi fi-rr-arrow-small-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                ))}
                
                {/* <div className="ed-hero__slider-item">
                    <SwiperSlide key={2}>
                        <Image 
                            src="/assets/images/slider/YwOZMPqCPUwN7EbkdHfrv0d1paNyB4oU8MF2fWl8.webp" alt="EV" 
                            width={1366} 
                            height={768}
                            priority
                        />
                    </SwiperSlide>
                </div>
                <div className="ed-hero__slider-item">
                    <SwiperSlide key={3}>
                        <Image 
                            src="/assets/images/slider/HAegyNWTCecou34O18v1ORKwhyml4LmcgXIXG6u9.webp" alt="EV" 
                            width={1366} 
                            height={768}
                            priority
                        />
                    </SwiperSlide>
                </div> */}
            </div>
        </Swiper>
    </section>
    // <section className="ed-hero ed-hero--style3">
    //     {/* @if($sliders->isNotEmpty()) */}
    //     <div className="owl-carousel ed-hero__slider" suppressHydrationWarning>
    //         {/* @foreach($sliders as $slider) */}
    //         <div className="ed-hero__slider-item" suppressHydrationWarning>
    //             <Image 
    //               src="/assets/images/slider/UffmK20kfXZqSCt7Motj9z2gjDvQVXJmXmChVKW0.webp" alt="EV" 
    //               width={1366} 
    //               height={768}
    //               priority
    //               suppressHydrationWarning
    //             />
    //         </div>
    //         {/* @endforeach */}
    //     </div>
    //     {/* @endif */}

    //     <div className="container ed-container-expand">
    //         <div className="row justify-content-left">
    //             <div className="col-lg-7 col-12">
    //                  {/* Hero Content  */}
    //                 <div className="ed-hero__content text-left">
    //                     <h1 className="ed-hero__content-title ed-split-text left">
    //                         Built for Tomorrow.<br />
    //                         Ready Today
    //                     </h1>
    //                     <div className="ed-hero__search p-0">
    //                         <a href="#" className="ed-btn">Explore Now<i className="fi fi-rr-arrow-small-right"></i></a>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </section>
  )
}

export default Slider