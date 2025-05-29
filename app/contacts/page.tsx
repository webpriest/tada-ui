import PageHeader from "@/components/Layouts/PageHeader"

const Contacts = () => {
  return (
    <>
      <PageHeader title="Contact Us" />

      <div className="ed-contact__card section-gap">
        <div className="container ed-container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="ed-contact__card-item">
                        <div className="ed-contact__card-icon">
                            <img 
                              src="/assets/images/icons/icon-white-phone.svg" 
                              alt="phone"
                            />
                        </div>
                        <div className="ed-contact__card-info">
                            <a href="tel:+2348012345678">+234 801 2345 678</a>
                            <a href="tel:+2348052345678">+234 805 2345 678</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                    <div className="ed-contact__card-item">
                        <div className="ed-contact__card-icon">
                            <img 
                              src="/assets/images/icons/icon-white-message.svg" 
                              alt="email"
                            />
                        </div>
                        <div className="ed-contact__card-info">
                            <a href="mailto:hello@tadaautos.com">hello@tadaautos.com</a>
                            <a href="mailto:saleso@tadaautos.com">saleso@tadaautos.com</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                    <div className="ed-contact__card-item">
                        <div className="ed-contact__card-icon">
                            <img 
                              src="/assets/images/icons/icon-white-map.svg"
                              alt="address"
                            />
                        </div>
                        <div className="ed-contact__card-info">
                            <a href="#" target="_blank">
                                Abuja, 900107<br />
                                Nigeria
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section className="ed-contact ed-contact--style2 section-gap pt-0 position-relative">
        <div className="container ed-container">
            <div className="row">
                <div className="col-12">
                    <div className="ed-contact__inner">
                        <div className="ed-contact__img">
                            <img 
                              src="/assets/images/contact/contact.webp" 
                              alt="contact"
                            />
                        </div>

                        <div className="ed-contact__form">
                            <div className="ed-contact__form-head">
                                <span className="ed-contact__form-sm-title">CONTACT US</span>
                                <h3 className="ed-contact__form-big-title ed-split-text right">
                                    Have questions? <br />
                                    Let us help
                                </h3>
                            </div>
                            <form action="#" method="post" className="ed-contact__form-main">
                                <div className="form-group">
                                    <input type="text" id="name" name="name" placeholder="Full name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                                </div>

                                <div className="form-group">
                                    <textarea id="message" name="message" placeholder="Let us know how we could be of help" required></textarea>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor="flexCheckDefault"> <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />I agree to the &nbsp;<a href="#">Privacy Policy</a>. </label>
                                </div>
                                <div className="ed-contact__form-btn">
                                    <button type="submit" className="ed-btn">Send Message<i className="fi fi-rr-arrow-small-right"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Contacts