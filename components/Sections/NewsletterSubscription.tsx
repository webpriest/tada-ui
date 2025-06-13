"use client"

import { subscribeToNewsletter } from "@/app/actions"
import { toast } from "react-hot-toast"
import Form from "next/form"
import { useRef } from "react"

const NewsletterSubscription = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (formData: FormData) => {
    console.log('Form submitted')
    try {
      const response = await subscribeToNewsletter(formData)
      console.log('Response:', response)
      
      if (response.success) {
        toast.success(response.message)
        // Clear the form
        formRef.current?.reset()
      } else {
        toast.error(response.message)
      }
    } catch (error: any) {
      console.error('Error:', error)
      toast.error('An unexpected error occurred. Please try again.')
    }
  }

  return (
    <Form ref={formRef} action={handleSubmit} className="ed-footer__newsletter-form">
      <input type="email" name="email" placeholder="Enter email" required />
      <button type="submit" className="ed-btn">Subscribe Now<i className="fi fi-rr-arrow-small-right"></i></button>
    </Form>
  )
}

export default NewsletterSubscription