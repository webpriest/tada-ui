import Image from "next/image"

const ContactUs = () => {
  return (
    <div className="offcanvas offcanvas-end ed-sidebar" id="edSidebar" aria-labelledby="offcanvasRightLabel">
        <div className="ed-sidebar-header">
            <a href="#" className="ed-sidebar-logo">
                <Image 
                    src="/assets/images/logo.svg"
                    alt="TADA"
                    width={122} 
                    height={70}
                    style={{ width: "auto", height: "auto" }}
                    priority
                />
            </a>
            <button type="button" className="text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
                <i className="fi fi-rr-cross"></i>
            </button>
        </div>
        <div className="ed-sidebar-body m-0">
            <div className="ed-sidebar-widget">
                <h3 className="ed-sidebar-widget-title">Contact Us:</h3>

                <div className="ed-contact__info-item">
                    <div className="ed-contact__info-icon">
                        <Image src="/assets/images/icons/icon-phone-blue.svg" alt="icon-phone-blue" width={100} 
                                height={100} />
                    </div>
                    <div className="ed-contact__info-content">
                        <span>Tech. Support</span>
                        <a href="tel:+234 801 2345 678">+234 801 2345 678</a>
                    </div>
                </div>

                <div className="ed-contact__info-item">
                    <div className="ed-contact__info-icon">
                        <Image 
                        src="/assets/images/icons/icon-envelope-blue.svg" 
                        alt="icon-envelope-blue"
                        width={100} 
                        height={100} />
                    </div>
                    <div className="ed-contact__info-content">
                        <span>Send Message</span>
                        <a href="mailto:help@tadaautos.com">help@tadaautos.com</a>
                    </div>
                </div>

                <div className="ed-contact__info-item">
                    <div className="ed-contact__info-icon">
                        <Image 
                            src="/assets/images/icons/icon-location-blue.svg" 
                            alt="icon-location-blue"
                            width={100} 
                            height={100}
                        />
                    </div>
                    <div className="ed-contact__info-content">
                        <span>Where We Are</span>
                        <a href="#">Abuja, Nigeria</a>
                    </div>
                </div>
            </div>

            <div className="ed-sidebar-widget">
                <h3 className="ed-sidebar-widget-title">Follow Us:</h3>
                <ul className="ed-sidebar-social">
                    <li>
                        <a href="https://www.facebook.com/" target="_blank"><Image src="/assets/images/icons/icon-dark-facebook.svg" alt="icon-dark-facebook" width={100} 
                                height={100} /></a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com/" target="_blank"><Image src="/assets/images/icons/icon-dark-twitter.svg" alt="icon-dark-twitter" width={100} 
                                height={100} /></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/" target="_blank"><Image src="/assets/images/icons/icon-dark-instagram.svg" alt="icon-dark-instagram" width={100} 
                                height={100} /></a>
                    </li>
                </ul>
            </div>

            <div className="ed-sidebar-widget">
                <h3 className="ed-sidebar-widget-title">Subscribe</h3>
                <form action="#" method="post" className="ed-sidebar-subscribe">
                    <input type="email" name="email-address" placeholder="Enter email" required />
                    <button type="submit" className="ed-btn">Subscribe<i className="fi fi-rr-arrow-small-right"></i></button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactUs