import Image from "next/image"
import Link from "next/link"

const FooterCta = () => {
  return (
    <section className="ed-call-action position-relative">
        <div className="container ed-container">
            <div className="ed-call-action__inner position-relative">
                <div className="ed-call-action__shapes">
                    <Image className="ed-call-action__shape-2" 
                        src="/assets/images/call-action/call-action-1/shape-2.svg" 
                        alt="shape-2"
                        width={44}
                        height={37}
                    />
                    <Image 
                        className="ed-call-action__shape-3 updown-ani" 
                        src="/assets/images/call-action/call-action-1/shape-3.svg" 
                        alt="shape-3"
                        width={108}
                        height={67}
                    />
                </div>
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="ed-call-action__img">
                            <Image 
                                src="/assets/images/call-action/call-action-img.png" 
                                alt="call-action-img"
                                width={332}
                                height={448}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 order-class">
                        <div className="ed-call-action__content">
                            <div className="ed-section-head">
                                <span className="ed-section-head__sm-title">GET STARTED NOW</span>
                                <h3 className="ed-section-head__title">
                                    Affordable Electric Vehicles <br />
                                    Compatible with Most Budgets
                                </h3>
                                <p className="ed-section-head__text">
                                    Ready to make the switch to clean, smart, and powerful driving? Discover our latest Electric Vehicles—eco-friendly, cost-saving, and packed with innovation.
                                </p>
                            </div>
                            <div className="ed-call-action__content-btn">
                                <Link href="/vehicles" className="ed-btn"> Place Your Order Now<i className="fi fi-rr-arrow-small-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FooterCta