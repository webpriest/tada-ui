
const Faqs = () => {
  return (
    <section className="ed-faq section-gap position-relative">
        <div className="container ed-container">
            <div className="ed-faq__inner position-relative">
                <div className="row align-items-center">
                    <div className="col-lg-12 col-xl-6 col-12">

                        <div className="ed-faq__images position-relative">
                            <div className="ed-faq__images-group">
                                <div className="ed-faq__image-group-1">
                                    <img className="faq-img-1" src="/assets/images/faq/faq-img-1.png" alt="FAQs" />
                                </div>
                                <div className="ed-faq__image-group-2">
                                    <img className="FAQs" src="/assets/images/faq/faq-img-2.png" alt="FAQs" />
                                    <img className="faq-img-3" src="/assets/images/faq/faq-img-3.png" alt="FAQs" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-xl-6 col-12">
                        {/* Faq Content */}
                        <div className="ed-faq__content">
                            <div className="ed-section-head m-0">
                                <span className="ed-section-head__sm-title">FREQUENTLY ASKED QUESTIONS</span>
                                <h3 className="ed-section-head__title ed-split-text right">
                                    Most Popular Questions About Our EVs
                                </h3>
                            </div>
                            <div className="ed-faq__accordion faq-inner accordion" id="accordionExample">
                                {/* Single Faq */}
                                <div className="ed-faq__accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            What types of electric vehicles does TADA Autos offer?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="ed-faq__accordion-body">
                                            <p className="ed-faq__accordion-text">
                                                TADA Autos offers a range of electric vehicles, including compact cars, SUVs, and luxury sedans, all designed for efficiency, performance, and sustainability. Our models cater to various needs, from daily commuting to long-distance travel.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Faq */}
                                <div className="ed-faq__accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Does TADA Autos provide home charging solutions?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="ed-faq__accordion-body">
                                            <p className="ed-faq__accordion-text">
                                                Yes, TADA Autos offers home charging solutions, including Level 2 chargers that can be installed at your residence. Our team can assist with selecting and installing the right charger to suit your needs, ensuring convenient and efficient charging.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Faq */}
                                <div className="ed-faq__accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            How can I contact TADA Autos technical support if I experience an issue with my EV?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="ed-faq__accordion-body">
                                            <p className="ed-faq__accordion-text">
                                                You can reach TADA Autos technical support 24/7 via our toll-free hotline, email, or through the TADA Autos mobile app. Our support team is ready to assist with diagnostics, software updates, or scheduling service appointments.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Single Faq */}
                                <div className="ed-faq__accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            What is the average cost of maintaining a TADA Autos EV compared to a traditional gas-powered vehicle?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="ed-faq__accordion-body">
                                            <p className="ed-faq__accordion-text">
                                                TADA Autos EVs typically have lower maintenance costs than gas-powered vehicles, averaging 30-50% less annually. This is due to fewer moving parts, no oil changes, and reduced wear on brakes. Routine maintenance includes tire rotations, software updates, and occasional battery checks.
                                            </p>
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

export default Faqs