import Image from "next/image"

const Testimonials = () => {
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
                    <div className="swiper ed-testimonial__slider-3">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="ed-testimonial__slider-item">
                                    <div className="ed-testimonial__author">
                                        <div className="ed-testimonial__author-img">
                                            <Image 
                                                src="/assets/images/icons/user.png" 
                                                alt="user"
                                                width={56}
                                                height={56}
                                            />
                                        </div>
                                        <div className="ed-testimonial__author-info">
                                            <h5>Adenike B.</h5>
                                            <p>Geologist</p>
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
                                        "Switching to an electric vehicle was the best decision I've made! It's smooth, quiet, and I'm saving so much on fuel. The charging stations are more accessible than I thought. I love the eco-friendly vibe too!"
                                    </p>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="ed-testimonial__slider-item">
                                    <div className="ed-testimonial__author">
                                        <div className="ed-testimonial__author-img">
                                            <Image 
                                                src="/assets/images/icons/user.png" 
                                                alt="user"
                                                width={56}
                                                height={56}
                                            />
                                        </div>
                                        <div className="ed-testimonial__author-info">
                                            <h5>Paul K.</h5>
                                            <p>Doctor</p>
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
                                        "I was skeptical about EVs until I took a test drive. The instant torque and acceleration blew me away! Plus, I no longer worry about fuel prices. My EV is sleek, smart, and reliable."
                                    </p>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="ed-testimonial__slider-item">
                                    <div className="ed-testimonial__author">
                                        <div className="ed-testimonial__author-img">
                                            <Image 
                                                src="/assets/images/icons/user.png" 
                                                alt="user"
                                                width={56}
                                                height={56}
                                            />
                                        </div>
                                        <div className="ed-testimonial__author-info">
                                            <h5>Aisha B.</h5>
                                            <p>Lawyer</p>
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
                                        "The convenience of charging at home is unmatched. I just plug it in overnight and it's ready every morning. It's low maintenance and perfect for city driving. I'm never going back to petrol!"
                                    </p>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="ed-testimonial__slider-item">
                                    <div className="ed-testimonial__author">
                                        <div className="ed-testimonial__author-img">
                                            <Image 
                                                src="/assets/images/icons/user.png" 
                                                alt="user"
                                                width={56}
                                                height={56}
                                            />
                                        </div>
                                        <div className="ed-testimonial__author-info">
                                            <h5>Emeka O.</h5>
                                            <p>Pilot</p>
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
                                        "What I love most about my EV is the technology - from the touchscreen controls to the regenerative braking. It feels futuristic but very practical. I recommend it to anyone looking for innovation and savings"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
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