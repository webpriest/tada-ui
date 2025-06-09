import { createContactMessage } from "@/app/actions"
import Form from "next/form"

const PettyContactForm = () => {

  return (
    <Form action={createContactMessage} className="ed-contact__form-main">
        <div className="form-group">
            <input type="text" name="name" placeholder="Full name" />
        </div>
        <div className="form-group">
            <input type="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="row">
            <div className="col-lg-6 col-12">
                <div className="form-group">
                    <input type="tel" name="phone" placeholder="Phone" maxLength={11} required />
                </div>
            </div>
            <div className="col-lg-6 col-12">
                <div className="form-group">
                    <input type="text" name="city" placeholder="City where you live" />
                </div>
            </div>
        </div>
        <div className="form-group">
            <input type="text" name="company" placeholder="Your company (optional)" />
        </div>

        <div className="form-group">
            <textarea name="message" placeholder="Let us know how we could be of help"></textarea>
        </div>

        <div className="ed-contact__form-btn">
            <button type="submit" className="ed-btn">Send Message<i className="fi fi-rr-arrow-small-right"></i></button>
        </div>
    </Form>
  )
}

export default PettyContactForm