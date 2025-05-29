import PageHeader from "@/components/Layouts/PageHeader"
import Image from "next/image"

const About = () => {
  return (
    <>
      <PageHeader title="About TADA" />

      <section className="ed-why-choose ed-why-choose--style3 section-gap position-relative">
        <div className="container ed-container">
            <div className="row">
                <div className="col-lg-6 col-12">
                    <div className="ed-w-choose__content">
                        <div className="ed-section-head">
                            <span className="ed-section-head__sm-title">WHO WE ARE</span>
                            <h3 className="ed-section-head__title ed-split-text left">
                                Driving the future of mobility through innovation
                            </h3>
                            <p className="ed-section-head__text">
                                As a forward-thinking Electric Vehicle (EV) sales company, we specialize in delivering next-generation EVs that redefine performance, efficiency, and environmental consciousness.
                            </p>
                        </div>

                        <div className="ed-w-choose__info">
                            <div className="ed-w-choose__info-single">
                                <div className="ed-w-choose__info-head">
                                    <div className="ed-w-choose__info-icon bg-2">
                                        <Image 
                                          src="/assets/images/about/order.svg" 
                                          alt="icon"
                                          width={104}
                                          height={104}
                                        />
                                    </div>
                                    <h5>Online Ordering</h5>
                                </div>
                                <div className="ed-w-choose__info-bottom">
                                    <p>
                                        Seamless digital ordering through website or mobile app. Deliveries are hassle-free and convenient, saving you time and effort.
                                    </p>
                                </div>
                            </div>
                            <div className="ed-w-choose__info-single">
                                <div className="ed-w-choose__info-head">
                                    <div className="ed-w-choose__info-icon bg-2">
                                        <Image 
                                          src="/assets/images/about/support.svg" 
                                          alt="icon"
                                          width={104}
                                          height={104}
                                        />
                                    </div>
                                    <h5>After Sales Support</h5>
                                </div>
                                <div className="ed-w-choose__info-bottom">
                                    <p>
                                        We offer maintenance packages and warranty services with access to certified service centers and technicians. Use our customer support services via chat, phone, and app.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-12">
                    <div className="ed-w-choose__images ed-w-choose__images--style3 position-relative">
                        <div className="ed-w-choose__main-img--style2 position-relative">
                            <Image 
                              className="why-choose-img-1" 
                              src="/assets/images/about/about-tada.webp" 
                              alt="About TADA"
                              width={350}
                              height={350}
                            />
                            <Image 
                              className="why-choose-img-2" 
                              src="/assets/images/about/ev.webp" 
                              alt="About TADA"
                              width={270}
                              height={200}
                            />
                        </div>
                        <div className="counter-card updown-ani">
                            <div className="counter-card__icon">
                                <i className="fi fi-rr-users"></i>
                            </div>
                            <div className="counter-card__info">
                                <h4><span className="counter">89</span>+</h4>
                                <p>Happy customers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About