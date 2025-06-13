"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Image from 'next/image'

interface Testimonial {
    id: number;
    name: string;
    position: string;
    content: string;
    photo: string;
}

const Testimonials = () => {
    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "Adenike B.",
            position: "Geologist",
            content: "Switching to an electric vehicle was the best decision I've made! It's smooth, quiet, and I'm saving so much on fuel. The charging stations are more accessible than I thought. I love the eco-friendly vibe too!",
            photo: "/assets/images/icons/user.png"
        },
        {
            id: 2,
            name: "Paul K.",
            position: "Doctor",
            content: "I was skeptical about EVs until I took a test drive. The instant torque and acceleration blew me away! Plus, I no longer worry about fuel prices. My EV is sleek, smart, and reliable.",
            photo: "/assets/images/icons/user.png"
        },
        {
            id: 3,
            name: "Aisha B.",
            position: "Lawyer",
            content: "The convenience of charging at home is unmatched. I just plug it in overnight and it's ready every morning. It's low maintenance and perfect for city driving. I'm never going back to petrol!",
            photo: "/assets/images/icons/user.png"
        },
        {
            id: 4,
            name: "Emeka O.",
            position: "Pilot",
            content: "What I love most about my EV is the technology - from the touchscreen controls to the regenerative braking. It feels futuristic but very practical. I recommend it to anyone looking for innovation and savings",
            photo: "/assets/images/icons/user.png"
        }
    ]

    return (
        <section className="ed-testimonial ed-testimonial--style4 section-gap overflow-hidden">
            <div className="container ed-container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-12">
                        <div className="ed-section-head text-center">
                            <span className="ed-section-head__sm-title">TESTIMONIAL</span>
                            <h3 className="ed-section-head__title ed-split-text left">
                                What Our Clients are Saying
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 position-relative">
                        <Swiper
                            modules={[Autoplay, Pagination, Navigation]}
                            spaceBetween={30}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            className="ed-testimonial__slider-3"
                        >
                            {testimonials.map((testimonial) => (
                                <SwiperSlide key={testimonial.id}>
                                    <div className="ed-testimonial__slider-item">
                                        <div className="ed-testimonial__author">
                                            <div className="ed-testimonial__author-img">
                                                <Image 
                                                    src={testimonial.photo}
                                                    alt={testimonial.name}
                                                    width={56}
                                                    height={56}
                                                />
                                            </div>
                                            <div className="ed-testimonial__author-info">
                                                <h5>{testimonial.name}</h5>
                                                <p>{testimonial.position}</p>
                                            </div>
                                        </div>
                                        <ul className="ed-testimonial__rattings">
                                            <li><i className="icofont-star"></i></li>
                                            <li><i className="icofont-star"></i></li>
                                            <li><i className="icofont-star"></i></li>
                                            <li><i className="icofont-star"></i></li>
                                            <li><i className="icofont-star"></i></li>
                                        </ul>
                                        <p className="ed-testimonial__text">
                                            {testimonial.content}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="swiper-button-next">
                            <i className="fi fi-rr-arrow-right"></i>
                        </div>
                        <div className="swiper-button-prev">
                            <i className="fi fi-rr-arrow-left"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials