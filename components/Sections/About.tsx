import Image from "next/image"

const About = () => {
  return (
    <section className="ed-about ed-about--style-3 section-gap position-relative">
        <div className="ed-about__shapes">
            <Image 
                className="shape-1" 
                src="/assets/images/about/partners/border-circle.svg" 
                alt="border-circle"
                width={459}
                height={567}
            />
            <Image 
                className="shape-2" 
                src="/assets/images/about/partners/vector-1.svg" 
                alt="vector-1"
                width={201}
                height={320}
            />
        </div>

        <div className="container ed-container">
            <div className="row justify-content-center mb-10">
                <div className="col-lg-10 col-md-10 col-12">
                    <div className="ed-about__head">
                        <h3 className="ed-about__head-title ed-split-text left">
                            Our Partners
                        </h3>
                        <div className="ed-about__award">
                            <Image 
                                src="/assets/images/about/partners/toyota.png" 
                                alt="Toyota"
                                width={90}
                                height={90}
                            />
                            <Image 
                                src="/assets/images/about/partners/byd.png" 
                                alt="BYD"
                                width={90}
                                height={90}
                            />
                            <Image 
                                src="/assets/images/about/partners/tesla.png" 
                                alt="Tesla"
                                width={90}
                                height={90}
                            />
                            <Image
                                src="/assets/images/about/partners/geely.png" 
                                alt="Geely"
                                width={90}
                                height={90}
                            />
                            <Image 
                                src="/assets/images/about/partners/zeekr.png" 
                                alt="Zeekr"
                                width={90}
                                height={90}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="ed-about__inner position-relative">
                        <div className="ed-about__image">
                            <div className="ed-about__image-shapes">
                                <Image 
                                    className="shape-1" 
                                    src="/assets/images/about/partners/circle-pattern.svg" 
                                    alt="circle-pattern"
                                    width={188}
                                    height={188}
                                />
                            </div>
                            <div className="ed-about__image-main">
                                <Image 
                                    src="/assets/images/about/partners/about.webp" 
                                    alt="About TADA"
                                    width={624}
                                    height={600}
                                />
                            </div>
                            <div className="ed-about__counter">
                                <div className="ed-about__counter-item">
                                    <h4><span className="counter">7</span>+</h4>
                                    <p>EV Brands</p>
                                </div>
                                <div className="ed-about__counter-item">
                                    <h4><span className="counter">128</span>+</h4>
                                    <p>In Sales</p>
                                </div>
                            </div>
                        </div>
                        <div className="ed-about__content-shapes">
                            <Image 
                                className="shape-1" 
                                src="/assets/images/about/partners/vector-2.svg" 
                                alt="vector-2"
                                width={227}
                                height={250}
                            />
                            <Image 
                                className="shape-2" 
                                src="/assets/images/about/partners/vertical-4-pattern.svg" 
                                alt="vertical-4-pattern"
                                width={49}
                                height={94}
                            />
                        </div>

                        <div className="ed-about__content position-relative">
                            <div className="ed-about__tab">
                                <div className="ed-about__tab-menu tab-menu">
                                    <div className="list-group" id="list-tab" role="tablist">
                                        <a className="list-group-item active" data-bs-toggle="list" href="#tab1" role="tab">
                                            About Us
                                        </a>
                                        <a className="list-group-item" data-bs-toggle="list" href="#tab2" role="tab">
                                            Our Vision
                                        </a>
                                        <a className="list-group-item" data-bs-toggle="list" href="#tab3" role="tab">
                                            Our Mission
                                        </a>
                                    </div>
                                </div>
                                <div className="ed-about__tab-details tab-details">
                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="tab1" role="tabpanel">
                                            <div className="ed-about__tab-details-widget">
                                                <div className="ed-section-head">
                                                    <span className="ed-section-head__sm-title">WELCOME TO TADA AUTOS</span>
                                                    <h3 className="ed-section-head__title ed-split-text left">
                                                        Bringing Tomorrow's Technology to You Today
                                                    </h3>
                                                    <p className="ed-section-head__text mg-btm-25">
                                                        TADA Autos is an Electric Vehicle (EV) sales company dedicated to accelerating the adoption of sustainable transportation across Africa and beyond. We specialize in the sale of cutting-edge EVs from globally recognized brands such as Tesla, Zeekr, Geely, BYD, and other leading manufacturers in the electric mobility space.
                                                    </p>
                                                    <p className="ed-section-head__text">
                                                        Whether you're looking to reduce your carbon footprint, upgrade your ride, or join the electric revolution, TADA Autos is your trusted partner in the future of mobility.
                                                    </p>
                                                </div>

                                                <div className="ed-about__tab-info">
                                                    <div className="ed-about__tab-info-card">
                                                        <div className="ed-features__icon icon-bg bg-3">
                                                            <Image 
                                                                src="/assets/images/features/features-1/support.svg" 
                                                                alt="icon"
                                                                width={30}
                                                                height={30}
                                                            />
                                                        </div>
                                                        <div className="ed-about__tab-info-content">
                                                            <h4>Best After Sales Support</h4>
                                                        </div>
                                                    </div>

                                                    <div className="ed-about__tab-info-card">
                                                        <div className="ed-features__icon icon-bg bg-2">
                                                            <Image 
                                                                src="/assets/images/features/features-1/trust.svg" 
                                                                alt="icon"
                                                                width={30}
                                                                height={30}
                                                            />
                                                        </div>
                                                        <div className="ed-about__tab-info-content">
                                                            <h4>Trusted Brand Partner</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="tab2" role="tabpanel">
                                            <div className="ed-about__tab-details-widget">
                                                <div className="ed-section-head">
                                                    <span className="ed-section-head__sm-title">TADA'S VISION</span>
                                                    <h3 className="ed-section-head__title ed-split-text left">
                                                        To become Africa's leading electric vehicle provider, driving the transition to sustainable mobility through innovation, accessibility, and customer-centric solutions.
                                                    </h3>
                                                    <p className="ed-section-head__text mg-btm-25">
                                                        
                                                    </p>
                                                    <p className="ed-section-head__text">
                                                        
                                                    </p>
                                                </div>

                                                <div className="ed-about__tab-info">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="tab3" role="tabpanel">
                                            <div className="ed-about__tab-details-widget">
                                                <div className="ed-section-head">
                                                    <span className="ed-section-head__sm-title">TADA'S MISSION</span>
                                                    <h3 className="ed-section-head__title ed-split-text left">
                                                        To deliver high-quality electric vehicles from top global brands while providing exceptional service, seamless technology, and tailored support that empowers individuals and businesses to embrace a cleaner, smarter future of transportation.
                                                    </h3>
                                                    <p className="ed-section-head__text mg-btm-25">
                                                    
                                                    </p>
                                                    <p className="ed-section-head__text">
                                                        
                                                    </p>
                                                </div>

                                                <div className="ed-about__tab-info">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About