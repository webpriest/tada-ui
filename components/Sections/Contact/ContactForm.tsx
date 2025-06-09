import { createContactMessage } from "@/app/actions"
import Form from "next/form"

const ContactForm = () => {

  return (
    <section className="ed-apply background-image" style={{ backgroundImage: "url(/assets/images/apply/bg-img.webp"}}>
        <div className="container ed-container">
            <div className="row">
                <div className="col-lg-7 col-12">
                    <div className="ed-apply__main position-relative">
                        <div className="ed-apply__shapes">
                            <img 
                                className="shape-1" 
                                src="/assets/images/apply/vector.svg" 
                                alt="vector"
                                width={186}
                                height={186}
                            />
                            <img 
                                className="shape-2" 
                                src="/assets/images/apply/pattern.svg" 
                                alt="pattern"
                                width={49}
                                height={94}
                            />
                        </div>

                        <div className="ed-contact__form wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                            <div className="ed-contact__form-head">
                                <span className="ed-contact__form-sm-title">CONTACT US</span>
                                <h3 className="ed-contact__form-big-title">
                                    Let us know your preferences or inquiry
                                </h3>
                            </div>
                            <Form action={createContactMessage} className="ed-contact__form-main">
                                <div className="row">
                                    <div className="col-lg-12 col-12">
                                        <div className="form-group">
                                            <input type="text" name="name" placeholder="Full name" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="email" name="email" placeholder="Enter your email" required />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="text" name="company" placeholder="Your company (optional)" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="form-group">
                                            <input type="tel" name="phone" placeholder="Phone" maxLength={11} />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-12">
                                        <div className="form-group">
                                            <input type="text" name="city" placeholder="City where you live" />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-group">
                                            <textarea name="message" placeholder="Enter your message"></textarea>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        {/* <div className="form-check">
                                            <label className="form-check-label" htmlFor="flexCheckDefault"> <input className="form-check-input" type="checkbox" value="1" id="flexCheckDefault" required />I agree to the Privacy Policy. </label>
                                        </div> */}
                                    </div>

                                    <div className="col-12">
                                        <div className="ed-contact__form-btn">
                                            <button type="submit" className="ed-btn">Send Message<i className="fi fi-rr-arrow-small-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactForm