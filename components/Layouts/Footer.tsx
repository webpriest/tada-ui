import Image from "next/image"
import FooterCta from "./FooterCta"
import NewsletterSubscription from "../Sections/NewsletterSubscription"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="footer-bg position-relative">
        <div className="footer-bg__img">
            <Image 
                src="/assets/images/footer/footer-bg.png" 
                alt="Footer"
                width={1920}
                height={909}
                priority
            />
        </div>

        {/* Call Action */}
        <FooterCta />

        <footer className="ed-footer position-relative">
            <div className="ed-footer__top position-relative">
                <div className="ed-footer__shapes">
                    <Image 
                        className="ed-footer__shape-1" 
                        src="/assets/images/footer/footer-1/shape-1.svg" 
                        alt="shape-1"
                        width={119}
                        height={121}
                    />
                    <Image 
                        className="ed-footer__shape-2 rotate-ani" 
                        src="/assets/images/footer/footer-1/shape-2.svg" 
                        alt="shape-2"
                        width={101}
                        height={92}
                    />
                </div>
                <div className="container ed-container">
                    <div className="row g-0">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="ed-footer__widget ed-footer__about">
                                <a href="#" className="ed-footer__logo">
                                    <Image 
                                        src="/assets/images/logo.svg" 
                                        alt="footer-logo"
                                        width={122}
                                        height={70}
                                        style={{ width: "auto", height: "auto" }}
                                    />
                                </a>
                                <p className="ed-footer__about-text">
                                    TADA Autos is an Electric Vehicle (EV) sales company dedicated to accelerating the adoption of sustainable transportation across Africa and beyond.
                                </p>
                                <ul className="ed-footer__about-social">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                        <Image 
                                            src="/assets/images/icons/icon-dark-facebook.svg" 
                                            alt="icon-dark-facebook"
                                            width={20}
                                            height={20}
                                        />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com/" target="_blank">
                                        <Image 
                                            src="/assets/images/icons/icon-dark-twitter.svg" 
                                            alt="icon-dark-twitter"
                                            width={20}
                                            height={20}
                                        />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                        <Image 
                                            src="/assets/images/icons/icon-dark-instagram.svg" 
                                            alt="icon-dark-instagram"
                                            width={20}
                                            height={20}
                                        />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-12">
                            <div className="ed-footer__widget">
                                <h4 className="ed-footer__widget-title">Top Brands</h4>
                                <ul className="ed-footer__widget-links">
                                    <li><Link href="/brands/byd">BYD</Link></li>
                                    <li><Link href="/brands/tesla">Tesla</Link></li>
                                    <li><Link href="/brands/toyota">Toyota</Link></li>
                                    <li><Link href="/brands/geely">Geely</Link></li>
                                    <li><Link href="/brands/zeekr">Zeekr</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="ed-footer__widget contact-widget">
                                <h4 className="ed-footer__widget-title">Contact</h4>

                                <div className="ed-footer__contact">
                                    <div className="ed-footer__contact-icon">
                                        <Image 
                                            src="/assets/images/icons/icon-phone-blue.svg" alt="icon-phone-blue"
                                            width={28}
                                            height={28}
                                        />
                                    </div>
                                    <div className="ed-footer__contact-info">
                                        <span>Tech Support</span>
                                        <a href="tel:+234 801 2345 678">+234 801 2345 678</a>
                                    </div>
                                </div>

                                <div className="ed-footer__contact">
                                    <div className="ed-footer__contact-icon">
                                        <Image 
                                            src="/assets/images/icons/icon-envelope-blue.svg" 
                                            alt="icon-envelope-blue"
                                            width={28}
                                            height={28}
                                        />
                                    </div>
                                    <div className="ed-footer__contact-info">
                                        <span>Send Message</span>
                                        <a href="mailto:help@tadaautos.com">help@tadaautos.com</a>
                                    </div>
                                </div>


                                <div className="ed-footer__contact">
                                    <div className="ed-footer__contact-icon">
                                        <Image 
                                            src="/assets/images/icons/icon-location-blue.svg" 
                                            alt="icon-location-blue"
                                            width={28}
                                            height={28}
                                        />
                                    </div>
                                    <div className="ed-footer__contact-info">
                                        <span>Where We Are</span>
                                        <a href="#" target="_blank">Abuja, Nigeria</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="ed-footer__widget newsletter-widget">
                                <h4 className="ed-footer__widget-title">Subscribe</h4>

                                <div className="ed-footer__newsletter">
                                    <p className="ed-footer__about-text">
                                        Enter your email address to join our newsletter subscription
                                    </p>
                                    <NewsletterSubscription />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ed-footer__bottom">
                <div className="container ed-container">
                    <div className="row">
                        <div className="col-12">
                            <p className="ed-footer__copyright-text">
                                &copy; { new Date().getFullYear() } TADA Autos. All Rights Reserved | Maintained By &nbsp;
                                <a href="https://bokertech.com" target="_blank">Boker Technologies</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer